import React from "react";
import "@/components/Style/style.css";
import beadMoustache from "@/media/Images/Beard/Beard + Moustache Coloring.png";
import Image from "next/image";

const MustacheCard = () => {
  const cardContent = [
    {
      id: 1,
      title: " Beard + Moustache Coloring",
      para: "Beard and moustache coloring adds color for a fuller, defined look, covering gray hairs for a natural, youthful appearance.",
      price: "500",
      img: beadMoustache,
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
            <p>
              {x.para}
            </p>
            <div className="subServiceCard-itemWrapper">
              <span>
                <a href="https://wa.me/919972272700" target="_blank">
                  Book Now
                </a>{" "}
              </span>
              {/* <div className="line"></div>
              <span>Price : ₹{x.price}</span> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MustacheCard;
