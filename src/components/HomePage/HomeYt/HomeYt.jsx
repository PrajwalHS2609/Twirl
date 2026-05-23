"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HomeYt.css";
const HomeYt = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const ytVideos = [
    {
      id: 1,
      video: "https://www.youtube.com/embed/vQVo3qIZo2E",
    },
    {
      id: 2,
      video: "https://www.youtube.com/embed/bFwR1Ac8HgA",
    },
    {
      id: 3,
      video: "https://www.youtube.com/embed/6xYqal4kq7E",
    },
    {
      id: 4,
      video: "https://www.youtube.com/embed/v4HKX5PrFGY",
    },
    {
      id: 5,
      video: "https://www.youtube.com/embed/qC-FQ9JbN_Y",
    },
    {
      id: 6,
      video: "https://www.youtube.com/embed/oQlVsFCM7ls",
    },
    {
      id: 7,
      video: "https://www.youtube.com/embed/ikbr_k1yeok",
    },
    {
      id: 8,
      video: "https://www.youtube.com/embed/CDE57VybwyQ",
    },
    {
      id: 9,
      video: "https://www.youtube.com/embed/qYbHcmkYCoE",
    },
    {
      id: 10,
      video: "https://www.youtube.com/embed/wCLXvW_A1hE",
    },
    {
      id: 11,
      video: "https://www.youtube.com/embed/GeVHrWfpuT4",
    },
    {
      id: 12,
      video: "https://www.youtube.com/embed/UNqNJFiOV-o",
    },
    {
      id: 13,
      video: "https://www.youtube.com/embed/RrcyLA9zQak",
    },
    {
      id: 14,
      video: "https://www.youtube.com/embed/FyhrS2EBtDc",
    },
    {
      id: 15,
      video: "https://www.youtube.com/embed/wuYTSXky6Q4",
    },
    {
      id: 16,
      video: "https://www.youtube.com/embed/YrDwDpWd59M",
    },
    {
      id: 17,
      video: "https://www.youtube.com/embed/CmWVPFxxIU8",
    },
    {
      id: 18,
      video: "https://www.youtube.com/embed/b-eIJNe6AQg",
    },
    {
      id: 19,
      video: "https://www.youtube.com/embed/QDtBfeCyqks",
    },
  ];

  return (
    <div className="homeYt-container">
      <h2>Transformations You’ll Love</h2>

      {/* <p>
        Experience stunning makeovers that refresh your space and
        elevate your lifestyle.
      </p> */}
      <div className="homeYt-wrapper">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
        //   removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {ytVideos.map((item) => (
  <div className="homeYt-content" key={item.id}>
    <div className="homeYt1-content">
      <div className="homeYt1-item">
        <iframe
          width="100%"
          height="500"
          src={item.video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeYt;
