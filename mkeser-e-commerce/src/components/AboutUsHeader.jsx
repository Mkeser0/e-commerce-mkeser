import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { BiMenuAltRight } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCart } from "react-icons/pi";
import { useHistory } from "react-router-dom";

function AboutUsHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex items-center justify-center h-[91px]">
        <div className="flex items-center justify-start text-[#737373] font-bold gap-2 md:gap-12">
          <h3 className="text-[%5] text-[#252B42] w-[80px] md:w-[187px] text-left font-bold">
            Mu|Ge Style
          </h3>
          <div className="hidden md:flex justify-between items-center w-[815px]">
            <div className="flex flex-row justify-center items-center gap-5">
              <Link to="/">Home</Link>
              <Link to="/product/:id">Product</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/page">Page</Link>
            </div>
            <div className="flex justify-center items-center gap-11">
              <button className="text-sm text-[#23A6F0] cursor-pointer">
                Login
              </button>
              <div className="flex justify-center items-center gap-[15px] rounded-sm py-[15px] px-[25px] cursor-pointer text-sm font-bold hover:border hover:border-[#23A6F0] bg-[#23A6F0] hover:bg-[#fff] text-[#fff] hover:text-[#23A6F0]">
                <button>Become a member</button>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
          <div className="flex flex-row md:hidden gap-10">
            <IoSearch size={24} />
            <PiShoppingCart size={24} />
            <button onClick={toggleMenu} className="relative">
              <BiMenuAltRight className="cursor-pointer" size={24} />
            </button>
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className="top-16 left-0 w-full bg-white py-[82px] flex flex-col text-[#737373] text-[30px] items-center gap-[30px] md:hidden">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/pricing">Pricing</Link>
          <div
            onClick={() => history.push("/contact")}
            className="cursor-pointer"
          >
            Contact
          </div>
        </div>
      ) : null}
    </>
  );
}

export default AboutUsHeader;
