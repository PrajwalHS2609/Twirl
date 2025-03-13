import React from "react";
import makeupBanner from "@/media/Images/MakeupServices/makeupBanner.jpg";
import Image from "next/image";
import "@/components/Style/style.css";

const MakeupServicesHead = () => {
  return (
    <div className="subHead-container">
      <Image src={makeupBanner} alt="makeup banner" />
      <div className="subHead-content">
        <h2>Makeup Service</h2>
        <p>
          Our expert makeup artists and hairstylists craft flawless, radiant
          looks that enhance your natural beauty while perfectly complementing
          your wedding theme. With the use of premium products and advanced
          techniques, we ensure long-lasting perfection from trial sessions to
          final touch-ups. Rely on us for a stress-free, glamorous
          transformation that leaves you feeling confident and picture-perfect
          on your special day.
        </p>
      </div>
    </div>
  );
};

export default MakeupServicesHead;
