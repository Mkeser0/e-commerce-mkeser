import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function ProductDetailHeader() {
  return (
    <div className="flex justify-center items-center h-[92px] bg-[#FAFAFA] ">
      <div className="flex justify-start items-center w-[1033px] px-4">
        <Link to="/">Home</Link>
        <IoIosArrowForward color="#BDBDBD" />
        <h6 className="text-[#BDBDBD] text-[14px]">Shop</h6>
      </div>
    </div>
  );
}

export default ProductDetailHeader;
