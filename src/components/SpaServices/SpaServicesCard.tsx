import React from 'react'
import spaServiceImg from "@/media/Images/SpaService/spaServiceImg.jpg";
import Link from 'next/link';
import Image from 'next/image';
import "@/components/Style/style.css"

const SpaServicesCard = () => {
    const spaService = [
        {
          id: 1,
          title: "Organic Cleanup Facial",
          image: spaServiceImg,
          link: "/",
          description:
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
        },
        {
          id: 2,
          title: "Snow white facial",
          image: spaServiceImg,
          link: "/",
          description:
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
        },
        {
          id: 3,
          title: "Dead Sea Mineral Facial",
          image: spaServiceImg,
          link: "/",
          description:
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
        },
        {
          id: 4,
          title: "Chocolate Mint Facial",
          image: spaServiceImg,
          link: "/",
          description:
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
        },
        {
          id: 5,
          title: "White Secret",
          image: spaServiceImg,
          link: "/",
          description:
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
        },
        {
          id: 6,
          title: "Acne Cure Facial",
          image: spaServiceImg,
          link: "/",
          description:
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
        },
        {
          id: 7,
          title: "Diamond Glow Facial",
          image: spaServiceImg,
          link: "/",
          description:
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
        },
        {
          id: 8,
          title: "Anti Ageing Facial",
          image: spaServiceImg,
          link: "/",
          description:
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
        },
        {
          id: 9,
          title: "Gold Facial",
          image: spaServiceImg,
          link: "/",
          description:
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
        },
        {
          id: 10,
          title: "Eye Protection Facial",
          image: spaServiceImg,
          link: "/",
          description:
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
        },
        {
          id: 11,
          title: "Hydra Lifting Ocean Miracle",
          image: spaServiceImg,
          link: "/",
          description:
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
        },
        {
          id: 12,
          title: "Luminous Lightening Facial",
          image: spaServiceImg,
          link: "/",
          description:
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
        },
        {
          id: 13,
          title: "Brazilian Skin Lightening",
          image: spaServiceImg,
          link: "/",
          description:
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum culpa laboriosam est commodi velit, aliquid nesciunt blanditiis eum? Ex ullam dolorem nemo similique itaque rem consequatur cupiditate corporis in aspernatur!",
        },
      ];
  return (
    <div className="subServices-container">
    {spaService.map((x) => (
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
  )
}

export default SpaServicesCard
