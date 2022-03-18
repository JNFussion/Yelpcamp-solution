import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function CampgroundNew() {
  return (
    <>
      <Navbar />
      <article className="max-w-lg mx-auto">
        <h2 className="font-bold text-4xl mx-4">Add New Campground</h2>
        <form action="" method="post" className="m-4 grid gap-4">
          <label htmlFor="name">
            <div className="my-4 text-gray-800">Campground Name</div>
            <input
              type="text"
              name="name"
              placeholder="Seven Sisters Waterfall"
              className="w-full px-4 py-2 bg-slate-100 focus:outline-none"
            />
          </label>
          <label htmlFor="price">
            <div className="my-4 text-gray-800">Price</div>
            <input
              type="text"
              name="price"
              placeholder="$149"
              className="w-full px-4 py-2 bg-slate-100 focus:outline-none"
            />
          </label>
          <label htmlFor="image">
            <div className="my-4 text-gray-800">Image</div>
            <input
              type="text"
              name="image"
              placeholder="www.thepinoytraveler.com/2018/01/mt-ulap-dly-dayhike.html"
              className="w-full px-4 py-2 bg-slate-100 focus:outline-none"
            />
          </label>
          <label htmlFor="description">
            <div className="my-4 text-gray-800">Description</div>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="6"
              placeholder="The seven Sisters is the 39th tallest waterfall in Norway. The 410-metre tall waterwall consists of seven separate streams, and the tallest of the seven has a free fall that measures 250 metres. The waterfall is located along the Geirangerfjorden in Stranda Municipality in More og Romsdal county, Norway."
              className="w-full px-4 py-2 resize-none bg-slate-100 focus:outline-none"
            />
          </label>

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
