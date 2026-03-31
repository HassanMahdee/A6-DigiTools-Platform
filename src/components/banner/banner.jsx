import React from "react";
import bannerImage from "../../assets/banner.png";
const Banner = () => {
  return (
    <div className="bg-base-200 px-8 lg:px-52 py-12 lg:py-0 relative">
      <div className="flex items-center justify-between w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
          style={{ backgroundImage: `url(${bannerImage})` }}
        ></div>
        <div className="absolute inset-0 bg-base-100/70 lg:hidden"></div>

        <div className="max-w-lg flex-col space-y-4 z-10">
          <div className="badge bg-primary/10 text-primary gap-2 py-3 px-4 rounded-full">
            <span className="w-1 h-1 rounded-full bg-primary ring-2 ring-primary/10 ring-offset-2 ring-offset-primary/20 inline-block "></span>
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-5xl font-bold">
            Supercharge Your Digital Workflow
          </h1>
          <p className="py-2">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex gap-2">
            <button
              className="btn rounded-full text-white hover:scale-105 transition-all duration-300 ease-in-out"
              style={{ background: "var(--primary-gradient)" }}
            >
              Explore Products
            </button>
            <button className="btn btn-primary btn-outline rounded-full hover:scale-105 transition-all duration-300 ease-in-out">
              Demo Video
            </button>
          </div>
        </div>
        <img src={bannerImage} className="hidden lg:block w-full" />
      </div>
    </div>
  );
};

export default Banner;
