import React from "react";
import Resim1 from "../assets/fp1.jpg";
import Resim2 from "../assets/fp2.jpg";

export function Content() {
  return (
    <div className="w-full bg-white font-[montserrat] flex justify-center overflow-hidden">
      {/* Mobile Layout */}
      <div className="flex md:hidden w-[100vw] h-[56.875rem] bg-white justify-center">
        <div className="w-[23.3rem] pt-[5rem] pb-[5rem] flex flex-col gap-[3.125rem] items-center">
          {/* Yazı Bloğu */}
          <div className="w-[17.5rem] h-[21rem] flex flex-col gap-[1rem] text-left">
            <p className="text-[#23A6F0] font-bold text-[1rem] leading-[1.5rem] tracking-[0.00625rem]">
              Featured Products
            </p>
            <h1 className="text-[#252B42] font-bold text-[2.5rem] leading-[3.125rem] tracking-[0.0125rem]">
              We love <br />
              what we do
            </h1>
            <div className="w-[16.125rem] h-[11.25rem] flex flex-col justify-between text-[#737373] font-normal text-[0.875rem] leading-[1.25rem] tracking-[0.0125rem]">
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
          <div className="flex flex-row w-[23.4rem] h-[22.72rem] gap-[21.9px]">
            <img
              src={Resim1}
              alt="Featured"
              className="object-cover rounded-md w-[9.875rem]"
            />
            <img
              src={Resim2}
              alt="Featured"
              className="object-cover rounded-md w-[12.75rem]"
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex w-full max-w-[65.625rem] h-[41.125rem] pt-[5rem] pb-[5rem] gap-[5.625rem] mx-auto">
        {/* Görsel Alanı */}
        <div className="flex w-[32.06rem] h-[31.125rem] gap-[1.875rem]">
          <img
            src={Resim1}
            alt="Featured"
            className="object-cover rounded-md w-[13.56rem]"
          />
          <img
            src={Resim2}
            alt="Featured"
            className="object-cover rounded-md w-[17.5rem]"
          />
        </div>

        {/* Yazı Bloğu */}
        <div className="w-[27.93rem] h-[31.125rem] flex items-center">
          <div className="w-full h-[15.375rem] flex flex-col gap-[1rem] text-left justify-center">
            <p className="text-[#23A6F0] font-bold text-[1rem] leading-[1.5rem] tracking-[0.00625rem]">
              Featured Products
            </p>
            <h1 className="text-[#252B42] font-bold text-[2.5rem] leading-[3.125rem] tracking-[0.0125rem]">
              We love what we do
            </h1>
            <div className="w-[21.93rem] h-[8.75rem] flex flex-col justify-between font-normal text-[0.875rem] leading-[1.25rem] tracking-[0.0125rem] text-[#737373]">
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
