"use client";

import React from "react";
import "./Loader.css";
import logo from "./../../media/Images/logo.jpg"
const Loader = () => {
  return (
    <div className="loader-wrapper">
      <img src={logo.src} alt="clean loader" />
    </div>
  );
};

export default Loader;

