import React from "react";
import "./Footer.css";
import Link from "next/link";
const FooterPage = () => {
  return (
    <div className="footerList-container">
      <ul>
        <h4>Pages</h4>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Services</Link>
        </li>
        <li>
          <Link href="/">About Us</Link>
        </li>
        <li>
          <Link href="/">Salon Membership</Link>
        </li>
        <li>
          <Link href="/">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterPage;
