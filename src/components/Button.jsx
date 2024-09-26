import React from "react";

const Buttons = ({
  outlineColor,
  bgColor,
  textColor,
  text,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`border ${outlineColor} ${bgColor} ${textColor} ${className} bg-black px-6 py-2 md:px-8 md:py-1 rounded-full text-base md:text-lg`}
    >
      {text}
    </button>
  );
};

export default Buttons;
