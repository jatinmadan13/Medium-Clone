import React from "react";
import Cube from "../assets/cube.png";
import Buttons from "./Button";

const Reward = () => {
  return (
    <div className="bg-White flex flex-col items-center justify-center">
      <div className="max-w-7xl flex flex-col md:flex-row w-full">
        <div className="flex justify-center text-base w-full md:w-1/2 border-b md:border-b-0 md:border-r-[1.5px] border-black p-5 md:p-10 font-secondary">
          <img
            src={Cube}
            alt="Cube"
            className="h-auto w-full self-center md:w-[330px] max-w-[250px] md:max-w-full aspect-square object-cover "
          />
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between items-center md:items-start">
          <p className="text-black hidden md:block md:text-6xl lg:text-7xl font-primary text-center md:text-left">
            Read, write <br />
            and expand <br /> your world.
          </p>
          <p className="text-black w-full md:hidden text-4xl font-primary text-center px-5">
            Read, write and expand your world.
          </p>
          <Buttons
            onClick={() => {
              console.log("Get started button clicked");
            }}
            outlineColor="border-brandGreen"
            textColor="text-white"
            bgColor="bg-brandGreen"
            text="Get Started"
            className="w-fit mt-8 hover:outline-white hover:text-brandGreen hover:bg-white duration-300"
          />
        </div>
      </div>
      <hr className="h-px bg-white border-1 border-black dark:bg-black w-full" />
    </div>
  );
};

export default Reward;
