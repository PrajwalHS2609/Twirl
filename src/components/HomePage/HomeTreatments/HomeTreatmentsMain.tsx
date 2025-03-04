"use client";
import React, { useState } from "react";
import "./HomeTreatments.css";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";

const HomeTreatmentsMain = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  const treatments = [
    {
      id: 1,
      title: "Olaplex Treatments",
      sub: "TREATMENTS",
      link: "/",
      image:
        "https://img.freepik.com/free-photo/woman-getting-treatment-hairdresser-shop_23-2149229750.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
    },
    {
      id: 2,
      title: "Keratin Smoothing",
      sub: "TREATMENTS",
      link: "/",
      image:
        "https://img.freepik.com/free-photo/beautiful-keratin-treated-hair_23-2149332491.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
    },
    {
      id: 3,
      title: "Botox Treatment",
      sub: "TREATMENTS",
      link: "/",
      image:
        "https://img.freepik.com/free-photo/female-client-getting-her-hair-washed-hairdresser_23-2150771291.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
    },
    {
      id: 4,
      title: "Balayage",
      sub: "COLORING",
      link: "/",
      image:
        "https://img.freepik.com/free-photo/attractive-young-blond-woman-indoor_624325-4390.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
    },
    // {
    //   id: 5,
    //   title: "Makeup",
    //   link: "/",
    //   image:
    //     "https://img.freepik.com/free-photo/female-model-wedding-bridal-makeup_114579-9312.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
    // },
  ];
  return (
    <div className="homeTreatmentMain-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="carouselItem">
          {treatments.map((treatment) => (
            <div className="homeTreatmentMain-content" key={treatment.id}>
              <img src={treatment.image} alt="" />
              <div className="homeTreatmentMain-item">
                <div className="homeTreatmentMain-textContainer">
                  {" "}
                  <h3>
                    <Link href="/">{treatment.title}</Link>
                  </h3>
                  <h6>{treatment.sub}</h6>
                </div>
                <button>VIEW DETAILS</button>
              </div>
            </div>
          ))}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeTreatmentsMain;
