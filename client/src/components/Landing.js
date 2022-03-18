import React from "react";
import { Link } from "react-router-dom";
import AirbnbLogo from "../Assets/Airbnb.svg";
import BookingLogo from "../Assets/Booking.svg";
import PlumGuideLogo from "../Assets/Plum Guide.svg";
import hero from "../Assets/Hero Image.jpg";
import checkmark from "../Assets/Checkmark.svg";
import logo from "../Assets/Logo.svg";

function Landing() {
  return (
    <article className="text-gray-800">
      <div className="flex flex-col gap-4 xl:gap-0 xl:flex-row">
        <div className="h-screen flex-1">
          <div className="max-w-3xl mx-auto">
            <div className="xl:py-10 p-4">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="xl:py-20 py-10 px-4">
              <header>
                <h1 className="text-black font-bold text-3xl xl:text-7xl">
                  Explore the best camps on Earth.
                </h1>
                <p className="my-4 text-lg">
                  YelpCamp is a curate list of the best camping spots on Earth.
                  Unfiltered and unbiased reviews.
                </p>
                <ul className="grid gap-4">
                  <li className="flex items-center gap-2">
                    <span>
                      <img src={checkmark} alt="checkmark" />
                    </span>
                    <span>Add your own camp suggestions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>
                      <img src={checkmark} alt="checkmark" />
                    </span>
                    <span>Leave reviews and experiences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>
                      <img src={checkmark} alt="checkmark" />
                    </span>
                    <span>See locations for all camps</span>
                  </li>
                </ul>
              </header>
              <div className="py-10">
                <Link
                  to="/campgrounds"
                  className="p-4 text-white font-bold bg-black rounded"
                >
                  View Campgrounds
                </Link>
              </div>
              <section>
                <h2 className="text-lg">Partnered with:</h2>
                <ul className="flex justify-between">
                  <li>
                    <img src={AirbnbLogo} alt="Airbnb's logo" />
                  </li>
                  <li>
                    <img src={BookingLogo} alt="Booking's logo" />
                  </li>
                  <li>
                    <img src={PlumGuideLogo} alt="Plum Guide's logo" />
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
        <div
          id="hero-container"
          className="relative h-[448px] overflow-hidden xl:overflow-auto xl:h-auto"
        >
          <img
            src={hero}
            alt=""
            className="absolute xl:relative xl:block xl:h-full left-0 right-0 mx-auto"
          />
        </div>
      </div>
    </article>
  );
}

export default Landing;
