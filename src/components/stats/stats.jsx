import React from "react";
import { MdStarRate } from "react-icons/md";

const Stats = () => {
  return (
    <div
      className="w-full px-10 lg:px-52 py-6 lg:py-12 grid grid-cols-3 justify-items-center"
      style={{ background: "var(--primary-gradient)" }}
    >
      <div className="w-full text-center">
        <h3 className="text-white text-5xl font-extrabold">50K+</h3>
        <p className="text-white font-light">Active Users</p>
      </div>

      <div className="border-r border-white/40 border-l w-full text-center">
        <h3 className="text-white text-5xl font-extrabold">200+</h3>
        <p className="text-white font-light">Premium Tools</p>
      </div>

      <div className="w-full text-center">
        <h3 className="text-white text-5xl font-extrabold">4.9</h3>
        <span className="flex items-center gap-1 justify-center text-white">
          <p className="text-white font-light">Avg. Rating</p> <MdStarRate />
        </span>
      </div>
    </div>
  );
};

export default Stats;
