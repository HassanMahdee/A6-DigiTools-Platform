import React from "react";
import { useState, useEffect } from "react";
import { BsCart2 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 bg-base-100 border-b border-base-300 py-3 md:py-6 px-4 md:px-52 flex items-center justify-between ${isScrolled ? "shadow-md" : ""}`}
    >
      <div>
        <a href="/" className="text-primary text-4xl font-extrabold">
          DigiTools
        </a>
      </div>
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center md:gap-2">
        <button className="btn btn-ghost btn-circle indicator">
          <span className="indicator-item badge badge-outline badge-sm">0</span>
          <BsCart2 />
        </button>
        <button className="btn btn-ghost rounded-full hover:scale-105 transition-transform">
          <span className="block md:hidden">
            <FaRegUser />
          </span>
          <span className="hidden md:block">Login</span>
        </button>
        <button
          className="btn text-white rounded-full hidden md:block hover:scale-105 transition-transform hover:shadow-md"
          style={{ background: "var(--primary-gradient)" }}
        >
          get started
        </button>
        <button
          className="btn btn-ghost btn-circle md:hidden"
          onClick={() => setMenuToggle(!menuToggle)}
        >
          {menuToggle ? <IoIosCloseCircleOutline /> : <CgMenuGridO />}
        </button>
      </div>
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-base-100 shadow-md px-6 pb-4 flex flex-col gap-1 items-end justify-center transition-all duration-300 ease-in-out ${menuToggle ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        <a href="#" className="py-1 border-b border-base-300 ">
          Products
        </a>
        <a href="#" className="py-1 border-b border-base-300">
          Features
        </a>
        <a href="#" className="py-1 border-b border-base-300">
          Pricing
        </a>
        <a href="#" className="py-1 border-b border-base-300">
          Testimonials
        </a>
        <a href="#" className="py-1 border-b border-base-300">
          FAQ
        </a>
      </div>
    </div>
  );
};

export default Navbar;
