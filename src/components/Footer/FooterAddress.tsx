import React from "react";
import "./Footer.css";
import Link from "next/link";
const FooterAddress = () => {
  return (
    <div className="footerList-container">
      <ul>
        <h4>Address</h4>
        <li>
          <Link href="/">
            123, 4th Cross, MG Road, Bangalore, Karnataka - 560001
          </Link>
        </li>
        <li>
          <a href="tel:9876543210">+91 9876543210</a>
        </li>
        <li>
          <a href="mailto:info@xyz.com">info@xyz.com</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterAddress;
