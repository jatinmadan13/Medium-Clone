import React from "react";
import DownloadBtn from "./DownloadBtn";
import AppleImg from "../assets/apple.png";
import PlaystoreImg from "../assets/playstore.png";
import Statistics from "../assets/stats.png";

const Download = () => {
  return (
    <div className="bg-royalGreen flex flex-col items-center justify-center">
      <div className="max-w-7xl flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 py-8 px-3 flex flex-col items-center md:items-start space-y-8 md:space-y-0 md:px-8">
          <div className="p-3">
            <h1 className="font-primary text-6xl md:text-7xl text-black tracking-normal max-w-2xl text-center md:text-left">
              Take Medium <br />
              with you.
            </h1>
            <p className="mt-8 text-base md:text-xs text-center md:text-left">
              Download our app so you can read wherever you <br /> are.
            </p>
          </div>
          <div className="flex space-x-3 px-3">
            <DownloadBtn
              img={AppleImg}
              superText={"Download on the"}
              mainText="App Store"
            />
            <DownloadBtn
              img={PlaystoreImg}
              superText={"GET IT ON"}
              mainText="Google Play"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pt-11 flex justify-center md:justify-end">
          <img
            src={Statistics}
            alt="stats"
            className="h-[200px] md:h-[300px] w-[200px] md:w-[280px] mt-8 md:mt-0 mr-3 md:mr-[100px]"
          />
        </div>
      </div>
      <hr className="h-px bg-white border-1 border-black dark:bg-black w-full" />
    </div>
  );
};

export default Download;
