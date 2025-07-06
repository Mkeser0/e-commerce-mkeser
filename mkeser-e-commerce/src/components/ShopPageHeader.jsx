import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function ShopPageHeader() {
  return (
    <div className="bg-[#F5F5F5] h-[202px] md:h-[92px] flex items-center justify-center py-[24px] md:py-0">
      <div className="flex flex-col md:flex-row w-[1049px] items-center justify-between gap-[30px]">
        <h3 className="text-[24px] text-[#252B42] font-bold">Shop</h3>
        <div className="flex items-center gap-[15px]">
          <Link>Home</Link>
          <IoIosArrowForward color="#BDBDBD" />
          <h6 className="text-[#BDBDBD] text-[14px]">Shop</h6>
        </div>
      </div>
    </div>
  );
}

export default ShopPageHeader;
