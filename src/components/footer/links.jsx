import React from "react";

const Links = () => {
  return (
    <div className="grid grid-cols-3 justify-center items-center w-fit justify-items-start text-neutral-content lg:gap-20 gap-10">
      <nav className="flex flex-col gap-4 items-start justify-center w-fit">
        <h6 className="footer-title text-md">Products</h6>
        <a className="link link-hover text-sm font-light">Features</a>
        <a className="link link-hover text-sm font-light">Pricing</a>
        <a className="link link-hover text-sm font-light">Templates</a>
        <a className="link link-hover text-sm font-light">Integrations</a>
      </nav>
      <nav className="flex flex-col gap-4 items-start justify-center w-fit">
        <h6 className="footer-title text-md">Company</h6>
        <a className="link link-hover text-sm font-light">About</a>
        <a className="link link-hover text-sm font-light">Blog</a>
        <a className="link link-hover text-sm font-light">Careers</a>
        <a className="link link-hover text-sm font-light">Press</a>
      </nav>
      <nav className="flex flex-col gap-4 items-start justify-center w-fit">
        <h6 className="footer-title text-md">Resources</h6>
        <a className="link link-hover text-sm font-light">Documentation</a>
        <a className="link link-hover text-sm font-light">Help Center</a>
        <a className="link link-hover text-sm font-light">Community</a>
        <a className="link link-hover text-sm font-light">Contact</a>
      </nav>
    </div>
  );
};

export default Links;
