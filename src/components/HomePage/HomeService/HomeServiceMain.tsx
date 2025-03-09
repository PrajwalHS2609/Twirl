"use client";
import React from "react";
import "./HomeService.css";
// import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";

const HomeServiceMain = () => {
  const services = [
    {
      id: 1,
      title: "Body",
      link: "/",
      image:
        "https://img.freepik.com/free-photo/young-woman-enjoying-spa-day_155003-29190.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
    },
    {
      id: 2,
      title: "Hair",
      link: "/hair-services",
      image:
        "https://img.freepik.com/free-photo/portrait-beautiful-woman-with-long-brown-hair-posing-photographer-lady-with-modern-hairstyle-posing-studio_549566-538.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
    },
    {
      id: 3,
      title: "Facial",
      link: "/facial-services",
      image:
        "https://img.freepik.com/free-photo/beautician-with-brush-applies-white-moisturizing-mask-face-young-girl-client-spa-beauty-salon_343596-4248.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
    },
    {
      id: 4,
      title: "Nails",
      link: "/nails-services",
      image:
        "https://img.freepik.com/free-photo/woman-showing-her-nail-art-fingernails-against-monster-leaf_23-2149820447.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
    },
    {
      id: 5,
      title: "Makeup",
      link: "/",
      image:
        "https://img.freepik.com/free-photo/female-model-wedding-bridal-makeup_114579-9312.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
    },
  ];
  return (
    <div className="homeServiceMain-container">
      {services.map((service) => (
        <div className="homeServiceMain-content" key={service.id}>
          <img src={service.image} alt="" />
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
  );
};

export default HomeServiceMain;
