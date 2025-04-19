import React from "react";
import "@/components/Style/style.css";
import global from "@/media/Images/HairHighlight/Global.png";
import highlights from "@/media/Images/HairHighlight/highlights.png";
import rootTouch from "@/media/Images/HairHighlight/Root touch up.png";
import rootTouchNh3Free from "@/media/Images/HairHighlight/Root touch up nh3 free.png";
import Image from "next/image";

const HighlightsCard = () => {
  const cardContent = [
    {
      id: 1,
      title: " Global",
      para: "Achieve a multi-dimensional, vibrant look with global hair color. This technique involves coloring your hair from root to tip with a single shade, offering a rich and uniform color transformation that enhances your natural beauty.",
      price: "3500 (short)",
      img: global,
    },
    {
      id: 2,
      title: "Highlights",
      para: "Highlights add brightness and depth to your hair, creating a radiant, sun-kissed effect. Whether subtle or bold, they enhance your natural color and give your hair a vibrant, multi-dimensional look.",
      price: "6000 (short)",
      img: highlights,
    },
    {
      id: 3,
      title: "Root touch up ",
      para: "Root touch-up is a quick and effective solution to cover up regrowth, restoring your hair color to perfection. It blends seamlessly with the rest of your hair, ensuring a fresh, uniform look between salon visits.",
      price: "1200",
      img: rootTouch,
    },
    {
      id: 4,
      title: " Root touch up nh3 free ",
      para: "Root touch-up NH3-free covers regrowth with a gentle, ammonia-free formula, offering a smooth, natural finish for sensitive scalps.",
      price: "1500",
      img: rootTouchNh3Free,
    },
  ];
  return (
    <div className="subServiceCard-container">
      {cardContent.map((x) => (
        <div className="subServiceCard-content" key={x.id}>
          <div className="subServiceCard-item">
            <Image src={x.img} alt={x.title} />
            <div className="custom-shape-divider-bottom-1744910806">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>
          </div>
          <div className="subServiceCard-item">
            <h3>{x.title}</h3>
            <p>{x.para}</p>
            <div className="subServiceCard-itemWrapper">
              <span>
                <a href="https://wa.me/919972272700" target="_blank">
                  Book Now
                </a>{" "}
              </span>
              <div className="line"></div>
              <span>Price : ₹{x.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HighlightsCard;
