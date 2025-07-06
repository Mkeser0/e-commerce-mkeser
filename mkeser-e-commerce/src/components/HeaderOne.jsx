import React from "react";
import { Phone, Mail } from "lucide-react";
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function HeaderOne({ bgColor, widthO, textO }) {
  return (
    <div className={`${bgColor} flex justify-center ${textO}`}>
      <div
        className={`hidden md:flex justify-between ${widthO}  h-[58px] items-center `}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Phone size={16} color="#FFFFFF" />
            <p className="text-white">(542) 482-2738</p>
          </div>
          <div className="flex items-center gap-1">
            <Mail size={16} color="#FFFFFF" />
            <p className="text-white">mustafakeser0@hotmail.com</p>
          </div>
        </div>
        <div>
          <p className="text-white">
            Follow Us and get a chance to win 80% off
          </p>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="text-[#FFFFFF]">Follow us : </p>
          <FaInstagram
            color="#FFFFFF"
            className="inline-block cursor-pointer"
          />
          <FaYoutube color="#FFFFFF" className="inline-block cursor-pointer" />
          <FaFacebook color="#FFFFFF" className="inline-block cursor-pointer" />
          <FaTwitter color="#FFFFFF" className="inline-block cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default HeaderOne;
