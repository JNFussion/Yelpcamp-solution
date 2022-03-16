import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import SignInSignUp from "./components/SignInSignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-up" element={<SignInSignUp />} />
        <Route path="/sign-in" element={<SignInSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
