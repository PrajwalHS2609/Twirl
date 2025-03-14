import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const FooterSocial = () => {
  return (
    <div className="footer-social">
      <ul>
        <li>
          <a href="https://www.instagram.com/twirllifestyle/">
            {" "}
            <FaInstagram className="footer-socialIco" />
          </a>{" "}
        </li>
        <li>
          <a href="">
            {" "}
            <FaXTwitter className="footer-socialIco" />
          </a>{" "}
        </li>
        <li>
          <a href="https://www.facebook.com/share/15xNyAGn54/">
            <FaFacebookF className="footer-socialIco" />
          </a>
        </li>
        <li>
          <a href="">
            <FaYoutube className="footer-socialIco" />
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default FooterSocial;
