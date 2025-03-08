import React from "react";
import "@/components/Style/style.css";
import haircutStyling from "@/media/Images/HairService/haircutStyling.jpg";
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
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
    },
    {
      id: 2,
      title: "Highlights & Streaks",
      image: haircutStyling,
      link: "/",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
    },
    {
      id: 3,
      title: "Hair Spa",
      image: haircutStyling,
      link: "/",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
    },
    {
      id: 4,
      title: "Hair Treatment",
      image: haircutStyling,
      link: "/",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
    },
    {
      id: 5,
      title: "Beard Styling",
      image: haircutStyling,
      link: "/",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
    },
    {
      id: 6,
      title: "Mustache",
      image: haircutStyling,
      link: "/",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
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
