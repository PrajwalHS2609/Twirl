"use client";
import React from "react";
import "./HomeService.css";
// import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";
import spaServiceImg from "@/media/Images/HomeServices/spaServiceImg.png";
import facialServiceImg from "@/media/Images/HomeServices/facialServiceImg.png";
import hairServiceImg from "@/media/Images/HomeServices/hairServiceImg.png";
import nailServiceImg from "@/media/Images/HomeServices/nailsServiceImg.jpg";
import beautyServiceImg from "@/media/Images/HomeServices/beautyEssentialsImg.png";
import Image from "next/image";

const HomeServiceMain = () => {
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

  ];
  console.log(hairServiceImg, nailServiceImg, facialServiceImg);

  return (
    <>
      <div className="homeServiceMain-container">
        {services.map((service) => (
          <div className="homeServiceMain-content" key={service.id}>
            <Image src={service.image} alt={service.title} loading="lazy" />
            <div className="homeServiceMain-item">
              <div className="homeServiceMain-textContainer">
                {" "}
                <h3>
                  <Link href={service.link}>{service.title}</Link>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="homeServiceMain-view">
        <Link href="/services">View More</Link>
      </div>
    </>
  );
};

export default HomeServiceMain;
