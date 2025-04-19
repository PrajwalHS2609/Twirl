import React from "react";
import "@/components/Style/style.css";
import olaplex from "@/media/Images/HairTreatment/Olaplex.png";
import perming from "@/media/Images/HairTreatment/Perming.png";
import straightening from "@/media/Images/HairTreatment/Straightening.png";
import botox from "@/media/Images/HairTreatment/Botox.png";
import botoliss from "@/media/Images/HairTreatment/Botoliss.png";
import antiDandruff from "@/media/Images/HairTreatment/Anti Dandruff.png";
import antiHairFall from "@/media/Images/HairTreatment/Anti Hairfall.png";
import Image from "next/image";

const HairTreatmentCard = () => {
  const cardContent = [
    {
      id: 1,
      title: "Olaplex",
      para: "",
      price: "1500 (Short)",
      img: olaplex,
    },
    {
      id: 2,
      title: "Perming",
      para: "",
      price: "6500 (Short)",
      img: perming,
    },
    {
      id: 3,
      title: "Straightening",
      para: "",
      price: "5000 (Short)",
      img: straightening,
    },
    {
      id: 4,
      title: "Botox",
      para: "",
      price: "7000 (Short)",
      img: botox,
    },
    {
      id: 5,
      title: "Botoliss",
      para: "",
      price: "8000 (Short)",
      img: botoliss,
    },
    {
      id: 6,
      title: "Anti Dandruff Treatment",
      para: "",
      price: "2000",
      img: antiDandruff,
    },
    {
      id: 7,
      title: "Anti Hairfall Treatment",
      para: "",
      price: "2000",
      img: antiHairFall,
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore autem.
            </p>
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

export default HairTreatmentCard;
