import React from "react";
import "./SalonMembershipPlan.css";

const SalonMembershipPlan = () => {
  const plans = [
    {
      name: "Platinum",
      fee: "₹ 1,00,000",
      benefit: "₹ 1,60,000",
      reward: "₹ 60,000",
      validity: "3 Years",
    },
    {
      name: "Sapphire",
      fee: "₹ 75,000",
      benefit: "₹ 1,10,000",
      reward: "₹ 35,000",
      validity: "2 Years",
    },
  ];

  return (
    <div className="membershipContainer">
      <div className="membershipHead">
        <h5>THE COLLECTION</h5>

        <h2>
          membership <span>tiers</span>
        </h2>

        <p>
          select a tier that aligns with your lifestyle. each level offers
          progressive rewards and exclusive concierge access.
        </p>
      </div>

      <div className="membershipCardsContainer">
        {plans.map((plan, index) => (
          <div className="membershipCard" key={index}>
            <div className="membershipCardItem membershipName">
              <div className="membershipIcon">✧</div>
              <h3>{plan.name}</h3>
            </div>

            <div className="membershipCardItem">
              <span>Annual Fee</span>
              <h4>{plan.fee}</h4>
            </div>

            <div className="membershipCardItem">
              <span>Welcome Benefit</span>
              <h4>{plan.benefit}</h4>
            </div>

            <div className="membershipCardItem">
              <span>Annual Reward</span>
              <h4 className="highlight">{plan.reward}</h4>
            </div>

            <div className="membershipCardItem">
              <span>Membership Validity</span>
              <h4>{plan.validity}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalonMembershipPlan;