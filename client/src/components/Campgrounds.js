/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import searchIcon from "../Assets/Search Icon.svg";

function Campgrounds() {
  const [camps, setCamps] = useState([]);
  const [error, setError] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(pathname).then((response) =>
      response.json().then((data) => setCamps(data))
    );

    return () => {};
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${pathname}?term=${e.target.term.value}`).then((response) => {
      response.json().then((data) => {
        if (data.error) {
          e.target.term.value = "";
          setError(data.error);
        }
        if (data.url) {
          navigate(data.url);
        }
      });
    });
  }

  return (
    <>
      <Navbar />
      <article className="max-w-[1440px] mx-auto">
        <section className="max-w-7xl mx-auto md:px-10 px-4 py-14 bg-orange-50">
          <header className="py-4">
            <h2 className="text-3xl font-bold">Welcome to YelpCamp!</h2>
            <p className="max-w-sm text-gray-800">
              View our hand-picked campgrounds from all over the world, or add
              your own
            </p>
          </header>
          <form
            action=""
            className="max-w-md flex flex-wrap gap-4 my-4"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-4 items-center px-4 rounded shadow-md bg-white">
              <span className="w-8">
                <img src={searchIcon} alt="search icon" />
              </span>
              <span>
                <input
                  type="search"
                  name="term"
                  id="term"
                  placeholder="Search for camps"
                  className="w-full py-4 focus:outline-none"
                />
              </span>
            </div>

            <input
              type="submit"
              value="Search"
              className="flex-auto p-4 rounded font-bold text-white bg-black"
            />
          </form>
          <p className="text-xs text-red-700">{error}</p>
          <div>
            <Link to="/campground/new" className="underline text-gray-800">
              Or add your own campground
            </Link>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-10 py-14 flex flex-wrap justify-evenly">
          {camps.length ? (
            camps.map((camp) => (
              <article className="max-w-sm  p-4 shadow border rounded">
                <div>
                  <img src={camp.image} alt="" className="rounded-md" />
                </div>
                <h3 className="my-4 font-bold text-lg">{camp.name}</h3>
                <div>
                  <Link
                    to={`/campground/${camp._id}`}
                    className="block p-4 border shadow-lg rounded font-medium text-center"
                  >
                    View Campground
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <article>
              <p className="text-xl font-bold">There are no campgrounds</p>
            </article>
          )}
        </section>
      </article>
    </>
  );
}

export default Campgrounds;
