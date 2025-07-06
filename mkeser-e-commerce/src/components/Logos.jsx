import React from "react";
import { FaHooli } from "react-icons/fa6";
import { FaLyft } from "react-icons/fa6";
import { FaPiedPiperHat } from "react-icons/fa6";
import { FaStripe } from "react-icons/fa6";
import { FaAws } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa";

function Logos() {
  return (
    <div className="flex flex-col items-center justify-center my-8">
      <div className="flex flex-col md:flex-row justify-between w-[1050px] items-center text-[#737373] gap-4 my-8">
        <FaHooli size={100} />
        <FaLyft size={100} />
        <FaPiedPiperHat size={100} />
        <FaStripe size={100} />
        <FaAws size={100} />
        <FaRedditAlien size={100} />
      </div>
    </div>
  );
}

export default Logos;
