import React from "react";

function Personnel({ profileimg, isim, title }) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-2.5 w-[238px] h-[306px] bg-[#FFFFFF]">
        <img
          src={profileimg}
          alt=""
          className="w-[128px] h-[128px] rounded-full"
        />
        <h6 className="text-sm font-bold text-[#23A6F0]">{title}</h6>
        <h5 className="text-[16px] font-bold text-[#252B42]">{isim}</h5>
        <div className="flex flex-col items-center justify-center text-sm text-[#737373] ">
          <p>the quick fox jumps </p>
          <p>over the lazy dog</p>
        </div>
      </div>
    </div>
  );
}

export default Personnel;
