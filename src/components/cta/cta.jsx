import React from "react";

const Cta = () => {
  return (
    <div
      className="py-10 lg:py-20 px-6 lg:px-52 flex flex-col gap-5"
      style={{ background: "var(--primary-gradient)" }}
    >
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="text-white text-4xl font-bold">
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
        <button className="btn btn-white text-primary rounded-full">
          Explore Products
        </button>
        <button className="btn btn-outline border-white text-white rounded-full">
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
