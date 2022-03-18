import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamMenu from "../Assets/Hamburger Menu.svg";

function MovileMenu(params) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative inline-block md:hidden text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setShow((prevState) => !prevState)}
        >
          <div>
            <img src={HamMenu} alt="Menu icon" />
          </div>
        </button>
      </div>

      {show && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <ul className="p-4">
              <li>
                <Link to="/sign-in" className="p-2 text-gray-800">
                  Login
                </Link>
              </li>
              <div className="my-2 border border-gray-500" />
              <li>
                <Link to="/sign-up" className="p-2 text-gray-800">
                  Create an account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovileMenu;
