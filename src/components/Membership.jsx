import React from "react";
import Buttons from "./Button";

const Membership = () => {
  return (
    <div className="bg-brandGreen flex flex-col items-center justify-center">
      <div className="items-center max-w-7xl mx-auto">
        <div className="max-w-7xl py-10 flex flex-col items-center">
          <h1 className="text-center sm:text-5xl font-primary text-4xl md:text-6xl text-black tracking-normal max-w-2xl mx-auto">
            Get more with Membership.
          </h1>
          <p className="text-center font-secondary text-sm sm:text-base text-black max-w-lg mx-auto leading-relaxed p-7">
            Become a Medium member to enjoy unlimited access and directly
            support the writers you read the most.
          </p>
          <Buttons
            onClick={() => {
              console.log("Membership options clicked");
            }}
            outlineColor="border-white"
            textColor="text-white"
            bgColor="bg-brandGreen"
            text="See membership options"
            className="hover:outline-white hover:text-brandGreen hover:bg-white duration-300"
          />
        </div>
      </div>
      <hr className="h-px bg-white border-1 border-black dark:bg-black w-screen" />
    </div>
  );
};

export default Membership;
