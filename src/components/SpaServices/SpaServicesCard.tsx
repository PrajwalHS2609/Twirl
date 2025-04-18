import React from "react";
import spaServiceImg from "@/media/Images/SpaService/spaServiceImg.jpg";
import Link from "next/link";
import Image from "next/image";
import "@/components/Style/style.css";

const SpaServicesCard = () => {
  const spaService = [
    {
      id: 1,
      title: "Head Massage",
      image: spaServiceImg,
      link: "/",
      price: "500",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
    },
    {
      id: 2,
      title: "Foot Massage",
      image: spaServiceImg,
      link: "/",
      price: "800",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
    },
    {
      id: 3,
      title: "Thai Reflexology",
      image: spaServiceImg,
      link: "/",
      price: "2000",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
    },
    {
      id: 4,
      title: "Thai Massage",
      image: spaServiceImg,
      link: "/",
      price: "1000",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
    },
    {
      id: 5,
      title: "Back Massage",
      image: spaServiceImg,
      link: "/",
      price: "1000",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
    },
    {
      id: 6,
      title: "Sportz Massage",
      image: spaServiceImg,
      link: "/",
      price: "2500",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
    },
    {
      id: 7,
      title: "Balinese Massage",
      image: spaServiceImg,
      link: "/",
      price: "3000",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
    },
    {
      id: 8,
      title: "Twirl Signature Massage",
      image: spaServiceImg,
      link: "/",
      price: "3000",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
    },
    {
      id: 9,
      title: "Aroma Massage",
      image: spaServiceImg,
      link: "/",
      price: "2000",

      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
    },
    {
      id: 10,
      title: "Body Polish",
      image: spaServiceImg,
      link: "/",
      price: "3500",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
    },
    {
      id: 11,
      title: "Body Scrub",
      image: spaServiceImg,
      link: "/",
      price: "1500",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
    },
  ];
  return (
    <div className="subServices-container">
      {spaService.map((x) => (
        <div className="subServices-cardContainer" key={x.id}>
          <Link href={x.link}>
            <div className="subServices-cardImg">
              <Image src={x.image} alt={x.title} />
            </div>
            <div className="subServices-cardContent">
              <h3>{x.title}</h3>
              <p>{x.description}</p>
              <div className="subServices-cardItemWrapper">
                <span>
                  <a href="">Book Now</a>
                </span>
                <div className="line"></div>
                <span>Price : ₹{x.price}</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SpaServicesCard;
