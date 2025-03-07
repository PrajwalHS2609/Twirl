import React from "react";
import "./Footer.css";
import LogoFooter from "./LogoFooter";
import FooterPage from "./FooterPage";
import FooterAddress from "./FooterAddress";
import FooterServices from "./FooterServices";
const TopFooter = () => {
  return (
    <div className="topFooter-container">
      <LogoFooter />
      <FooterPage />
      <FooterServices/>
      <FooterAddress />
    </div>
  );
};

export default TopFooter;
