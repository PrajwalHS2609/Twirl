"use client";
import React, { useState } from "react";
import "./HomeTestimonial.css";
import Carousel from "react-bootstrap/Carousel";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import amit from "@/media/Images/TestimonialImgs/Amit S.png"
import neha from "@/media/Images/TestimonialImgs/Neha R.png"
import pooja from "@/media/Images/TestimonialImgs/Pooja K.png"
import rohit from "@/media/Images/TestimonialImgs/Rohit V.png"
import shruti from "@/media/Images/TestimonialImgs/Shruti M.png"


const HomeTestimonialMain = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="homeTestimonialMain-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="homeTestimonialMain-carouselItem">
          <div className="homeTestimonial-content">
            <div className="homeTestimonial-itemWrapper">
              <div className="homeTestimonial-item">
                <Image src={neha} alt="neha" />
                <h5>Neha R</h5>
              </div>
              <div className="homeTestimonial-item">
                <FaQuoteRight className="homeTestimonial-icon1" />
                <p>
                  Absolutely in love with my new hair color from Twirl Salon!
                  The team took the time to understand my vision and exceeded
                  all expectations. The color is vibrant, the finish is
                  flawless, and my hair feels healthier than ever! Huge thanks
                  to the amazing Twirl team for their skill, warmth, and
                  expertise. If you're looking for a stunning hair color
                  transformation, this is the place to be! Highly recommend!
                </p>
                <FaQuoteLeft className="homeTestimonial-icon2" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="homeTestimonialMain-carouselItem">
          <div className="homeTestimonial-content">
            <div className="homeTestimonial-itemWrapper">
              <div className="homeTestimonial-item">
                <Image src={pooja} alt="pooja" />
                <h5>Pooja K</h5>
              </div>
              <div className="homeTestimonial-item">
                <FaQuoteRight className="homeTestimonial-icon1" />

                <p>
                  Loved my manicure at Twirl Salon! From the warm welcome to the
                  expert nail care, every detail was perfect. My nails look
                  flawless and beautiful, and my hands feel so soft! Can’t wait
                  for my next visit. Highly recommend!
                </p>
                <FaQuoteLeft className="homeTestimonial-icon2" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="homeTestimonialMain-carouselItem">
          <div className="homeTestimonial-content">
            <div className="homeTestimonial-itemWrapper">
              <div className="homeTestimonial-item">
                <Image src={rohit} alt="rohit" />
                <h5>Rohit V</h5>
              </div>
              <div className="homeTestimonial-item">
                <FaQuoteRight className="homeTestimonial-icon1" />

                <p>
                  Incredible service and attention to detail! I had a
                  rejuvenating facial and manicure at Twirl, and I felt so
                  refreshed. The ambiance is soothing, and the staff is super
                  professional. Highly recommended!
                </p>
                <FaQuoteLeft className="homeTestimonial-icon2" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="homeTestimonialMain-carouselItem">
          <div className="homeTestimonial-content">
            <div className="homeTestimonial-itemWrapper">
              <div className="homeTestimonial-item">
                <Image src={shruti} alt="shruti" />
                <h5>Shruti M</h5>
              </div>
              <div className="homeTestimonial-item">
                <FaQuoteRight className="homeTestimonial-icon1" />

                <p>
                  Had an amazing waxing experience at Twirl Salon! The team,
                  especially Veena, was professional, gentle, and made the
                  process so smooth and painless. The hygienic setup and
                  high-quality wax left my skin feeling super soft! Highly
                  recommend Twirl Salon for the best waxing experience in
                  Mangaluru!
                </p>
                <FaQuoteLeft className="homeTestimonial-icon2" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="homeTestimonialMain-carouselItem">
          <div className="homeTestimonial-content">
            <div className="homeTestimonial-itemWrapper">
              <div className="homeTestimonial-item">
                <Image src={amit} alt="amit" />
                <h5> Amit S</h5>
              </div>
              <div className="homeTestimonial-item">
                <FaQuoteRight className="homeTestimonial-icon1" />

                <p>
                  From gorgeous hair transformations to rejuvenating skincare,
                  Twirl Salon truly exceeded my expectations! The team is
                  incredibly skilled and knows exactly how to bring out the best
                  in you. Plus, the spa session was pure bliss—so relaxing and
                  refreshing! Can’t wait to be back for my next pampering
                  session! Highly recommend!
                </p>
                <FaQuoteLeft className="homeTestimonial-icon2" />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeTestimonialMain;
