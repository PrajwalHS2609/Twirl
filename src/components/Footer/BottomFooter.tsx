import React from "react";
import FooterSocial from "./FooterSocial";
import Image from "next/image";
import tss from "@/media/Images/TSS.png"
const BottomFooter = () => {
  return (
    <div className="bottomFooter-container">
      <div className="bottomFooter-content">
        <b>Twirl © Copyright 2025</b>
      </div>
      <div className="bottomFooter-tss"><a href="https://tryseoservices.com/"><Image src={tss} alt="tss" /></a></div>
      <div className="bottomFooter-content">
        <FooterSocial />
      </div>
    </div>
  );
};

export default BottomFooter;
