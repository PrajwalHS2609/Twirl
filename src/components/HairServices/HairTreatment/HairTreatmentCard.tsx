import React from "react";
import "@/components/Style/style.css";
import olaplex from "@/media/Images/HairTreatmentServices/Olaplex.png";
import perming from "@/media/Images/HairTreatmentServices/Perming.png";
import straightening from "@/media/Images/HairTreatmentServices/Straightening.png";
import botox from "@/media/Images/HairTreatmentServices/Botox.png";
import botoliss from "@/media/Images/HairTreatmentServices/Botoliss.png";
import antiDandruff from "@/media/Images/HairTreatmentServices/Anti Dandruff.png";
import antiHairFall from "@/media/Images/HairTreatmentServices/Anti Hairfall.png";
import Image from "next/image";

const HairTreatmentCard = () => {
  const cardContent = [
    {
      id: 1,
      title: "Olaplex",
      para: "Olaplex repairs damaged hair by rebuilding broken bonds, leaving it healthier, smoother, and stronger—even after chemical or heat styling.",
      price: "1500 (Short)",
      img: olaplex,
    },
    {
      id: 2,
      title: "Perming",
      para: "Perming is a hair treatment that creates long-lasting curls or waves. By altering the hair’s structure, it adds volume, texture, and bounce, providing a beautiful, frizz-free style that lasts for weeks.",
      price: "6500 (Short)",
      img: perming,
    },
    {
      id: 3,
      title: "Straightening",
      para: "Straightening is a hair treatment that smooths and straightens curly or wavy hair, giving it a sleek, polished look. It tames frizz, adds shine, and leaves your hair looking effortlessly smooth and straight for an extended period.",
      price: "5000 (Short)",
      img: straightening,
    },
    {
      id: 4,
      title: "Botox",
      para: "Hair Botox deeply conditions and repairs, restoring shine, smoothness, and strength while reducing frizz—all without harsh chemicals.",
      price: "7000 (Short)",
      img: botox,
    },
    {
      id: 5,
      title: "Botoliss",
      para: "Hair Botoliss is a nourishing hair treatment that restores strength, smoothness, and shine. It works by deep conditioning and repairing damaged hair, leaving it frizz-free, hydrated, and more manageable with a silky finish.",
      price: "8000 (Short)",
      img: botoliss,
    },
    {
      id: 6,
      title: "Anti Dandruff Treatment",
      para: "This treatment fights dandruff and flakiness, soothes irritation, and restores scalp balance for healthier, shinier hair.",
      price: "2000",
      img: antiDandruff,
    },
    {
      id: 7,
      title: "Anti Hairfall Treatment",
      para: "This treatment strengthens hair, reduces breakage, and prevents hair fall. Rich in natural ingredients, it promotes growth and improves scalp health for thicker,fuller hair.",
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

export default HairTreatmentCard;
