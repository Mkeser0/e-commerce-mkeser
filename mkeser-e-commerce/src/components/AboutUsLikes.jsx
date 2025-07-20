import React from "react";

function AboutUsLikes() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-[100px] md:gap-[30px] items-center justify-between w-[1049px] py-[80px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[58px] text-[#252B42] font-bold">15K</h1>
          <h5 className="text-base font-bold text-[#737373] hover:text-[#23A6F0]">
            Happy Customers
          </h5>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[58px] text-[#252B42] font-bold">150K</h1>
          <h5 className="text-base font-bold text-[#737373] hover:text-[#23A6F0]">
            Monthly Visitors
          </h5>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[58px] text-[#252B42] font-bold">15</h1>
          <h5 className="text-base font-bold text-[#737373] hover:text-[#23A6F0]">
            Countries Worldwide
          </h5>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[58px] text-[#252B42] font-bold">100+</h1>
          <h5 className="text-base font-bold text-[#737373] hover:text-[#23A6F0]">
            Top Partners
          </h5>
        </div>
      </div>
    </div>
  );
}

export default AboutUsLikes;
