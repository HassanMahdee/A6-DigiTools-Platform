import React from "react";

const Steps = () => {
  return (
    <div className="bg-base-200 border-y-2 border-teal-500 px-4 lg:px-52 py-20 flex flex-col gap-10">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl font-bold text-center">
          Get Started In 3 Steps
        </h2>
        <p className="text-sm font-light">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-xl flex flex-col items-center p-8 pt-4 pr-6 gap-4 hover:scale-105 transition-transform">
          <span className="self-end bg-primary rounded-full text-white w-6 h-6 flex items-center justify-center">
            1
          </span>
          <div className="bg-primary/10 rounded-full p-4">
            <img src="/assets/user.png" alt="user" className="w-12" />
          </div>
          <h3 className="card-title font-bold">Create Account</h3>
          <p className="card-text font-light text-center">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
        <div className="card bg-base-100 shadow-xl flex flex-col items-center p-8 pt-4 pl-6 gap-4 hover:scale-105 transition-transform">
          <span className="self-end bg-primary rounded-full text-white w-6 h-6 flex items-center justify-center">
            2
          </span>
          <div className="bg-primary/10 rounded-full p-4">
            <img src="/assets/package.png" alt="product" className="w-12" />
          </div>
          <h3 className="card-title font-bold">Choose Products</h3>
          <p className="card-text font-light text-center">
            Browse our curated collection of premium digital tools. Filter by
            category, price, or rating.
          </p>
        </div>
        <div className="card bg-base-100 shadow-xl flex flex-col items-center p-8 pt-4 pl-6 gap-4 hover:scale-105 transition-transform">
          <span className="self-end bg-primary rounded-full text-white w-6 h-6 flex items-center justify-center">
            3
          </span>
          <div className="bg-primary/10 rounded-full p-4">
            <img src="/assets/rocket.png" alt="creating" className="w-12" />
          </div>
          <h3 className="card-title font-bold">Start Creating</h3>
          <p className="card-text font-light text-center">
            Start creating amazing content with our powerful tools. No learning
            curve - just start creating.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
