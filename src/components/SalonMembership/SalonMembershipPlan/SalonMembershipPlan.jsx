import React from "react";
import "./SalonMembershipPlan.css";

const membershipData = [
  {
    title: "Silver ",
    amount: "₹ 10,000",
    value: "₹ 12,000",
    bonus: "₹ 2,000",
    duration: "3 Years",
  },
  {
    title: "Gold  ",
    amount: "₹ 15,000",
    value: "₹ 18,000",
    bonus: "₹ 3,000",
    duration: "2 Years",
  },
    {
    title: "Diamond   ",
    amount: "₹ 20,000",
    value: "₹ 26,000",
    bonus: "₹ 6,000",
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

            {/* <div className="membership-duration">{item.duration}</div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SalonMembershipPlan;