import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const FooterSocial = () => {
  return (
    <div className="footer-social">
      <ul>
        <li>
          <FaInstagram className="footer-socialIco"/>
        </li>
        <li>
          <FaXTwitter className="footer-socialIco"/>
        </li>
        <li>
          <FaFacebookF className="footer-socialIco"/>
        </li>
        <li>
          <FaWhatsapp className="footer-socialIco"/>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocial;
