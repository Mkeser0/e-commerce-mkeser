import React from "react";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCart } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";

function HeaderTwo() {
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <div className="flex justify-between items-center gap-48">
          <h2>Bandage</h2>
          <div className="flex items-center gap-[15px] text-[#737373] font-bold">
            <p>Home</p>
            <p className="font-normal">Shop</p>
            <p>About</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>Page</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[#23A6F0]">
          <div className="flex items-center gap-1 cursor-pointer">
            <IoPersonOutline />
            <p>Login / Register</p>
          </div>
          <IoSearch size={16} />
          <PiShoppingCart />
          <FaRegHeart />
        </div>
      </div>
    </>
  );
}

export default HeaderTwo;
