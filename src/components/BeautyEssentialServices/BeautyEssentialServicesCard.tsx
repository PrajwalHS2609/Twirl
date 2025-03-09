import Image from "next/image";
import Link from "next/link";
import React from "react";
import beautyServiceImg from "@/media/Images/BeautyEssentialsService/beautyServiceImg.png";

const BeautyEssentialServicesCard = () => {
  const beautyService = [
    {
      id: 1,
      title: "Face",
      image: beautyServiceImg,
      link: "/",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
    },
    {
      id: 2,
      title: "Arms",
      image: beautyServiceImg,
      link: "/",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
    },
    {
      id: 3,
      title: "Legs",
      image: beautyServiceImg,
      link: "/",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
    },
    {
      id: 4,
      title: "Neck",
      image: beautyServiceImg,
      link: "/",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
    },
    {
      id: 5,
      title: "Back",
      image: beautyServiceImg,
      link: "/",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
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
