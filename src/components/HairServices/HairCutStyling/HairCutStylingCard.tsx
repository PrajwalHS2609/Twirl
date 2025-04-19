import React from "react";
import "@/components/Style/style.css";
import menHaircut from "@/media/Images/HairStyling/Mens Hair Cut.png";
import womenHaircut from "@/media/Images/HairStyling/Women's HairCut.png";
import boyHaircut from "@/media/Images/HairStyling/Boy's HairCut.png";
import girlHaircut from "@/media/Images/HairStyling/Girls's HairCut.png";
import kidHaircut from "@/media/Images/HairStyling/Kid's HairCut.png";
import headShave from "@/media/Images/HairStyling/Head Shave.png";
import blowDry from "@/media/Images/HairStyling/Blow Dry.png";
import iron from "@/media/Images/HairStyling/Iron_Curl.png";
import updo from "@/media/Images/HairStyling/UPDO.png";
import Image from "next/image";

const HairCutStylingCard = () => {
  const cardContent = [
    {
      id: 1,
      title: "Men's HairCut",
      para: "Men's Haircut delivers a sharp, clean, and stylish look tailored to your personality and preferences. Precision cuts and expert grooming for the modern man.",
      price: "300",
      img: menHaircut,
    },
    {
      id: 2,
      title: "Women's HairCut",
      para: "Women's Haircut offers a stylish transformation tailored to your features and personal flair. From chic trims to bold new looks, enjoy expert cuts that enhance your beauty and confidence.",
      price: "1000",
      img: womenHaircut,
    },
    {
      id: 3,
      title: "Boy's HairCut",
      para: "Boy's Haircut provides a neat, trendy, and comfortable style tailored for young boys. Quick, friendly, and fun grooming to keep your little one looking sharp and confident!",
      price: "300",
      img: boyHaircut,
    },
    {
      id: 4,
      title: "Girls's HairCut",
      para: "Girls' Haircut offers fun, stylish, and age-appropriate cuts that keep your little one looking adorable and feeling confident. Gentle care and trendy styles for every young fashionista!",
      price: "500",
      img: girlHaircut,
    },
    {
      id: 5,
      title: "Kid's HairCut",
      para: "Kid's Haircut delivers a fun, comfortable, and stylish grooming experience for children of all ages. With gentle care and playful vibes, we make haircuts easy and enjoyable for every little one!",
      price: "150",
      img: kidHaircut,
    },
    {
      id: 6,
      title: "Head Shave",
      para: "Head Shave offers a clean, smooth, and refreshing look with precision and care. Perfect for a bold style or fresh start, done with expert technique for total comfort.",
      price: "500",
      img: headShave,
    },
    {
      id: 7,
      title: "Blow Dry",
      para: "Blow Dry gives your hair a smooth, voluminous, and polished finish using professional styling techniques. Perfect for any occasion, it leaves you looking effortlessly chic and salon-fresh.",
      price: "800",
      img: blowDry,
    },
    {
      id: 8,
      title: "Iron/Curl",
      para: "Iron/Curl styling transforms your hair with sleek straightness or beautiful, bouncy curls. Whether you're going for a smooth finish or glamorous waves, enjoy a flawless look that lasts.",
      price: "1000",
      img: iron,
    },
    {
      id: 9,
      title: "UPDO (No Wash)",
      para: "UPDO (No Wash) offers an elegant and stylish hair arrangement without a wash, perfect for special occasions or quick glam-ups. Get a polished look with expert styling in no time!",
      price: "1200",
      img: updo,
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
