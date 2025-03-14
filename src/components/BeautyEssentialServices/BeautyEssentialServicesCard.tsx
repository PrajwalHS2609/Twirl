import Image from "next/image";
import Link from "next/link";
import React from "react";
import faceImg from "@/media/Images/WaxingService/Face.png";
import armsImg from "@/media/Images/WaxingService/Arms.png";
import legsImg from "@/media/Images/WaxingService/Legs.png";
import neckImg from "@/media/Images/WaxingService/Neck.png";
import backImg from "@/media/Images/WaxingService/Back.png";

const BeautyEssentialServicesCard = () => {
  const beautyService = [
    {
      id: 1,
      title: "Face",
      image: faceImg,
      link: "/",
      description:
        "Reveal a brighter, smoother complexion with our Face D-Tan & Waxing Combo! Our D-Tan treatment gently exfoliates and revitalizes, while expert waxing leaves your skin silky and hair-free. Experience instant radiance in just one session!",
    },
    {
      id: 2,
      title: "Arms",
      image: armsImg,
      link: "/",
      description:
        "Achieve irresistibly smooth, radiant arms with our Arms D-Tan & Waxing Combo! Our D-Tan treatment gently exfoliates and brightens, while expert waxing leaves your skin flawlessly hair-free. Step out with confidence and a luminous glow!",
    },
    {
      id: 3,
      title: "Legs",
      image: legsImg,
      link: "/",
      description:
        "Reveal flawless, radiant legs with our Legs D-Tan & Waxing Combo! Our D-Tan treatment removes tan and enhances brightness, while expert waxing leaves your skin irresistibly smooth. Step out in confidence with a gorgeous, glowing finish!",
    },
    {
      id: 4,
      title: "Neck",
      image: neckImg,
      link: "/",
      description:
        "Enhance your glow with our Neck D-Tan & Waxing service! Our D-Tan treatment removes tan, revealing a brighter, refreshed complexion, while expert waxing ensures silky-smooth, flawless skin. Elevate your beauty with every session!",
    },
    {
      id: 5,
      title: "Back",
      image: backImg,
      link: "/",
      description:
        "Reveal a radiant, flawless back with our Back D-Tan & Waxing service! Our D-Tan treatment eliminates tan and enhances brightness, while expert waxing leaves your skin silky smooth and hair-free. Feel confident and glow from every angle!",
    },
  ];
  return (
    <div className="subServices-container">
      {beautyService.map((x) => (
        <div className="subServices-cardContainer" key={x.id}>
          <div className="subServices-cardImg">
            <Image src={x.image} alt={x.title} />
          </div>
          <div className="subServices-cardContent">
            <h3>{x.title}</h3>
            <p>{x.description}</p>
            <Link href={x.link}>View More</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BeautyEssentialServicesCard;
