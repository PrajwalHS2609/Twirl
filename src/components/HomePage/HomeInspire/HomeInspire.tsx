import React from "react";
import "./HomeInspire.css";
import Link from "next/link";
import caramelBrown from "@/media/Images/HomeInspire/caramel brown hair colour.png";
import curlyBangs from "@/media/Images/HomeInspire/Curly Bangs Hair Cut.png";
import nailExtensions from "@/media/Images/HomeInspire/nail extensions.png";
import trendyMens from "@/media/Images/HomeInspire/Trendy Men's Hair Style.png";
import bridalMakeup from "@/media/Images/HomeInspire/Bridal Makeup.png";
import frizzyHair from "@/media/Images/HomeInspire/Frizzy Hair Treatment.png";
import pedicure from "@/media/Images/HomeInspire/Pedicure.png";
import Image from "next/image";

const HomeInspire = () => {
  const inspireCard = [
    {
      id: 1,
      title: "Caramel Brown Hair Colour",
      img: caramelBrown,
      description:
        "Elevate your look with rich caramel brown hair—warm, luminous, and effortlessly chic. A perfect blend of elegance and confidence!",
      bg: "colorChange1",
    },
    {
      id: 2,
      title: "Curly Bangs Hair Cut",
      img: curlyBangs,
      description:
        "Embrace the charm of curly bangs—playful, bold, and effortlessly stylish. A perfect mix of volume, texture, and personality! ",
      bg: "colorChange2",
    },
    {
      id: 3,
      title: "Manicure",
      img: nailExtensions,
      description:
        "Pamper your hands with a luxurious manicure! From nail shaping and cuticle care to a relaxing massage and flawless polish, enjoy beautifully groomed and nourished nails that make a statement.",
      bg: "colorChange3",
    },
    {
      id: 4,
      title: "Trendy Men's Hair Style",
      img: trendyMens,
      description:
        "Upgrade your look with a trendy men's hairstyle—sharp, stylish, and effortlessly confident. Because great hair is the ultimate power move!",
      bg: "colorChange4",
    },
    {
      id: 5,
      title: "Bridal Makeup",
      img: bridalMakeup,
      description:
        "Radiate elegance on your big day with flawless bridal makeup—timeless, luminous, and uniquely you. Because every bride deserves perfection! ",
      bg: "colorChange5",
    },
    {
      id: 6,
      title: "Frizzy Hair Treatment",
      img: frizzyHair,
      description:
        "Tame the frizz, unleash the shine! Our frizzy hair treatment smooths, nourishes, and transforms your hair into silky perfection.",
      bg: "colorChange6",
    },
    {
      id: 7,
      title: "Pedicure",
      img: pedicure,
      description:
        "Give your feet the care they deserve! A soothing pedicure includes a relaxing soak, nail shaping, cuticle care, exfoliation, and a hydrating massage, leaving your feet soft, refreshed, and beautiful.",
      bg: "colorChange7",
    },
  ];
  return (
    <div className="homeInspire-container">
      <div className="homeInspire-static">
        <h2>Styling Inspiration</h2>
        <p>CURRENT TRENDS, STYLING TIPS AND MUCH MORE</p>
      </div>
      {inspireCard.map((x) => (
        <div className="homeInspire-cardContainer" key={x.id}>
          <Image src={x.img} alt={x.title} loading="lazy"/>
          <div className="homeInspire-cardContent" id={x.bg}>
            <h3>{x.title}</h3>
            <p>
             {x.description}
            </p>
            <div className="homeInspire-iconContainer">
              <Link href="/"></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeInspire;
