import React from "react";
import "./ServiceCard.css";
const ServiceCard = () => {
  const services = [
    {
      id: 1,
      title: "Body",
      link: "/",
      image:
        "https://img.freepik.com/free-photo/young-woman-enjoying-spa-day_155003-29190.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
    },
    {
      id: 2,
      title: "Hair Cut",
      link: "/",
      image:
        "https://img.freepik.com/free-photo/portrait-beautiful-woman-with-long-brown-hair-posing-photographer-lady-with-modern-hairstyle-posing-studio_549566-538.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
    },
    {
      id: 3,
      title: "Facial",
      link: "/",
      image:
        "https://img.freepik.com/free-photo/beautician-with-brush-applies-white-moisturizing-mask-face-young-girl-client-spa-beauty-salon_343596-4248.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
    },
    {
      id: 4,
      title: "Nails",
      link: "/",
      image:
        "https://img.freepik.com/free-photo/woman-showing-her-nail-art-fingernails-against-monster-leaf_23-2149820447.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
    },
    {
      id: 5,
      title: "Makeup",
      link: "/",
      image:
        "https://img.freepik.com/free-photo/female-model-wedding-bridal-makeup_114579-9312.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
    },
  ];
  return (
    <div className="serviceCard-container">
      {services.map((services) => (
        <div className="homeServiceCard-wrapper" key={services.id}>
          <div className="homeServiceCard-content">
            <img src={services.image} alt={services.title} />
            <div className="homeServiceCard-item">
              <div className="homeServiceCard-textContainer">
                <h3>
                  <a href={services.link}>{services.title}</a>
                </h3>
              </div>
              <button>VIEW DETAILS</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
