import React from "react";
import "./SalonMembershipPlan.css";

const membershipData = [
  {
    title: "Platinum",
    amount: "₹ 1,00,000",
    value: "₹ 1,60,000",
    bonus: "₹ 60,000",
    duration: "3 Years",
  },
  {
    title: "Sapphire",
    amount: "₹ 75,000",
    value: "₹ 1,10,000",
    bonus: "₹ 35,000",
    duration: "2 Years",
  },
];

const SalonMembershipPlan = () => {
  return (
    <section className="membership-section">
      <div className="membership-header">
        <span className="sub-title">THE COLLECTION</span>

        <h1 className="main-title">
          membership <em>tiers</em>
        </h1>

        <p className="description">
          select a tier that aligns with your lifestyle. each level offers
          progressive rewards and exclusive concierge access.
        </p>
      </div>

      <div className="membership-table">
        {membershipData.map((item, index) => (
          <div className="membership-row" key={index}>
            <div className="membership-name">{item.title}</div>

            <div className="membership-price">{item.amount}</div>

            <div className="membership-value">{item.value}</div>

            <div className="membership-bonus">{item.bonus}</div>

            <div className="membership-duration">{item.duration}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SalonMembershipPlan;