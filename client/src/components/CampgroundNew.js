import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function CampgroundNew() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [errors, setErrors] = useState();
  const { pathname } = useLocation();
  const [jwt, setJwt] = useState(JSON.parse(localStorage.getItem("jwt")));

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
        name,
        price,
        image,
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
            // It set the value from the previous submitted form
            if (err.name) {
              setName(err.name.value);
            }
            if (err.Price) {
              setPrice(err.price.value);
            }
            if (err.image) {
              setImage(err.image.value);
            }
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
        <h2 className="font-bold text-4xl mx-4">Add New Campground</h2>
        <form
          action=""
          method="post"
          className="m-4 grid gap-4"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="author" value={jwt ? jwt.username : ""} />
          <div>
            <label htmlFor="name">
              <div className="my-4 text-gray-800">Campground Name</div>
              <input
                type="text"
                name="name"
                placeholder="Seven Sisters Waterfall"
                className="w-full px-4 py-2 bg-slate-100 focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            {errors && errors.name && (
              <p className="p-2 text-red-600 text-xs">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="price">
              <div className="my-4 text-gray-800">Price</div>
              <input
                type="text"
                name="price"
                placeholder="$149"
                className="w-full px-4 py-2 bg-slate-100 focus:outline-none"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            {errors && errors.price && (
              <p className="p-2 text-red-600 text-xs">{errors.price.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="image">
              <div className="my-4 text-gray-800">Image</div>
              <input
                type="text"
                name="image"
                placeholder="www.thepinoytraveler.com/2018/01/mt-ulap-dly-dayhike.html"
                className="w-full px-4 py-2 bg-slate-100 focus:outline-none"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </label>
            {errors && errors.image && (
              <p className="p-2 text-red-600 text-xs">{errors.image.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="description">
              <div className="my-4 text-gray-800">Description</div>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="6"
                placeholder="The seven Sisters is the 39th tallest waterfall in Norway. The 410-metre tall waterwall consists of seven separate streams, and the tallest of the seven has a free fall that measures 250 metres. The waterfall is located along the Geirangerfjorden in Stranda Municipality in More og Romsdal county, Norway."
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
            value="Add Campground"
            className="block rounded py-4 text-white bg-black"
          />
        </form>
      </article>
      <Footer />
    </>
  );
}

export default CampgroundNew;
