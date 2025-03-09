import React from "react";
import Image from "next/image";
import "./ServiceCard.css";
import spaServiceImg from "@/media/Images/HomeServices/spaServiceImg.png";
import facialServiceImg from "@/media/Images/HomeServices/facialServiceImg.png";
import hairServiceImg from "@/media/Images/HomeServices/hairServiceImg.png";
import nailServiceImg from "@/media/Images/HomeServices/nailsServiceImg.jpg";
import beautyServiceImg from "@/media/Images/HomeServices/beautyEssentialsImg.png";
import lashesServiceImg from "@/media/Images/HomeServices/lashesServiceImg.jpg";
import makeupServiceImg from "@/media/Images/HomeServices/makeupServiceImg.jpg";
import microBladingServiceImg from "@/media/Images/HomeServices/microbladingServiceImg.jpg";

const ServiceCard = () => {
  const services = [
    {
      id: 1,
      title: "Hair",
      link: "/hair-services",
      image: hairServiceImg,
    },
    {
      id: 2,
      title: "Nails",
      link: "/nails-services",
      image: nailServiceImg,
    },

    {
      id: 3,
      title: "Facial",
      link: "/facial-services",
      image: facialServiceImg,
    },
    {
      id: 4,
      title: "Spa",
      link: "/spa-services",
      image: spaServiceImg,
    },

    {
      id: 5,
      title: "Beauty Essentials",
      link: "/beauty-essentials-services",
      image: beautyServiceImg,
    },
    {
      id: 6,
      title: "Makeup",
      link: "/",
      image: makeupServiceImg,
    },
    {
      id: 7,
      title: "Lashes",
      link: "/",
      image: lashesServiceImg,
    },
    {
      id: 8,
      title: "MicroBlading",
      link: "/",
      image: microBladingServiceImg,
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
              <button>VIEW DETAILS</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
