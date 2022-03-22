import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CampgroundNew from "./components/CampgroundNew";
import Campgrounds from "./components/Campgrounds";
import CampgroundShow from "./components/CampgroundShow";
import CommentNew from "./components/CommentNew";
import Landing from "./components/Landing";
import SignInSignUp from "./components/SignInSignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-up" element={<SignInSignUp />} />
        <Route path="/sign-in" element={<SignInSignUp />} />
        <Route path="/campgrounds" element={<Campgrounds />} />
        <Route path="/campground/new" element={<CampgroundNew />} />
        <Route path="/campground/:id" element={<CampgroundShow />} />
        <Route path="/campground/:id/comment/new" element={<CommentNew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
