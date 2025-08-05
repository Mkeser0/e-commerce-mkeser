import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCart } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/thunks/categoryThunks";
import { useHistory } from "react-router-dom";
import ShoppingCardModal from "./ShoppingCardModal";

// Yardımcı fonksiyon: Türkçe karakterleri slug yap
const toSlug = (text) =>
  text
    .toLowerCase()
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ş/g, "s")
    .replace(/ü/g, "u")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

// Yardımcı fonksiyon: "k" → "kadin", "e" → "erkek"
const genderText = (shortGender) =>
  shortGender === "k" ? "kadin" : shortGender === "e" ? "erkek" : "unisex";

function HeaderTwo({ widthT, textt }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const [showShopMenu, setShowShopMenu] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  const cartItems = useSelector((state) => state.shoppingCart.cart);
  const totalItemCount = cartItems.reduce(
    (total, item) => total + item.count,
    0
  );

  const history = useHistory();

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories) || [];

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const womenCategories = categories.filter((cat) => cat.gender === "k");
  const menCategories = categories.filter((cat) => cat.gender === "e");

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleContact = () => {
    setIsContact(!isContact);
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex justify-center">
        <div
          className={`flex justify-between items-center py-4 ${widthT} px-4 md:px-0`}
        >
          {/* Sol: Logo ve Menü */}
          <div className="flex justify-between items-center gap-48">
            <h3 className="text-[25px] text-[#252B42] font-bold">
              Mu|Ge Style
            </h3>

            <div
              className={`hidden md:flex items-center gap-[15px] ${textt} text-[#737373] font-bold relative`}
            >
              <Link to="/">Home</Link>

              {/* SHOP */}
              <div className="flex items-center gap-1 relative">
                <p onClick={() => setShowShopMenu((s) => !s)}>Shop</p>
                <IoIosArrowDown
                  className="cursor-pointer"
                  onClick={() => setShowShopMenu((s) => !s)}
                />

                {showShopMenu && (
                  <div className="absolute flex flex-col md:flex-row gap-3 top-8 left-0 bg-white shadow-md p-4 w-[220px] z-50 rounded-md text-sm text-[#252B42]">
                    {/* Kadın */}
                    <div>
                      <p className="font-semibold mb-1">Kadın</p>
                      <ul className="pl-2 space-y-1 text-[#858585]">
                        {womenCategories.length > 0 ? (
                          womenCategories.map((cat) => (
                            <li key={cat.id}>
                              <Link
                                to={`/shop/${genderText(cat.gender)}/${toSlug(
                                  cat.code.split(":")[1]
                                )}/${cat.id}`}
                              >
                                {cat.title}
                              </Link>
                            </li>
                          ))
                        ) : (
                          <li className="text-gray-400 text-xs">
                            Yükleniyor...
                          </li>
                        )}
                      </ul>
                    </div>
                    {/* Erkek */}
                    <div>
                      <p className="font-semibold mb-1">Erkek</p>
                      <ul className="pl-2 space-y-1 text-[#858585]">
                        {menCategories.length > 0 ? (
                          menCategories.map((cat) => (
                            <li key={cat.id}>
                              <Link
                                to={`/shop/${genderText(cat.gender)}/${toSlug(
                                  cat.code.split(":")[1]
                                )}/${cat.id}`}
                              >
                                {cat.title}
                              </Link>
                            </li>
                          ))
                        ) : (
                          <li className="text-gray-400 text-xs">
                            Yükleniyor...
                          </li>
                        )}
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

          {/* Sağ: Mobil iconlar */}
          <div className="flex flex-row md:hidden gap-10">
            <IoPersonOutline size={24} />
            <IoSearch size={24} />
            <div
              className="relative cursor-pointer"
              onClick={() => setShowCartModal(true)}
            >
              <PiShoppingCart size={24} />
              {totalItemCount > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItemCount}
                </div>
              )}
            </div>
            <button onClick={toggleMenu} className="relative">
              <BiMenuAltRight className="cursor-pointer" size={24} />
            </button>
          </div>

          {/* Sağ: Masaüstü iconlar */}
          <div className="hidden md:flex flex-row items-center gap-4 text-[#23A6F0]">
            <div className={`flex items-center ${textt} gap-1 cursor-pointer`}>
              <IoPersonOutline />
              <p>Login / Register</p>
            </div>
            <IoSearch size={16} />
            <div
              className="relative cursor-pointer"
              onClick={() => setShowCartModal(true)}
            >
              <PiShoppingCart size={24} />
              {totalItemCount > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItemCount}
                </div>
              )}
            </div>

            <FaRegHeart />
          </div>
        </div>
      </div>

      {/* Mobil Açılır Menü */}
      {isOpen && (
        <div className="md:hidden w-full bg-white py-[82px] flex flex-col text-[#737373] text-[30px] items-center gap-[30px]">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/pricing">Pricing</Link>
          <div onClick={handleContact} className="cursor-pointer">
            Contact
          </div>
          <Link to="/contact">Pages</Link>
        </div>
      )}

      {/* Mobil Contact Alt Menü */}
      {isContact && (
        <div className="md:hidden w-full bg-white py-[82px] flex flex-col text-[#737373] text-[30px] items-center gap-[30px]">
          <Link to="/contact">Contact Us</Link>
          <Link to="/contact">Support</Link>
          <Link to="/contact">FAQ</Link>
        </div>
      )}

      {showCartModal && (
        <ShoppingCardModal onClose={() => setShowCartModal(false)} />
      )}
    </>
  );
}

export default HeaderTwo;
