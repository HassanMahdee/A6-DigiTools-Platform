import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Socials = () => {
  return (
    <nav className="flex flex-col gap-2 items-center justify-center min-w-max">
      <h6 className="footer-title text-center">Social Links</h6>
      <div className="grid grid-flow-col gap-4">
        <a className="bg-white text-black p-2 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
          <FaInstagram size={16} />
        </a>
        <a className="bg-white text-black p-2 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
          <FaFacebook size={16} />
        </a>
        <a className="bg-white text-black p-2 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
          <FaXTwitter size={16} />
        </a>
      </div>
    </nav>
  );
};

export default Socials;
