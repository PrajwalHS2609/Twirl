import React from "react";
import "@/components/Style/style.css";
import haircutStyling from "@/media/Images/HairService/Haircut & Styling.png";
import hairHighlights from "@/media/Images/HairService/Highlights & Streaks.png";
import hairSpa from "@/media/Images/HairService/Hair Spa.png";
import hairTreatment from "@/media/Images/HairService/Hair Treatment.png";
import beardStyling from "@/media/Images/HairService/Beard Styling.png";
import mustache from "@/media/Images/HairService/Mustache.png";

import Image from "next/image";
import Link from "next/link";
const HairServices = () => {
  const hairService = [
    {
      id: 1,
      title: "Haircut & Styling",
      image: haircutStyling,
      link: "/",
      description:
        "Upgrade your style at Twirl! Get trendy haircuts and flawless blow-dries from expert stylists. Experience a Dyson transformation and step out with confidence. Visit us in Mangaluru for exclusive offers!",
    },
    {
      id: 2,
      title: "Highlights & Streaks",
      image: hairHighlights,
      link: "/",
      description:
        "Transform your look with expert hair coloring and highlights! From bold shades to subtle tones, we create a style that suits you. Step into color and confidence!",
    },
    {
      id: 3,
      title: "Hair Spa",
      image: hairSpa,
      link: "/",
      description:
        "Revive your hair at Twirl Salon with Botox, Keratin & Olaplex treatments! Strengthen, nourish, and restore shine to chemically treated hair.",
    },
    {
      id: 4,
      title: "Hair Treatment",
      image: hairTreatment,
      link: "/",
      description:
        "Indulge in luxurious hair treatments at Twirl Salon! Restore health and shine with deep hydration, scalp therapies, and conditioning masks for soft, vibrant locks.",
    },
    {
      id: 5,
      title: "Beard Styling",
      image: beardStyling,
      link: "/",
      description:
        "Twirl Salon crafts beard styles that suit your personality. With expert precision, we enhance your features for a sharp, well-groomed look!",
    },
    {
      id: 6,
      title: "Mustache",
      image: mustache,
      link: "/",
      description:
        "Get a sharp, refined mustache at Twirl Salon! Our expert barbers craft precision styles, from classic to modern. Book your appointment today!",
    },
  ];
  return (
    <div className="subServices-container">
      {hairService.map((x) => (
        <div className="subServices-cardContainer" key={x.id}>
          <div className="subServices-cardImg">
            <Image src={x.image} alt={x.title} />
          </div>
          <div className="subServices-cardContent">
            <h3>{x.title}</h3>
            <p>{x.description}</p>
            <Link href="/">View More</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HairServices;
