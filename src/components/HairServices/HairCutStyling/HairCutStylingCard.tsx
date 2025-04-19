import React from "react";
import "@/components/Style/style.css";
const HairCutStylingCard = () => {
  const cardContent = [
    {
      id: 1,
      title: "Men's HairCut",
      para: "",
      price: "300",
      img: "",
    },
    {
      id: 2,
      title: "Women's HairCut",
      para: "",
      price: "1000",
      img: "",
    },
    {
      id: 3,
      title: "Boy's HairCut",
      para: "",
      price: "300",
      img: "",
    },
    {
      id: 4,
      title: "Girls's HairCut",
      para: "",
      price: "500",
      img: "",
    },
    {
      id: 5,
      title: "Kid's HairCut",
      para: "",
      price: "150",
      img: "",
    },
    {
      id: 6,
      title: "Head Shave",
      para: "",
      price: "500",
      img: "",
    },
    {
      id: 7,
      title: "Blow Dry",
      para: "",
      price: "800",
      img: "",
    },
    {
      id: 8,
      title: "Iron/Curl",
      para: "",
      price: "1000",
      img: "",
    },
    {
      id: 9,
      title: "UPDO (No Wash)",
      para: "",
      price: "1200",
      img: "",
    },
  ];
  return (
    <div className="subServiceCard-container">
      {cardContent.map((x) => (
        <div className="subServiceCard-content" key={x.id}>
          <div className="subServiceCard-item">
            <img
              src="https://img.freepik.com/free-photo/hair-stylist-drying-his-client-s-hair_23-2148242788.jpg?t=st=1744910722~exp=1744914322~hmac=1f299e061f4c79530e03f01779d7f95c0ba8b65c28bd5512d7c383bb9a546615&w=740"
              alt={x.title}
            />
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore autem.
            </p>
            <div className="subServiceCard-itemWrapper">
              <span>
                <a href="https://wa.me/919972272700" target="_blank">
                  Book Now
                </a>
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

export default HairCutStylingCard;
