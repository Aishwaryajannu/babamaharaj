// src/components/BackgroundPatterns.js
import React from "react";
import topLeftPattern from "../assets/pattern-top-left.svg";
import bottomRightPattern from "../assets/pattern-bottom-right.svg";

const BackgroundPatterns = () => {
  return (
    <>
      {/* Top Left Pattern */}
      <img
        src={topLeftPattern}
        alt="Top Left Pattern"
        className="absolute top-0 left-0 z-[-1] w-[57px] h-[210px] md:w-[80px] md:h-[300px]"
      />

      {/* Bottom Right Pattern */}
      <img
        src={bottomRightPattern}
        alt="Bottom Right Pattern"
        className="absolute bottom-0 right-0 z-[-1] w-[57px] h-[120px] md:w-[80px] md:h-[160px]"
      />
    </>
  );
};

export default BackgroundPatterns;
