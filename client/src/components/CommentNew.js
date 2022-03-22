import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function CommentNew() {
  const [jwt, setJwt] = useState(JSON.parse(localStorage.getItem("jwt")));
  const [description, setDescription] = useState();
  const [errors, setErrors] = useState();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function handleSubmit(e) {
    let headers;
    if (jwt) {
      headers = {
        "Content-Type": "application/json",
        authorization: `bearer ${jwt.token}`,
      };
    } else {
      headers = {
        "Content-Type": "application/json",
      };
    }
    e.preventDefault();
    fetch(pathname, {
      method: "POST",
      headers,
      body: JSON.stringify({
        description,
        author: e.target.author.value,
      }),
    }).then((response) => {
      if (response.status === 401) {
        navigate("/sign-in");
      } else {
        response.json().then((data) => {
          if (data.errors) {
            // Transform Errors from an array of objects to an object
            let err = {};
            data.errors.map((error) => {
              err = {
                ...err,
                [error.param]: {
                  value: error.value,
                  message: error.msg,
                },
              };
              return err;
            });
            setErrors(err);
            if (err.description) {
              setDescription(err.description.value);
            }
          }
          navigate(data.url);
        });
      }
    });
  }

  return (
    <>
      <Navbar />
      <article className="max-w-lg mx-auto">
        <h2 className="font-bold text-4xl mx-4">Add New Comment</h2>
        <form
          action=""
          method="post"
          className="m-4 grid gap-4"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="author" value={jwt ? jwt.username : ""} />
          <div>
            <label htmlFor="description">
              <div className="my-4 text-gray-800">Description</div>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="6"
                placeholder="This was probably the best camp I've visited this past year, definitely recommend visiting any time soon."
                className="w-full px-4 py-2 resize-none bg-slate-100 focus:outline-none"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            {errors && errors.description && (
              <p className="p-2 text-red-600 text-xs">
                {errors.description.message}
              </p>
            )}
          </div>

          <input
            type="submit"
            value="Post Comment"
            className="block rounded py-4 text-white bg-black"
          />
        </form>
      </article>
      <Footer />
    </>
  );
}

export default CommentNew;
