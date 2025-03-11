import React from "react";
import makeupImg from "@/media/Images/MakeupServices/makeupImg.png";
import Image from "next/image";
import Link from "next/link";
import "@/components/Style/style.css";

const MakeupServicesCard = () => {
  const lashesService = [
    {
      id: 1,
      title: "Makeup",
      image: makeupImg,
      link: "/",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
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
