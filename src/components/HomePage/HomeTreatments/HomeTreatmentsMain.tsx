"use client";
import React from "react";
import "./HomeTreatments.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

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
    image:
      "https://img.freepik.com/free-photo/woman-getting-treatment-hairdresser-shop_23-2149229750.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
  },
  {
    id: 2,
    title: "Keratin Smoothing",
    sub: "TREATMENTS",
    link: "/keratin-hair-smoothing-treatment-in-mangalore",
    image:
      "https://img.freepik.com/free-photo/beautiful-keratin-treated-hair_23-2149332491.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
  },
  {
    id: 3,
    title: "Botox Treatment",
    sub: "TREATMENTS",
    link: "/botox-hair-treatment-in-mangalore",
    image:
      "https://img.freepik.com/free-photo/female-client-getting-her-hair-washed-hairdresser_23-2150771291.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
  },
  {
    id: 4,
    title: "Balayage",
    sub: "COLORING",
    link: "/balayage-hair-highlights-in-mangalore",
    image:
      "https://img.freepik.com/free-photo/attractive-young-blond-woman-indoor_624325-4390.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
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
              <img src={treatment.image} alt={treatment.title} />
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
