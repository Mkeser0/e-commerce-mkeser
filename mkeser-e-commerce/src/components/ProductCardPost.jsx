import React from "react";
import { Link } from "react-router-dom";
import { BsDownload } from "react-icons/bs";
import { RiAlarmLine } from "react-icons/ri";
import { FaListUl } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

function ProductCardPost({
  imageUrl,
  text1,
  text2,
  text3,
  head1,
  head2,
  puan,
}) {
  return (
    <div className="flex flex-col md:flex-row h-[606px] md:h-[404px] text-start items-center md:items-start justify-start ">
      <img
        className="w-[300px] md:w-[209px] h-[330px] md:h-[404px]"
        src={imageUrl}
        alt=""
      />
      <div className="flex flex-col gap-[10px] w-full md:w-[292px] h-[404px] pl-[25px] pt-[25px] pr-[25px] pb-[35px] bg-white">
        <div className="hidden md:flex justify-between">
          <Link>
            <p className="text-[#23A6F0]">{head1}</p>
          </Link>
          <div className="flex items-center gap-[2px] justify-center w-[50px] h-[26px] rounded-[20px] bg-[#252B42]">
            <FaStar size={14} color="#FFCE31" />
            <p className="text-[#FFFFFF]">{puan}</p>
          </div>
        </div>
        <div className="flex md:hidden w-[160px] justify-between items-center">
          <div>
            <Link to="/google">
              <p className="text-[#8EC2F2] text-[12px]">Google</p>
            </Link>
          </div>
          <div>
            <Link to="/trending">
              <p className="text-[#737373] text-[12px]">Trending</p>
            </Link>
          </div>
          <div>
            <Link to="/new">
              <p className="text-[#737373] text-[12px]">New</p>
            </Link>
          </div>
        </div>
        <h5 className="text-[#252B42]">{head2}</h5>
        <div className="flex flex-col text-[#737373] text-start items-start gap-0">
          <p className="text-[14px]">{text1}</p>
          <p className="text-[14px]">{text2}</p>
          <p className="text-[14px]">{text3}</p>
        </div>

        <div className="hidden md:flex items-center gap-[8px] text-[#737373]">
          <BsDownload />
          <h6 className="text-[14px] font-bold">15 Sales</h6>
        </div>
        <div className="hidden md:flex items-center gap-[8px] px-[3px] py-[5px]">
          <h5 className="text-[#BDBDBD]">$16.48</h5>
          <h5 className="text-[#23856D]">$6.48</h5>
        </div>
        <div className="hidden md:flex gap-[8px]">
          <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></div>
          <div className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></div>
          <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></div>
          <div className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></div>
        </div>
        <div className="flex items-center justify-between md:justify-start pb-[15px] pr-10 md:pr-0 text-[12px] gap-[16px] mt-[16px]">
          <div className="flex items-center gap-[8px]">
            <RiAlarmLine color="#23A6F0" />
            <small className="hidden md:block">22h...</small>
            <small className="block md:hidden">22 April 2021</small>
          </div>
          <div className="hidden md:flex items-center gap-[8px]">
            <FaListUl color="#E77C40" />
            <small className="hidden md:block">64 Lessons</small>
          </div>
          <div className="flex items-center gap-[8px]">
            <FaChartArea color="#23856D" />
            <small className="hidden md:block">Progress</small>
            <small className="block md:hidden">14 Comments</small>
          </div>
        </div>
        <button className="flex items-center justify-center mx-auto gap-[10px] w-[141px] h-[44px] font-bold rounded-[37px] px-[20px] py-[10px] border border-amber-50 md:border-blue-500">
          <h6 className="text-[#737373] md:text-[#23A6F0]">Learn More</h6>
          <IoIosArrowForward color="#23A6F0" />
        </button>
      </div>
    </div>
  );
}

export default ProductCardPost;
