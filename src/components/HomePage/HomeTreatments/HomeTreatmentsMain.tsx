"use client";
import React from "react";
import "./HomeTreatments.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import Balayage from "@/media/Images/HairTreatment/Balayage.jpg";
import Olaplex from "@/media/Images/HairTreatment/OlaplexTreatment.jpg";
import Keratin from "@/media/Images/HairTreatment/KeratinSmoothing.jpg";
import Botox from "@/media/Images/HairTreatment/BotoxTreatment.jpg";
import Image from "next/image";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const treatments = [
  {
    id: 1,
    title: "Olaplex Treatments",
    sub: "TREATMENTS",
    link: "/olaplex-hair-treatments-in-mangalore",
    image: Olaplex,
  },
  {
    id: 2,
    title: "Keratin Smoothing",
    sub: "TREATMENTS",
    link: "/keratin-hair-smoothing-treatment-in-mangalore",
    image: Keratin,
  },
  {
    id: 3,
    title: "Botox Treatment",
    sub: "TREATMENTS",
    link: "/botox-hair-treatment-in-mangalore",
    image: Botox,
  },
  {
    id: 4,
    title: "Balayage",
    sub: "COLORING",
    link: "/balayage-hair-highlights-in-mangalore",
    image: Balayage,
  },
];

const HomeTreatmentsMain = () => {
  return (
    <div className="homeTreatmentMain-container">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5s ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {treatments.map((treatment) => (
          <div className="homeTreatmentMain-wrapper" key={treatment.id}>
            <div className="homeTreatmentMain-content">
              <Image src={treatment.image} alt={treatment.title} />
              <div className="homeTreatmentMain-item">
                <div className="homeTreatmentMain-textContainer">
                  <h3>
                    <a href={treatment.link}>{treatment.title}</a>
                  </h3>
                  <h6>{treatment.sub}</h6>
                </div>
                <button>
                  <Link href={treatment.link}>VIEW DETAILS</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeTreatmentsMain;
