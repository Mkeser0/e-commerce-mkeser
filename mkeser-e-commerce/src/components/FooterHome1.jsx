import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function FooterHome1() {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex flex-col md:flex-row items-start md:items-center pl-10 md:pl-0 justify-start md:justify-between gap-5 md:gap-0 py-[40px] w-[414px] md:w-[1050px] mx-auto">
        <h3 className="text-[#252B42] text-[24px]">Bandage</h3>
        <div>
          <div className="flex items-center justify-between gap-[20px] text-[#23A6F0]">
            <FaFacebook size={24} />
            <FaInstagram size={24} />
            <FaTwitter size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterHome1;
