import Image from "next/image";
import React from "react";
import salonMembershipBanner from "@/media/Images/salonMembershipBanner.png";
import salonMembershipBannerMob from "@/media/Images/Salon MembershipBanner_Mob.png";

import "./SalonMembership.css";
const SalonMembershipHead = () => {
  return (
    <>
      <div className="membershipHead-container">
        <Image src={salonMembershipBanner} alt="Salon Membership Banner" />
      </div>
      <div className="membershipHead-containerMob">
        <Image src={salonMembershipBannerMob} alt="Salon Membership Banner" />
      </div>
    </>
  );
};

export default SalonMembershipHead;
