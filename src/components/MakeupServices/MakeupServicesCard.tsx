import React from "react";
import preBridal from "@/media/Images/MakeupServices/Pre-Bridal Makeup.png";
import bridal from "@/media/Images/MakeupServices/Bridal MakeUp.png";

import Image from "next/image";
import Link from "next/link";
import "@/components/Style/style.css";

const MakeupServicesCard = () => {
  const lashesService = [
    {
      id: 1,
      title: "Pre-Bridal Makeup",
      image: preBridal,
      link: "/",
      description:
        "Make your wedding unforgettable with Twirl's Pre-bridal Services! Tailored for brides and grooms, our packages include hair, skin, grooming, and more. Book online or visit us in mangalore for a personalized experience!",
    },
    {
      id: 2,
      title: "Bridal Makeup",
      image: bridal,
      link: "/",
      description:
        "Become the bride of your dreams with Twirl’s personalized bridal packages! Visit our mangalore salon for exclusive offers and let us make you feel beautiful on your special day.",
    },
  ];
  return (
    <div className="subServices-container">
      {lashesService.map((x) => (
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

export default MakeupServicesCard;
