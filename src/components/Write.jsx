import React from "react";
import photo from "../assets/Jackie.png";

const Write = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center">
      <div className="max-w-7xl flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 border-b md:border-r-[1.5px] border-white p-6 md:p-9 font-secondary">
          <p className="text-white font-primary md:text-7xl hidden md:block leading-none ">
            Over 100 <br /> million <br /> readers and <br /> growing.
          </p>
          <p className="text-white font-primary text-5xl md:hidden leading-none text-center py-10">
            Over 100 million readers and growing.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-9 flex flex-col">
          <div className="h-[160px] md:h-[200px] flex justify-center md:justify-start mb-5 md:mb-8">
            <img
              src={photo}
              alt="Profile"
              className="text-start h-full object-contain mb-5 md:mb-10"
            />
          </div>
          <p className="text-white hidden lg:mb-10 lg:block">
            "Medium is a great place to read and learn from a <br />
            wide range of authors. It's not muddied by ads. <br /> It feels like
            one of the few pure places to go online."
          </p>
          <p className="text-white mb-5 lg:hidden">
            "Medium is a great place to read and learn from a wide range of
            authors. It's not muddied by ads. It feels like one of the few pure
            places to go online."
          </p>
          <p className="text-white font-primary">Jackie Colburn</p>
        </div>
      </div>
      <hr className="h-px bg-white border-1 dark:bg-white w-full " />
    </div>
  );
};

export default Write;
