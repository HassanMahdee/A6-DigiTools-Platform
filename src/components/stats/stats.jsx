import React from "react";
import { MdStarRate } from "react-icons/md";

const Stats = () => {
  return (
    <div
      className="w-full px-10 lg:px-52 py-6 lg:py-20 grid grid-cols-1 lg:grid-cols-3 justify-items-center"
      style={{ background: "var(--primary-gradient)" }}
    >
      <div className="w-full text-center sm:py-10">
        <h3 className="text-white text-6xl font-extrabold">50K+</h3>
        <p className="text-white text-2xl font-light">Active Users</p>
      </div>

      <div className="border-y md:border-y-0 md:border-x border-white/40 w-full text-center sm:py-10">
        <h3 className="text-white text-6xl font-extrabold">200+</h3>
        <p className="text-white text-2xl font-light">Premium Tools</p>
      </div>

      <div className="w-full text-center sm:py-10">
        <h3 className="text-white text-6xl font-extrabold">4.9</h3>
        <span className="flex items-center gap-1 justify-center">
          <p className="text-white text-2xl font-light">Avg. Rating</p>{" "}
          <MdStarRate className="text-3xl text-white" />
        </span>
      </div>
    </div>
  );
};

export default Stats;
