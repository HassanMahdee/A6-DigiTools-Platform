import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const PricingCard = ({ pricingCard }) => {
  return (
    <div
      className={`card hover:scale-105 shadow-lg hover:shadow-xl transition-transform duration-300 w-full rounded-4xl`}
      style={{
        background: pricingCard.highlighted
          ? "var(--primary-gradient)"
          : "white",
        color: pricingCard.highlighted ? "white" : "black",
      }}
    >
      <div className="card-body flex flex-col justify-between px-20">
        {pricingCard.tag && (
          <span className="badge badge-xs badge-warning">
            {pricingCard.tag}
          </span>
        )}
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">{pricingCard.name}</h2>
          <p className="text-sm">{pricingCard.description}</p>
        </div>
        <div className=" text-3xl font-bold">
          {pricingCard.price}
          <span className="text-lg font-normal">$/{pricingCard.period}</span>
        </div>
        <ul className="mt-3 flex flex-col gap-2 text-xs">
          {pricingCard.features.map((feature, index) => (
            <li key={index}>
              <span className="flex items-center gap-2">
                <FaRegCheckCircle /> {feature}
              </span>
            </li>
          ))}
        </ul>
        <button
          className={`btn w-fit lg:w-full mt-4 rounded-full hover:scale-105 transition-transform duration-300 self-center`}
          style={{
            background: pricingCard.highlighted
              ? "white"
              : "var(--primary-gradient)",
            color: pricingCard.highlighted ? "black" : "white",
          }}
        >
          {pricingCard.cta}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
