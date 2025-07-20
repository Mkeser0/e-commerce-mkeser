import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { useHistory } from "react-router-dom";

function Contact() {
  const history = useHistory();

  return (
    <div className="flex justify-center items-center mt-24 md:mt-36">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row gap-2.5 items-center justify-center">
            <h2 className="text-[40px] font-bold">Get answers</h2>
            <h2 className="text-[40px] font-bold">to all your</h2>
          </div>
          <h2 className="text-[40px] font-bold">questions.</h2>
        </div>
        <div className="flex flex-col justify-center items-center text-[#737373] text-[20px]">
          <div className="flex flex-col md:flex-row gap-2">
            <h4>Problems trying to resolve</h4>
            <h4> the conflict between the</h4>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <h4> two major realms of </h4>
            <h4>Classical physics: </h4>
          </div>
        </div>
        <div>
          <button className="w-[268px] h-[52px] bg-[#23A6F0] hover:bg-[#fff] text-[#fff] rounded-sm cursor-pointer hover:text-[#23A6F0] hover:border hover:border-[#23A6F0]">
            CONTACT OUR COMPANY
          </button>
        </div>
        <div>
          <button
            onClick={() => history.push("/team")}
            className="w-[268px] h-[52px] bg-[#23A6F0] hover:bg-[#fff] text-[#fff] rounded-sm cursor-pointer hover:text-[#23A6F0] hover:border hover:border-[#23A6F0]"
          >
            Meet Our Team
          </button>
        </div>
        <div className="flex justify-center items-center gap-8">
          <div className="group cursor-pointer transition-colors duration-300">
            <FaTwitter
              size={30}
              className="text-[#BDBDBD] group-hover:text-[#1DA1F2]" // Twitter mavisi
            />
          </div>
          <div className="group cursor-pointer transition-colors duration-300">
            <FaFacebookSquare
              size={30}
              className="text-[#BDBDBD] group-hover:text-[#1877F2]"
            />
          </div>
          <div className="group cursor-pointer transition-colors duration-300">
            <IoLogoInstagram
              size={30}
              className="text-[#BDBDBD] group-hover:text-[#C13584]"
            />
          </div>
          <div className="group cursor-pointer transition-colors duration-300">
            <FaLinkedin
              size={30}
              className="text-[#BDBDBD] group-hover:text-[#0077B5]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
