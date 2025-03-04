import React from "react";
import "./HomeInspire.css";
import Link from "next/link";
const HomeInspire = () => {
  const inspireCard = [
    {
      id: 1,
      title: "Paul Mitchell Hair Show",
      img: "https://img.freepik.com/free-photo/sisters-twins-posing-grey_176420-7591.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi incidunt ipsum inventore autem commodi perspiciatis possimus, consequuntur facere, dolor ducimus molestias accusantium. Laborum, nobis? Officia similique itaque explicabo ipsa.",
      bg: "colorChange1",
    },
    {
      id: 2,
      title: "Samantha Marshall Hair Show",
      img: "https://img.freepik.com/free-photo/portrait-pretty-brunette-woman-with-long-hair-bright-make-up-stylish-cozy-sweater-scarf-playful-mood-gray-wall-toned-colors_291049-1233.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi incidunt ipsum inventore autem commodi perspiciatis possimus, consequuntur facere, dolor ducimus molestias accusantium. Laborum, nobis? Officia similique itaque explicabo ipsa.",
      bg: "colorChange2",
    },
    {
      id: 3,
      title: "Samantha Marshall Hair Show",
      img: "https://img.freepik.com/free-photo/young-handsome-hipster-man-trendy-style-outfit-denim-shirt-trousers-sunglasses-hat-isolated-jumping-cheerful-pointing-finger_285396-1517.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi incidunt ipsum inventore autem commodi perspiciatis possimus, consequuntur facere, dolor ducimus molestias accusantium. Laborum, nobis? Officia similique itaque explicabo ipsa.",
      bg: "colorChange3",
    },
    {
      id: 4,
      title: "Samantha Marshall Hair Show",
      img: "https://img.freepik.com/free-photo/young-brunette-woman-smiling-gray_114579-64899.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi incidunt ipsum inventore autem commodi perspiciatis possimus, consequuntur facere, dolor ducimus molestias accusantium. Laborum, nobis? Officia similique itaque explicabo ipsa.",
      bg: "colorChange4",
    },
    {
      id: 5,
      title: "Samantha Marshall Hair Show",
      img: "https://img.freepik.com/free-photo/portrait-sexy-young-couple-posing_149155-4524.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi incidunt ipsum inventore autem commodi perspiciatis possimus, consequuntur facere, dolor ducimus molestias accusantium. Laborum, nobis? Officia similique itaque explicabo ipsa.",
      bg: "colorChange5",
    },
    {
      id: 6,
      title: "Samantha Marshall Hair Show",
      img: "https://img.freepik.com/free-photo/expressive-woman-posing-outdoor_344912-3095.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi incidunt ipsum inventore autem commodi perspiciatis possimus, consequuntur facere, dolor ducimus molestias accusantium. Laborum, nobis? Officia similique itaque explicabo ipsa.",
      bg: "colorChange6",
    },
    {
      id: 7,
      title: "Samantha Marshall Hair Show",
      img: "https://img.freepik.com/free-photo/tender-smiling-lady-is-walking-street-posing-casual-modern-coat-hat_231208-3269.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi incidunt ipsum inventore autem commodi perspiciatis possimus, consequuntur facere, dolor ducimus molestias accusantium. Laborum, nobis? Officia similique itaque explicabo ipsa.",
      bg: "colorChange7",
    },
  ];
  return (
    <div className="homeInspire-container">
      <div className="homeInspire-static">
        <h2>Styling Inspiration</h2>
        <p>CURRENT TRENDS, STYLING TIPS AND MUCH MORE</p>
      </div>
      {inspireCard.map((x) => (
        <div className="homeInspire-cardContainer" key={x.id}>
          <img src={x.img} alt="" />
          <div className="homeInspire-cardContent" id={x.bg}>
            <h3>Paul Mitchell Hair Show</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi
              incidunt ipsum inventore.
            </p>
            <div className="homeInspire-iconContainer">
              <Link href="/"></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeInspire;
