import React from "react";
import mrect from "../assets/mrect.png";
import mfount from "../assets/mfount.png";

const Reward = () => {
  return (
    <div className="bg-brandGreen flex flex-col items-center justify-center">
      <div className="max-w-7xl flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 border-b md:border-r-[1.5px] border-black p-6 md:p-8 flex flex-col items-center">
          <p className="text-black font-primary text-2xl sm:text-4xl leading-none text-center">
            Read as much as you want.
          </p>
          <img
            src={mrect}
            alt="Mrect"
            className="h-[100px] md:h-[150px] w-[200px] md:w-[250px] mt-6"
          />
          <p className="pt-4 md:pt-8 text-xs text-center">
            Enjoy unlimited access to every story across all of your devices.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col items-center">
          <p className="text-black mb-3 md:mb-5 text-2xl sm:text-4xl font-primary">
            Reward quality content.
          </p>
          <img
            src={mfount}
            alt="Mfount"
            className="h-[90px] md:h-[130px] w-[200px] md:w-[250px] mt-6 md:mt-12"
          />
          <p className="pt-4 md:pt-6 text-xs text-center">
            Your membership helps us to pay our writers, and keep your
            experience ad-free.
          </p>
        </div>
      </div>
      <hr className="h-px bg-white border-1 border-black dark:bg-black w-full" />
    </div>
  );
};

export default Reward;
