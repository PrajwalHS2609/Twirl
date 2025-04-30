import React from "react";
import "@/components/Style/style.css";
import Image from "next/image";
import hairServiceBanner from "@/media/Images/HairService/hairServiceBanner.jpg";
const KeratinHairSmoothingTreatment = () => {
  return (
    <div className="subHead-container">
      <Image src={hairServiceBanner} alt="hairServiceBanner" />
      <div className="subHead-content">
        <h2>Keratin Hair Smoothing Treatment</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore,
          dolores nam distinctio eum corrupti nulla in, consequuntur delectus
          officiis aspernatur porro inventore rem mollitia odio quos assumenda,
          minima deserunt cum!
        </p>
      </div>
    </div>
  );
};

export default KeratinHairSmoothingTreatment;
