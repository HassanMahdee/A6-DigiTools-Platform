import React, { use } from "react";
import PricingCard from "./pricing_card/pricingCard";

const fetchPricingData = async () => {
  const res = await fetch("/data/pricing.json");
  return res.json();
};
const pricingPromise = fetchPricingData();

const Pricing = () => {
  const pricingData = use(pricingPromise);
  return (
    <div id="pricing" className="px-6 lg:px-52 py-10 lg:py-20 w--full space-y-6">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-3xl font-bold text-center">Simple Transparent Pricing</h3>
        <p className="text-sm text-center">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full">
        {pricingData.map((priceCard) => (
          <PricingCard key={priceCard.id} pricingCard={priceCard} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
