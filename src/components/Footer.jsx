import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white ">
      <div className="max-w-7xl py-5">
        <h1 className="text-center font-primary text-4xl md:text-6xl text-gray-800  tracking-normal font-semibold">
          Medium
        </h1>
        <div className="flex items-center justify-center mt-4 space-x-4 py-8">
          <a href="#" className="text-gray-600 underline hover:text-brandGreen">
            Terms
          </a>
          <a href="#" className="text-gray-600 underline hover:text-brandGreen">
            Privacy
          </a>
          <a href="#" className="text-gray-600 underline hover:text-brandGreen">
            Help
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
