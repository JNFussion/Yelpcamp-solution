import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.svg";

function Navbar(params) {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem("token"));

  return (
    <nav className="max-w-7xl mx-auto my-10 flex justify-between">
      <div className="flex gap-4">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <Link to="/" className="text-gray-800 font-medium">
            Home
          </Link>
        </div>
      </div>

      {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
          <button type="button">Logout</button>
        </div>
      ) : (
        <div className="flex gap-4 items-center">
          <Link to="/sign-in" className="text-gray-800">
            Login
          </Link>
          <Link
            to="/sign-up"
            className="py-2 px-4 rounded font-bold text-white bg-black"
          >
            Create an account
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
