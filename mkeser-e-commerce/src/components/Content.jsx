import React from "react";
import Resim1 from "../assets/fp1.jpg";
import Resim2 from "../assets/fp2.jpg";

export function Content() {
  return (
    <div className="w-full bg-white font-[montserrat] flex justify-center overflow-hidden">
      {/* Mobile Layout */}
      <div className="block md:hidden w-full max-w-[414px] h-[910px] bg-white flex justify-center mx-auto">
        <div className="w-[373px] pt-[80px] pb-[80px] flex flex-col gap-[50px] items-center">
          {/* Yazı Bloğu */}
          <div className="w-[280px] h-[336px] flex flex-col gap-[16px] text-left">
            <p className="text-[#23A6F0] font-bold text-[16px] leading-[24px] tracking-[0.1px]">
              Featured Products
            </p>
            <h1 className="text-[#252B42] font-bold text-[40px] leading-[50px] tracking-[0.2px]">
              We love <br />
              what we do
            </h1>
            <div className="w-[258px] h-[180px] flex flex-col justify-between text-[#737373] font-normal text-[14px] leading-[20px] tracking-[0.2px]">
              <p>
                Problems trying to resolve the conflict between the two major
                <br />
                realms of Classical physics: <br />
                Newtonian mechanics.
              </p>
              <p>
                Problems trying to resolve the conflict between the two major
                <br />
                realms of Classical physics: <br />
                Newtonian mechanics.
              </p>
            </div>
          </div>
          {/* Görsel Alanı */}
          <div className="w-[374.5px] h-[363.55px]">
            <img
              src={Resim1}
              alt="Featured"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
      {/* Desktop Layout */}
      <div className="hidden md:flex w-full max-w-[1050px] h-[658px] pt-[80px] pb-[80px] gap-[90px] mx-auto">
        {/* Görsel Alanı */}
        <div className="w-[513px] h-[498px]">
          <img
            src={Resim2}
            alt="Featured"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        {/* Yazı Bloğu */}
        <div className="w-[447px] h-[498px] flex items-center">
          <div className="w-full h-[246px] flex flex-col gap-[16px] text-left justify-center">
            <p className="text-[#23A6F0] font-bold text-[16px] leading-[24px] tracking-[0.1px]">
              Featured Products
            </p>
            <h1 className="text-[#252B42] font-bold text-[40px] leading-[50px] tracking-[0.2px]">
              We love what we do
            </h1>
            <div className="w-[351px] h-[140px] flex flex-col justify-between font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
              <p>
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: <br />
                Newtonian mechanics.
              </p>
              <p>
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: <br />
                Newtonian mechanics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
