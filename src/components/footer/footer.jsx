import React from "react";
import Links from "./links";
import Socials from "./socials";
import CopyRight from "./copyRight";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 lg:gap-10 bg-[#101727] text-white p-10 lg:px-52">
      <div className="flex flex-col lg:flex-row justify-between gap-10 w-full items-center lg:items-start">
        <div className="flex flex-col space-y-2 w-fit items-center lg:items-start justify-center">
          <h2 className="text-4xl font-extrabold">DigiTools</h2>
          <p className="text-md font-light text-center lg:text-left max-w-sm">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>
        <Links />
        <Socials />
      </div>
      <hr className="h-0.5 opacity-20" />
      <CopyRight />
    </footer>
  );
};

export default Footer;
