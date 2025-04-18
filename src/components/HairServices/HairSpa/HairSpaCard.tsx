import Link from "next/link";
import React from "react";

const HairSpaCard = () => {
  const cardContent = [
    {
      id: 1,
      title: "Spa Essence Anti Hairfall",
      para: "",
      price: "1200 (short)",
      img: "",
    },
    {
      id: 2,
      title: "Spa Essence Anti Dandruff",
      para: "",
      price: "1200 (short)",
      img: "",
    },
    {
      id: 3,
      title: "Shea Butter",
      para: "",
      price: "2000 (short)",
      img: "",
    },
    {
      id: 4,
      title: "Olaplex",
      para: "",
      price: "2000 (short)",
      img: "",
    },
    {
      id: 5,
      title: "Botox",
      para: "",
      price: "2000 (short)",
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
                <Link href="">Book Now</Link>
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

export default HairSpaCard;
