import React from "react";

const CopyRight = () => {
  return (
    <div className="flex flex-col sm:gap-2 lg:flex-row justify-between items-center w-full">
      <p className="text-md font-light">
        &copy; {new Date().getFullYear()} Digitools. All rights reserved.{" "}
      </p>
      <div className="flex space-x-4 justify-center items-center">
        <a href="#" className="text-sm font-light">
          Privacy Policy
        </a>
        <span>•</span>
        <a href="#" className="text-sm font-light">
          Terms of Service
        </a>
        <span>•</span>
        <a href="#" className="text-sm font-light">
          Cookies
        </a>
      </div>
    </div>
  );
};

export default CopyRight;
