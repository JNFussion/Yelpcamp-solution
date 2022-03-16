import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import UserTestimonial from "../Assets/User Testimonial.svg";

function SignInSignUp() {
  const { pathname } = useLocation();

  return (
    <article className=" text-gray-800">
      <div className="flex flex-col gap-4 xl:gap-0 xl:flex-row">
        <div className="h-screen flex-1">
          <div className="max-w-3xl mx-auto">
            <div className="xl:py-10 p-4 flex justify-between">
              <div>
                <Link to="/">
                  <img src={Logo} alt="" />
                </Link>
              </div>
              <div>
                <Link to="/campgrounds" className="text-gray-800">
                  ← Back to campground
                </Link>
              </div>
            </div>
            <div className="xl:py-20 py-10 px-4">
              <h2 className="font-bold xl:text-5xl md:text-4xl text-3xl">
                Start exploring camps from all around the world.
              </h2>
              <form action="" method="POST" className="grid gap-5 my-5">
                <div>
                  <label htmlFor="username">
                    <div className="py-4 text-gray-800">Username</div>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="jonhndoe_91"
                      className="w-full p-4 bg-slate-100"
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="password">
                    <div className="py-4 text-gray-800">Password</div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Choose password"
                      className="w-full p-4 bg-slate-100"
                    />
                  </label>
                </div>
                <input
                  type="submit"
                  className="p-4 rounded font-bold text-white bg-black "
                  value={
                    pathname === "/sign-up" ? "Create an account" : "Login"
                  }
                />
              </form>
              {pathname === "/sign-up" ? (
                <p className="text-gray-800">
                  Already a user?{" "}
                  <Link
                    to="/sign-in"
                    className="font-bold text-teal-500 underline"
                  >
                    Sign in
                  </Link>
                </p>
              ) : (
                <p>
                  Not a user yet?{" "}
                  <Link
                    to="/sign-up"
                    className="font-bold text-teal-500 underline"
                  >
                    Create an account
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="xl:w-2/5 grid place-content-center px-4 py-10 bg-rose-50">
          <figure className="max-w-xs">
            <blockquote>
              <p className=" font-bold xl:text-xl text-[1.1rem]">
                &quot; YelpCamp has honestly saved me hours of research time,
                and the camps on here are definitely well picked and
                added.&quot;
              </p>
            </blockquote>
            <figcaption>
              <div className="flex items-center gap-4">
                <div>
                  <img src={UserTestimonial} alt="User's avatar" />
                </div>
                <div>
                  <p className="font-bold">May Andrews</p>
                  <p className="text-gray-800">Professional Hiker</p>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </article>
  );
}

export default SignInSignUp;
