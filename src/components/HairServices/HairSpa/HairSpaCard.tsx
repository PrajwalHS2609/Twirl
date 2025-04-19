import "@/components/Style/style.css";
import React from "react";
import spaAntiHairFall from "@/media/Images/HairSpa/Spa Essence Anti Hairfall.png";
import spaAntiDandruff from "@/media/Images/HairSpa/Spa Essence Anti Dandruff.png";
import sheaButter from "@/media/Images/HairSpa/Shea Butter.png";
import olaplex from "@/media/Images/HairSpa/Olaplex.png";
import botox from "@/media/Images/HairSpa/Botox.png";
import Image from "next/image";

const HairSpaCard = () => {
  const cardContent = [
    {
      id: 1,
      title: "Spa Essence Anti Hairfall",
      para: "This treatment strengthens hair, reduces breakage, and prevents hair fall. Rich in natural ingredients, it promotes growth and improves scalp health for thicker,fuller hair.",
      price: "1200 (short)",
      img: spaAntiHairFall,
    },
    {
      id: 2,
      title: "Spa Essence Anti Dandruff",
      para: "This treatment fights dandruff and flakiness, soothes irritation, and restores scalp balance for healthier, shinier hair.",
      price: "1200 (short)",
      img: spaAntiDandruff,
    },
    {
      id: 3,
      title: "Shea Butter",
      para: "Shea Butter deeply moisturizes and soothes dry skin, boosting elasticity and promoting a smooth, radiant look. It also helps heal and protect against environmental stress.",
      price: "2000 (short)",
      img: sheaButter,
    },
    {
      id: 4,
      title: "Olaplex",
      para: "Olaplex repairs damaged hair by rebuilding broken bonds, leaving it healthier, smoother, and stronger—even after chemical or heat styling.",
      price: "2000 (short)",
      img: olaplex,
    },
    {
      id: 5,
      title: "Botox",
      para: "Hair Botox deeply conditions and repairs, restoring shine, smoothness, and strength while reducing frizz—all without harsh chemicals.",
      price: "2000 (short)",
      img: botox,
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

export default HairSpaCard;
