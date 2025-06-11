import Image from "next/image";
import React from "react";
import gelNail from "@/media/Images/NailService/Gel Nail Art.png";
import chromeGel from "@/media/Images/NailService/Chrome Gel Polish.png";
import ombreGel from "@/media/Images/NailService/Ombre Gel Polish.png";
import classicManicure from "@/media/Images/NailService/Classic Manicure.png";
import organicManicure from "@/media/Images/NailService/Organic Manicure.png";
import classicPedicure from "@/media/Images/NailService/Classic Pedicure.png";
import organicPedicure from "@/media/Images/NailService/Organic Pedicure.png";
import candleManicure from "@/media/Images/NailService/Candle Spa Manicure.png";
import candlePedicure from "@/media/Images/NailService/Candle Spa Pedicure.png";
import cutFile from "@/media/Images/NailService/Cut & File.png";
import colorChange from "@/media/Images/NailService/Colour Change.png";
import geleration from "@/media/Images/NailService/Geleration.png";
import frenchGeleration from "@/media/Images/NailService/French Geleration.png";

import Link from "next/link";
import "@/components/Style/style.css";
const NailsServices = () => {
  const nailsService = [
    {
      id: 1,
      title: "Gel Nail Art",
      image: gelNail,
      link: "/gel-nail-art-salon-in-mangalore",
      price: "100 (per)",
      description:
        "Elevate your nails with breathtaking designs, expertly crafted by our in-house specialists, turning nail painting into a true art form.",
    },
    {
      id: 2,
      title: "Chrome Gel Polish",
      image: chromeGel,
      link: "/chrome-gel-polish-salon-in-mangalore",
      price: "1000",
      description:
        "Experience the beauty of a flawless chrome finish, expertly applied by our skilled nail technicians, turning your nails into captivating works of art.",
    },
    {
      id: 3,
      title: "Ombre Gel Polish",
      image: ombreGel,
      link: "/ombre-gel-polish-salon-in-mangalore",
      price: "1500",
      description:
        "Achieve the trendy ombre nail look with seamlessly blended hues, creating a stunning gradient effect that's effortlessly chic and stylish.",
    },
    {
      id: 4,
      title: "Classic Manicure",
      image: classicManicure,
      link: "/classic-manicure-salon-in-mangalore",
      price: "500",
      description:
        "Indulge in our Classic Manicure for beautifully groomed nails. Our expert technicians will shape, buff, and polish your nails to perfection, leaving your hands refreshed and revitalized.",
    },
    {
      id: 5,
      title: "Organic Manicure",
      image: organicManicure,
      link: "/organic-manicure-salon-in-mangalore",
      price: "700",
      description:
        "Enjoy the ultimate pampering with our Organic Manicure, where skilled technicians use natural products to nourish, strengthen, and enhance your nails and cuticles.",
    },
    {
      id: 6,
      title: "Classic Pedicure",
      image: classicPedicure,
      link: "/classic-pedicure-salon-in-mangalore",
      price: "700",
      description:
        "Pamper your feet with our Classic Pedicure, featuring a relaxing soak, expert nail shaping, cuticle care, and a hydrating massage. Walk away feeling refreshed and rejuvenated.",
    },
    {
      id: 7,
      title: "Organic Pedicure",
      image: organicPedicure,
      link: "/organic-pedicure-salon-in-mangalore",
      price: "900",
      description:
        "Relax and rejuvenate with our Organic Pedicure, featuring natural products, a soothing foot soak, exfoliation, expert nail shaping, and cuticle care. Step out feeling refreshed and pampered.",
    },
    {
      id: 8,
      title: "Candle Spa Manicure",
      image: candleManicure,
      link: "/candle-spa-manicure-salon-in-mangalore",
      price: "1000",
      description:
        "Indulge in our Candle Spa Manicure for a luxurious nail care experience. Enjoy a soothing warm wax treatment, expert nail shaping, cuticle care, and a hydrating massage for soft, rejuvenated hands.",
    },
    {
      id: 9,
      title: "Candle Spa Pedicure",
      image: candlePedicure,
      link: "/candle-spa-pedicure-salon-in-mangalore",
      price: "1500",
      description:
        "Indulge in our Candle Spa Pedicure for the ultimate relaxation. Enjoy a warm candle wax treatment, expert nail shaping, cuticle care, and a deeply hydrating massage, leaving your feet refreshed and rejuvenated from heel to toe.",
    },
    {
      id: 10,
      title: "Cut & File",
      image: cutFile,
      link: "/nail-cut-and-file-salon-in-mangalore",
      price: "200",
      description:
        "Achieve perfectly shaped nails with our Cut & File service. Our skilled technicians will trim and shape your nails to your preferred length and style, ensuring a neat and polished look",
    },
    {
      id: 11,
      title: "Colour Change",
      image: colorChange,
      link: "/nail-colour-change-salon-in-mangalore",
      price: "200",
      description:
        "Refresh your nails instantly with our Colour Change service. Choose from a stunning selection of shades, and let our expert technicians give your nails a vibrant and stylish makeover",
    },
    {
      id: 12,
      title: "Geleration",
      image: geleration,
      link: "/nail-geleration-salon-in-mangalore",
      price: "700",
      description:
        "Enjoy flawless, chip-free nails with our Geleration service. Our expert technicians apply a long-lasting gel polish that cures instantly under UV light, keeping your nails beautiful and durable for weeks.",
    },
    {
      id: 13,
      title: "French Geleration",
      image: frenchGeleration,
      link: "/french-geleration-salon-in-mangalore",
      price: "750",
      description:
        "Enhance your sophistication with our French Geleration service. Our expert technicians apply long-lasting gel polish, giving you timeless, elegant nails that stay flawless for weeks.",
    },
  ];
  return (
    <div className="subServices-container">
      {nailsService.map((x) => (
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

export default NailsServices;
