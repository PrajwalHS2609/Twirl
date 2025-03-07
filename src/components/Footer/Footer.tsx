import React from "react";
import "./Footer.css";
import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";
const Footer = () => {
  return (
    <div className="footer-container">
      <TopFooter />
      <div className="footerLine"></div>
      <BottomFooter />
    </div>
  );
};

export default Footer;
