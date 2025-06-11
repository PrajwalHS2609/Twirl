import React from "react";
import Image from "next/image";
import Link from "next/link";
import organicFacial from "@/media/Images/FacialService/Organic Cleanup Facial.jpg";
import snowWhite from "@/media/Images/FacialService/Snow white facial.png";
import deadSea from "@/media/Images/FacialService/Dead Sea Mineral Facial.png";
import whiteSecret from "@/media/Images/FacialService/White Secret.png";
import acneCare from "@/media/Images/FacialService/Acne Cure Facial.png";
import diamondGlow from "@/media/Images/FacialService/Diamond Glow Facial.png";
import antiAgeing from "@/media/Images/FacialService/Anti Ageing Facial.png";
import goldFacial from "@/media/Images/FacialService/Gold Facial.png";
import luminousFacial from "@/media/Images/FacialService/Luminous Lightening Facial.png";
import brazilianSkin from "@/media/Images/FacialService/Brazilian Skin Lightening.png";

const FacialServicesCard = () => {
  const facialService = [
    {
      id: 1,
      title: "Organic Cleanup Facial",
      image: organicFacial,
      link: "/",
      price: "1000",
      description:
        "Infused with the power of Kakadu plum, Noni fruit, and Dead Sea minerals, this facial deeply purifies and revitalizes your skin, leaving it refreshed, radiant, and beautifully clear.",
    },
    {
      id: 2,
      title: "Snow white facial",
      image: snowWhite,
      link: "/",
      price: "1500",
      description:
        "Achieve a luminous, radiant glow with the soothing power of Canadian Willow Herb, the exfoliating magic of Papain Enzymes, and the refreshing touch of Cucumber Herbal Extracts.",
    },
    {
      id: 3,
      title: "Dead Sea Mineral Facial",
      image: deadSea,
      link: "/",
      price: "1800",
      description:
        "Enriched with pure Dead Sea minerals, this treatment deeply hydrates and firms your skin, leaving it plump, nourished, and beautifully revitalized.",
    },
    // {
    //   id: 4,
    //   title: "Chocolate Mint Facial",
    //   image: chocolateMint,
    //   link: "/",
    //   description:
    //     "Infused with the rejuvenating blend of coffee, refreshing mint, Korean cica, and nutrient-rich seabuckthorn, this magical formula brightens your skin, enhances elasticity, and restores a youthful glow.",
    // },
    {
      id: 5,
      title: "White Secret",
      image: whiteSecret,
      link: "/",
      price: "3000",
      description:
        "Unlock intense radiance and a luminous glow with the power of highly active plant extracts, nourishing Echium seed oil, and brightening Liquorice root extracts.",
    },
    {
      id: 6,
      title: "Acne Cure Facial",
      image: acneCare,
      link: "/",
      price: "3500",
      description:
        "Say goodbye to acne, pimples, and pigmentation with a powerful blend of skin-purifying ingredients designed to clarify, heal, and restore your natural glow.",
    },
    {
      id: 7,
      title: "Diamond Glow Facial",
      image: diamondGlow,
      link: "/",
      price: "2500",
      description:
        "Achieve an instant radiant glow and deep hydration with this rejuvenating treatment, leaving your skin luminous, refreshed, and beautifully nourished.",
    },
    {
      id: 8,
      title: "Anti Ageing Facial",
      image: antiAgeing,
      link: "/",
      price: "3000",
      description:
        "Experience the ultimate skin refresh with deep pore cleansing, firming, and an instant brightening boost for a smooth, radiant, and flawless complexion.",
    },
    {
      id: 9,
      title: "Gold Facial",
      image: goldFacial,
      link: "/",
      price: "2500",
      description:
        "Revitalize and replenish dehydrated skin with this luxurious facial, enriched with Morocco’s pure gold Argan oil, brightening Vitamin C, and deeply hydrating Hyaluronic Acid for a radiant, youthful glow.",
    },
    // {
    //   id: 10,
    //   title: "Eye Protection Facial",
    //   image: eyeProtection,
    //   link: "/",
    //   description:
    //     "Inspired by advanced carboxytherapy, this cutting-edge cosmetic technology targets and prevents all aesthetic concerns around the eyes, leaving them refreshed, youthful, and radiant.",
    // },
    // {
    //   id: 11,
    //   title: "Hydra Lifting Ocean Miracle",
    //   image: hydraLifting,
    //   link: "/",
    //   description:
    //     "Powered by marine biotechnology and Quinton sea water, this firming treatment nourishes, restores elasticity, and enhances your youthful glow.",
    // },
    {
      id: 12,
      title: "Luminous Lightening Facial",
      image: luminousFacial,
      link: "/",
      price: "5000",
      description:
        "This illuminating anti-aging treatment clarifies, brightens, and envelops your skin in a radiant halo of light and youthful vitality.",
    },
    {
      id: 13,
      title: "Brazilian Skin Lightening",
      image: brazilianSkin,
      link: "/",
      price: "1000",
      description:
        "Reveal a brighter, more even tone with our intimate area treatment—say goodbye to darkness and embrace confidence with regular care.",
    },
  ];
  return (
    <div className="subServices-container">
      {facialService.map((x) => (
       <div className="subServices-cardContainer" key={x.id}>
       <div className="subServices-cardImg">
         <Image src={x.image} alt={x.title} />
       </div>
       <div className="subServices-cardContent">
         <Link href={x.link}>
           <h3>{x.title}</h3>
         </Link>
         <p>{x.description}</p>
         <div className="subServices-cardItemWrapper">
           <span>
             <a href="https://wa.me/919972272700" target="_blank">
               Book Now
             </a>
           </span>
           {/* <div className="line"></div>
           <span>Price : ₹{x.price}</span> */}
         </div>
       </div>
     </div>
      ))}
    </div>
  );
};

export default FacialServicesCard;
