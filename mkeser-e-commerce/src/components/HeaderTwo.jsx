import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCart } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function HeaderTwo({ widthT, textt }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const [showShopMenu, setShowShopMenu] = useState(false);

  const history = useHistory();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleContact = () => {
    setIsContact(!isContact);
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex justify-center">
        <div
          className={`flex justify-between items-center py-4 ${widthT} px-4`}
        >
          <div className={`flex justify-between items-center gap-48 `}>
            <h3 className="text-[24px] text-[#252B42] font-bold">
              Mu|Ge Style
            </h3>
            <div
              className={`hidden md:flex items-center gap-[15px] ${textt} text-[#737373] font-bold relative`}
            >
              <Link to="/">Home</Link>
              <div className="flex items-center justify-center gap-1 font-normal relative">
                <Link to="/shop">Shop</Link>
                <IoIosArrowDown
                  color="#252B42"
                  className="cursor-pointer"
                  onClick={() => setShowShopMenu((prev) => !prev)}
                />

                {showShopMenu && (
                  <div className="absolute flex flex-col md:flex-row gap-3 top-8 left-0 bg-white shadow-md p-4 w-[220px] z-50 rounded-md text-sm text-[#252B42]">
                    <div className="mb-2 ">
                      <p className="font-semibold mb-1 text-[#252B42]">Kadın</p>
                      <ul className="pl-2 space-y-1 text-[#858585]">
                        <li>
                          <Link to="/shop/kadin/elbise">Elbise</Link>
                        </li>
                        <li>
                          <Link to="/shop/kadin/ayakkabi">Ayakkabı</Link>
                        </li>
                        <li>
                          <Link to="/shop/kadin/canta">Çanta</Link>
                        </li>
                        <li>
                          <Link to="/shop/kadin/aksesuar">Aksesuar</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-[#252B42]">Erkek</p>
                      <ul className="pl-2 space-y-1 text-[#858585]">
                        <li>
                          <Link to="/shop/erkek/tshirt">Tişört</Link>
                        </li>
                        <li>
                          <Link to="/shop/erkek/pantolon">Pantolon</Link>
                        </li>
                        <li>
                          <Link to="/shop/erkek/ceket">Ceket</Link>
                        </li>
                        <li>
                          <Link to="/shop/erkek/ayakkabi">Ayakkabı</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/aboutus">About</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/page">Page</Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[#23A6F0]">
            <div className={`flex items-center ${textt} gap-1`}>
              <IoPersonOutline />
              <button
                onClick={() => history.push("/signin")}
                className="cursor-pointer"
              >
                Login
              </button>
              <p>/</p>
              <button
                onClick={() => history.push("/signup")}
                className="cursor-pointer"
              >
                Register
              </button>
            </div>
            <IoSearch size={16} />
            <PiShoppingCart />
            <FaRegHeart />
          </div>
          <div className="flex flex-row md:hidden gap-10">
            <IoPersonOutline size={24} />
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
          <div onClick={handleContact} className="cursor-pointer">
            Contact
          </div>
          <Link to="/contact">Pages</Link>
        </div>
      ) : null}
      {isContact ? (
        <div className="top-16 left-0 w-full bg-white py-[82px] flex flex-col text-[#737373] text-[30px] items-center gap-[30px] md:hidden">
          <Link to="/contact">Contact Us</Link>
          <Link to="/contact">Support</Link>
          <Link to="/contact">FAQ</Link>
        </div>
      ) : null}
    </>
  );
}

export default HeaderTwo;
