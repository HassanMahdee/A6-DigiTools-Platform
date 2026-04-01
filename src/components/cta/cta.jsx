import React from "react";

const Cta = ({ setActiveTab }) => {
  const handleExploreProducts = () => {
    setActiveTab("all");
    setTimeout(() => {
      document
        .getElementById("main-section")
        .scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handleViewPricing = () => {
    setTimeout(() => {
      document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div
      className="py-10 lg:py-20 px-6 lg:px-52 flex flex-col gap-5"
      style={{ background: "var(--primary-gradient)" }}
    >
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="text-white text-4xl font-bold text-center">
          Ready to Transform Your Workflow?
        </h3>
        <p className="text-white text-sm text-center font-light">
          Join thousands of professionals who are already using Digitools to
          work smarter.
          <br />
          Start your free trial today.
        </p>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <button
          onClick={handleExploreProducts}
          className="btn btn-white text-primary rounded-full hover:scale-105 transition-transform duration-300"
        >
          Explore Products
        </button>
        <button
          onClick={handleViewPricing}
          className="btn bg-transparent border-white text-white rounded-full hover:scale-105 transition-transform duration-300"
        >
          View Pricing
        </button>
      </div>
      <p className="text-white text-sm text-center font-light">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  );
};

export default Cta;
