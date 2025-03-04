import React from "react";
import "./Footer.css";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContent1">
        <div className="footerItem1" id="footerItem1">
          <div className="footerTxt1">
            <h3>
              <Link href="/service">Services</Link>
            </h3>
          </div>
          <div className="footerTxt2">
            <div className="footerTxt">
              <Link href="/hair-salon">Hair</Link>
            </div>
            <div className="footerTxt">
              <Link href="/nails-salon">Nails</Link>
            </div>
            <div className="footerTxt">
              <Link href="/facial">Facial</Link>
            </div>
            <div className="footerTxt">
              <Link href="/beauty-essentials">Beauty Essentials</Link>
            </div>
            <div className="footerTxt">
              <Link href="/spa">Spa</Link>
            </div>
            <div className="footerTxt">
              <Link href="/eye-lashes">Lashes</Link>
            </div>
          </div>
        </div>
        <div className="footerItem1" id="footerItem2">
          <div className="footerTxt1">
            <h3>
              <Link href="/about">About us</Link>
            </h3>
          </div>
          <div className="footerTxt2">
            <div className="footerTxt">
              <Link href="/philosophy">Philosophy</Link>
            </div>
            <div className="footerTxt">
              <Link href="/crew">Style Crew</Link>
            </div>
            <div className="footerTxt">
              <Link href="/myself">All About Myself</Link>
            </div>
          </div>
        </div>
        <div className="footerItem1" id="footerItem4">
          <div className="footerTxt1">
            <h3>Work</h3>
          </div>
          <div className="footerTxt2">
            <div className="footerTxt">
              <Link href="/salon-membership">Membership</Link>
            </div>
            <div className="footerTxt">
              <Link href="/shop">Shops</Link>
            </div>
            <div className="footerTxt">
              <Link href="/franchise">Franchise</Link>
            </div>
          </div>
        </div>
        <div className="footerItem1" id="footerItem5">
          <div className="footerTxt1" id="footerTxtTerms">
            <h3>
              <Link href="/terms">Terms</Link>{" "}
            </h3>
          </div>
          <div className="footerTxt2">
            <div className="footerTxt">
              <Link href="/terms">Returns & Refund Policy</Link>
            </div>
            <div className="footerTxt">
              <Link href="/terms">Cancellation Policy</Link>
            </div>
            <div className="footerTxt">
              <Link href="/terms">Payment Mode</Link>
            </div>
            <div className="footerTxt">
              <Link href="/terms">Pricing Policy</Link>
            </div>
            <div className="footerTxt">
              <Link href="/terms">Shipping</Link>
            </div>
          </div>
        </div>
        {/* <div className="footerItem1" id="footerItem3">
          <div className="footerTxt1" id="socialTxt">
            <h3>Social Media</h3>
          </div> */}
          {/* <div className="socialBlocks">
            <div className="innerSocialBlocks">
              <div className="block">
                <a href="https://www.instagram.com/scentlifestyle/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="footerIcon"
                  ></FontAwesomeIcon>
                </a>
              </div>
              <div className="block">
                <a href="https://www.facebook.com/ScentSalonSpas/">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="footerIcon"
                  ></FontAwesomeIcon>
                </a>
              </div>
              <div className="block">
                <a href="https://in.pinterest.com/scentlifestyle/">
                  <FontAwesomeIcon
                    icon={faPinterest}
                    className="footerIcon"
                  ></FontAwesomeIcon>
                </a>
              </div>
            </div>
            <div className="innerSocialBlocks">
              <div className="block">
                <a href="https://twitter.com/scentlifestyle">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="footerIcon"
                  ></FontAwesomeIcon>
                </a>
              </div>
              <div className="block">
                <a href="https://www.youtube.com/@scentlifestyle">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="footerIcon"
                  ></FontAwesomeIcon>
                </a>
              </div>
              <div className="block">
                <a href="https://scent.zenoti.com/webstoreNew/services">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="footerIcon"
                  ></FontAwesomeIcon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="footerContent2">
        <div className="footerCopy">
          <div className="footerCopy1">
            <p>SCENT © Copyright 2023</p>
          </div>
          <div className="footerCopy1">
            <a href="https://tryseoservices.com/">
              <img src={TSS} alt="" />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
