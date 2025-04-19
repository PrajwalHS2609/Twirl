import React from "react";
import Link from "next/link";
import Image from "next/image";
import "@/components/Style/style.css";
import headMassage from "@/media/Images/SpaService/Head Massage.png";
import footMassage from "@/media/Images/SpaService/Foot Massage.png";
import thaiReflex from "@/media/Images/SpaService/Thai Refloxology.png";
import thaiMassage from "@/media/Images/SpaService/Thai Massage.png";
import backMassage from "@/media/Images/SpaService/Back Massage.png";
import sportzMassage from "@/media/Images/SpaService/Sportz Massage.png";
import baliMassage from "@/media/Images/SpaService/Balinese Massage.png";
import twirlMassage from "@/media/Images/SpaService/Twirls Signature Massage.png";
import aromaMassage from "@/media/Images/SpaService/Aroma Massage.png";
import bodyPolish from "@/media/Images/SpaService/Body Polish.png";
import bodyScrub from "@/media/Images/SpaService/Body Scrub.png";

const SpaServicesCard = () => {
  const spaService = [
    {
      id: 1,
      title: "Head Massage",
      image: headMassage,
      link: "/",
      price: "500",
      description:
        " Experience pure relaxation with our soothing head massage, designed to relieve stress, improve blood circulation, and promote mental clarity. Let tension melt away as you unwind in total comfort.",
    },
    {
      id: 2,
      title: "Foot Massage",
      image: footMassage,
      link: "/",
      price: "800",
      description:
        "Treat your feet to the care they deserve with our relaxing foot massage — perfect for relieving stress, improving circulation, and restoring balance after a long day. Pure comfort from sole to soul!",
    },
    {
      id: 3,
      title: "Thai Reflexology",
      image: thaiReflex,
      link: "/",
      price: "2000",
      description:
        "Thai Reflexology is a therapeutic foot massage technique that stimulates pressure points to restore energy flow, relieve tension, and promote overall wellness. A perfect blend of relaxation and healing from the ground up.",
    },
    {
      id: 4,
      title: "Thai Massage",
      image: thaiMassage,
      link: "/",
      price: "1000",
      description:
        "Thai Massage is a traditional healing technique that combines gentle stretching, acupressure, and rhythmic movements to enhance flexibility, relieve tension, and restore energy balance — leaving you relaxed, refreshed, and recharged.",
    },
    {
      id: 5,
      title: "Back Massage",
      image: backMassage,
      link: "/",
      price: "1000",
      description:
        "Relieve tension and melt away stress with our back massage, targeting sore muscles and knots to restore comfort and relaxation. Perfect for easing back pain and recharging your body.",
    },
    {
      id: 6,
      title: "Sportz Massage",
      image: sportzMassage,
      link: "/",
      price: "2500",
      description:
        "Sportz Massage is a deep tissue therapy designed for athletes and active individuals to enhance performance, prevent injuries, and speed up recovery. Perfect for relaxing tight muscles and improving flexibility.",
    },
    {
      id: 7,
      title: "Balinese Massage",
      image: baliMassage,
      link: "/",
      price: "3000",
      description:
        " Balinese Massage is a luxurious full-body therapy that blends gentle stretches, acupressure, reflexology, and aromatherapy to deeply relax the body, improve circulation, and restore inner harmony. A true tropical escape for your senses.",
    },
    {
      id: 8,
      title: "Twirl Signature Massage",
      image: twirlMassage,
      link: "/",
      price: "3000",
      description:
        "The Twirl Signature Massage is our exclusive blend of therapeutic techniques designed to melt away stress, ease muscle tension, and rejuvenate your entire body. A personalized, deeply relaxing experience you won’t forget.",
    },
    {
      id: 9,
      title: "Aroma Massage",
      image: aromaMassage,
      link: "/",
      price: "2000",

      description:
        "Aroma Massage combines gentle massage techniques with the soothing power of essential oils to relax your body, calm your mind, and uplift your spirit. A blissful journey of fragrance and healing touch.",
    },
    {
      id: 10,
      title: "Body Polish",
      image: bodyPolish,
      link: "/",
      price: "3500",
      description:
        "Body Polish is a revitalizing exfoliation treatment that gently removes dead skin cells, leaving your skin smooth, radiant, and refreshed. Perfect for a healthy glow and silky-soft feel from head to toe.",
    },
    {
      id: 11,
      title: "Body Scrub",
      image: bodyScrub,
      link: "/",
      price: "1500",
      description:
        " Body Scrub is an invigorating treatment that exfoliates and cleanses your skin, removing dead cells to reveal a smoother, brighter, and more radiant glow. Refresh your body and awaken your senses.",
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
              <div className="line"></div>
              <span>Price : ₹{x.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpaServicesCard;
