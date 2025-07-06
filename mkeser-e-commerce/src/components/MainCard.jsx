import React from "react";
import resim from "../assets/resimred.png";
import CustomButton from "./CustomButton";

function MainCard() {
  return (
    <div className="w-full flex justify-center px-4 md:px-0">
      <div className="flex flex-col w-[388px] gap-[66px] md:gap-0 md:w-[1292px] md:flex-row bg-[#96E9FB] pt-[80px] md:pt-0 h-[904px] md:h-[622px] mx-0 md:mx-20 md:pl-30 justify-center items-center rounded-3xl max-w-screen-2xl">
        <div className="flex flex-col mb-20 md:mb-0 w-[388px] md:w-[548px] h-[316px] gap-[15px] md:gap-[30px]">
          <h5 className="text-[16px] font-bold text-[#2A7CC7] text-center md:text-left">
            SUMMER 2025
          </h5>
          <div className="flex flex-col md:flex-row gap-[10px] text-center md:text-left">
            <h1 className="text-[40px] md:text-[58px] font-bold text-[#252B42]">
              NEW
            </h1>
            <h1 className="text-[40px] md:text-[58px] font-bold text-[#252B42]">
              COLLECTION
            </h1>
          </div>

          <div className="flex flex-col gap-[2px] text-[#737373] text-center md:text-left">
            <div className="flex flex-col md:flex-row gap-[6px]">
              <p>We know how large objects</p>
              <p>will act,</p>
            </div>
            <p>but things on a small scale.</p>
          </div>
          <div className="flex justify-center md:justify-start">
            <CustomButton text="SHOP NOW" />
          </div>
        </div>

        <div className="flex md:mr-[-150px] h-[620px] w-[388px] md:w-[697px]">
          <img src={resim} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MainCard;
