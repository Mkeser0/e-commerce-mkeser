import React from "react";

function AboutUsMainCard() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-between items-center w-[418px] md:w-[1044px]">
        <div className="flex flex-col justify-center md:justify-start items-center md:items-start w-[418px] md:w-[599px] h-full md:h-[321px]">
          <h5 className="hidden md:block text-base font-bold text-[#252B42]">
            About Company
          </h5>
          <h1 className="text-[2rem] md:text-[3.625rem] font-bold text-[#252B42]">
            ABOUT US
          </h1>
          <div className="flex flex-col justify-center items-center md:items-start text-base md:text-[20px] text-[#737373]">
            <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-2">
              <p>We know how large</p>
              <p>objects will act, </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-2">
              <p>but things on </p>
              <p>a small scale</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-[15px] rounded-sm py-[15px] px-[40px] cursor-pointer text-sm font-bold hover:border hover:border-[#23A6F0] bg-[#23A6F0] hover:bg-[#fff] text-[#fff] hover:text-[#23A6F0] mt-8">
            <button>Get Quote Now</button>
          </div>
        </div>
        <div className="relative w-full md:w-[445px] h-[545px] flex items-center justify-center md:mr-[-130px]">
          <img
            src="/none.png"
            alt="About visual"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUsMainCard;
