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
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
        <li>
          <Link href="/salon-membership-in-mangalore">Salon Membership</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterPage;
