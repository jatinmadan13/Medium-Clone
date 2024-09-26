import React from "react";
import Person from "./Person.jsx";
import image1 from "../assets/1.jpeg";
import image2 from "../assets/2.jpeg";
import image3 from "../assets/3.jpeg";
import image4 from "../assets/4.jpeg";
import image5 from "../assets/5.jpeg";
import image6 from "../assets/6.jpeg";
import image7 from "../assets/7.jpeg";
import image8 from "../assets/8.jpeg";
import image9 from "../assets/9.jpeg";
import image10 from "../assets/10.jpeg";
import image11 from "../assets/11.jpeg";
import image12 from "../assets/12.jpeg";

const Profile = () => {
  const persons = [
    [image1, "Erica Dhawan"],
    [image2, "Devon Price"],
    [image3, "GEN"],
    [image4, "Scott Galloway"],
    [image5, "Kaki Okumura"],
    [image6, "Hal H. Harris"],
    [image7, "OneZero"],
    [image8, "Carvell Wallace"],
    [image9, "Elemental"],
    [image10, "Sarah Cottrell"],
    [image11, "Forge"],
    [image12, "Another Person"],
  ];

  return (
    <div className="bg-[#fccfb1] pb-12">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <div className="max-w-7xl py-10">
          <h1 className="text-center font-primary text-6xl text-gray-800 tracking-normal max-w-xl mx-auto">
            A living networks of curious minds.
          </h1>
          <p className="text-center font-secondary text-sm text-gray-800 max-w-lg mx-auto leading-relaxed p-4">
            Anyone can write on medium. Thought-leaders, journalists, experts,
            and individuals with unique perspectives share their thinking here.
            You'll find pieces by independent writers from around the globe,
            stories we feature and leading authors, and smart takes on our own
            suite of blogs and publications.
          </p>
        </div>
        <div className="w-full p-5 grid grid-cols-1 md:grid-cols-3 gap-x-5">
          {persons.map(([picture, name], index) => {
            return (
              <Person
                key={index}
                picture={picture}
                name={name}
                className={index > 8 && (index !== 11 ? "md:border-b-[1.5px]" : "border-b-[1.5px]")}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
