import React from "react";
import "./AboutUs.css";
import welcomeImg from "@/media/Images/AboutUs/welcomeImg.jpg"
import ourStory from "@/media/Images/AboutUs/ourStory.jpg"
import Image from "next/image";

const AboutUsMain = () => {
  return (
    <div className="aboutMain-container">
      <div className="aboutMain-content">
        <div className="aboutMain-item">
          <Image
            src={welcomeImg}
            alt="Welcome Img"
          />
        </div>
        <div className="aboutMain-item">
          <h3>Welcome to Twirl Salon </h3>
          <br />
          <p>
            Experience premium beauty and wellness at Twirl Lifestyle,
            Mangalore’s finest unisex salon. Our expert stylists and therapists
            bring elegance, precision, and indulgence to every service—be it a
            chic haircut, rejuvenating facial, or luxurious spa treatment.
          </p>
          <p>
            With world-class products and cutting-edge techniques, we ensure you
            leave feeling confident and radiant. Step into a space where
            sophistication meets comfort, and let us pamper you with perfection.
          </p>
          <p>
            At Twirl Lifestyle, beauty isn’t just a look—it’s a feeling. Come,
            indulge in the ultimate salon experience!
          </p>
        </div>
      </div>
      <div className="aboutMain-content">
        <div className="aboutMain-item">
          <h3>Our Story</h3>
          <br />
          <p>
            At Twirl Salon, beauty is more than just a service—it’s an
            experience, a celebration of confidence, and a reflection of
            individuality. Born from a passion for artistry and a commitment to
            excellence, Twirl Salon was founded to redefine self-care with
            elegance, innovation, and warmth.
          </p>
          <p>
            Every strand styled, every shade perfected, and every moment spent
            with us is crafted to inspire confidence and radiance. Our expert
            team believes in the power of transformation—whether it’s a subtle
            refresh or a bold new look, we bring dreams to life with precision
            and care.
          </p>
          <p>
            Twirl Salon isn’t just a destination; it’s a journey of beauty,
            where creativity meets sophistication. Step in, unwind, and let us
            twirl you into a world of timeless elegance.
          </p>
        </div>
        <div className="aboutMain-item">
          <Image
            src={ourStory}
            alt="Our Story"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsMain;
