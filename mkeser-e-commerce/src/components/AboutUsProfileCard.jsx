import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function AboutUsProfileCard({ profileimg, username }) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img
          src={profileimg}
          alt=""
          className="w-[316px] h-[231px] object-cover"
        />
        <div className="flex flex-col justify-center items-center p-7.5 gap-2.5">
          <h5 className="text-base font-bold text-[#252B42]">{username}</h5>
          <h6 className="text-sm font-bold text-[#737373]">Profession</h6>
          <div>
            <div className="flex items-center justify-between gap-[20px] text-[#23A6F0] w-[112px]">
              <FaFacebook size={24} />
              <FaInstagram size={24} />
              <FaTwitter size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsProfileCard;
