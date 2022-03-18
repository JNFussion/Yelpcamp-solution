import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import searchIcon from "../Assets/Search Icon.svg";

function Campgrounds() {
  return (
    <>
      <Navbar />
      <article className="max-w-[1440px] mx-auto">
        <section className="max-w-7xl mx-auto px-10 py-14 bg-orange-50">
          <header className="py-4">
            <h2 className="text-3xl font-bold">Welcome to YelpCamp!</h2>
            <p className="max-w-sm text-gray-800">
              View our hand-picked campgrounds from all over the world, or add
              your own
            </p>
          </header>
          <form action="" className="max-w-sm flex gap-4 my-4">
            <div className="flex-1 flex gap-4 items-center px-4 rounded shadow-md bg-white">
              <span className="w-8">
                <img src={searchIcon} alt="search icon" />
              </span>
              <span>
                <input
                  type="search"
                  name="term"
                  id="term"
                  placeholder="Search for camps"
                  className="py-4 focus:outline-none"
                />
              </span>
            </div>
            <input
              type="submit"
              value="Search"
              className="p-4 rounded font-bold text-white bg-black"
            />
          </form>
          <div>
            <Link to="/campground/new" className="undeline text-gray-800">
              Or add your own campground
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}

export default Campgrounds;
