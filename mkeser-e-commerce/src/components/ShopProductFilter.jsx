import React from "react";
import { PiGridFourFill } from "react-icons/pi";
import { PiListChecksLight } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

function ShopProductFilter() {
  return (
    <div>
      <div className="flex justify-center md:justify-between items-center w-[412px] md:w-[1049px] mx-auto mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center w-[1049px] gap-6 by-6">
          <div>
            <p className="text-sm text-[#737373] font-bold">
              Showing all 12 results
            </p>
          </div>
          <div className="flex items-center gap-4">
            <h6 className="text-sm text-[#737373] font-bold">Views:</h6>
            <div className="flex items-center gap-2 border border-[#ECECEC] rounded-md p-2">
              <PiGridFourFill />
            </div>
            <div className="flex items-center gap-2 border border-[#ECECEC] rounded-md p-2">
              <PiListChecksLight />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-[141px] h-[50px] border bg-[#F9F9F9] border-[#DDDDDD] rounded-md gap-2">
              <p className="text-sm text-[#737373]">Popularity</p>
              <IoIosArrowDown />
            </div>
            <button className="bg-[#23A6F0] text-[#FFFFFF] py-2.5 px-2.5 w-[94px] h-[50px] rounded ">
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopProductFilter;
