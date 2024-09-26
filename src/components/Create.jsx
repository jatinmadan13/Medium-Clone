import React from "react";
import Button from "./Button";

const Create = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center">
      <div className="items-center max-w-7xl mx-auto">
        <div className="max-w-7xl py-10 flex flex-col items-center">
          <h1 className="px-3 text-center font-primary text-4xl md:text-6xl text-white tracking-normal max-w-2xl mx-auto">
            Create the space for your thinking to take off.
          </h1>
          <p className="text-center font-secondary text-sm md:text-base text-white max-w-lg mx-auto leading-relaxed p-7">
            A blank is also a door. At medium you can walk through it. It's easy
            and free to share your thinking on any topic, connect with an
            audience, express yourself with a range of publishing tools, and
            even earn money for your work.
          </p>
          <Button
            outlineColor={"border-brandGreen"}
            text="Write in Medium"
            textColor="text-brandGreen"
            className="hover:bg-brandGreen hover:text-white duration-300 w-fit md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Create;
