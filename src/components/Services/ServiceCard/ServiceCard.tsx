import React from "react";
import Image from "next/image";
import "./ServiceCard.css";
import facialServiceImg from "@/media/Images/HomeServices/facialServiceImg.png";
import hairServiceImg from "@/media/Images/HomeServices/hairServiceImg.png";
import nailServiceImg from "@/media/Images/HomeServices/nailsServiceImg.jpg";
import beautyServiceImg from "@/media/Images/HomeServices/beautyEssentialsImg.png";
import makeupServiceImg from "@/media/Images/HomeServices/makeupServiceImg.jpg";
import Link from "next/link";

const ServiceCard = () => {
  const services = [
    {
      id: 1,
      title: "Hair",
      link: "/hair-salon-in-mangalore",
      image: hairServiceImg,
    },
    {
      id: 2,
      title: "Nails",
      link: "/nail-salon-in-mangalore",
      image: nailServiceImg,
    },

    {
      id: 3,
      title: "Facial",
      link: "/facials-in-mangalore",
      image: facialServiceImg,
    },
    {
      id: 4,
      title: "Waxing",
      link: "/waxing-in-mangalore",
      image: beautyServiceImg,
    },
    {
      id: 5,
      title: "Makeup",
      link: "/makeup-in-mangalore",
      image: makeupServiceImg,
    },
  ];
  return (
    <div className="serviceCard-container">
      {services.map((services) => (
        <div className="homeServiceCard-wrapper" key={services.id}>
          <div className="homeServiceCard-content">
            <Image src={services.image} alt={services.title} />
            <div className="homeServiceCard-item">
              <div className="homeServiceCard-textContainer">
                <h3>
                  <a href={services.link}>{services.title}</a>
                </h3>
              </div>
              <Link href={services.link}>
                {" "}
                <button>VIEW DETAILS</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
