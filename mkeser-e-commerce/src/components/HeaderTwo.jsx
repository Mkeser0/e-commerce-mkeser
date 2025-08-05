import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCart } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { Link, useHistory } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/thunks/categoryThunks";

// Yardımcı: Türkçe karakterleri URL uyumlu slug’a çevir
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

// Kısa gender kodunu tam adıma çevir
const genderText = (g) =>
  g === "k" ? "kadin" : g === "e" ? "erkek" : "unisex";

function HeaderTwo({ widthT, textt }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const [showShopMenu, setShowShopMenu] = useState(false);

  // user
  const [user] = useLocalStorage("user", null);
  const history = useHistory();

  // redux
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories) || [];

  useEffect(() => {
    dispatch(fetchCategories());
    console.log("Categories fetched:", categories);
  }, [dispatch]);

  // cinsiyete göre ayır
  const womenCategories = categories.filter((c) => c.gender === "k");
  const menCategories = categories.filter((c) => c.gender === "e");

  const toggleMenu = () => setIsOpen((o) => !o);
  const handleContact = () => {
    setIsContact((c) => !c);
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex justify-center">
        <div
          className={`flex justify-between items-center py-4 ${widthT} px-4`}
        >
          <div className="flex justify-between items-center gap-48">
            <h3 className="text-[24px] text-[#252B42] font-bold">
              Mu|Ge Style
            </h3>

            {/* DESKTOP NAV */}
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

          {/* DESKTOP ICONS */}
          <div className="hidden md:flex items-center gap-4 text-[#23A6F0]">
            {user ? (
              <div className={`flex items-center ${textt} gap-1`}>
                <IoPersonOutline />
                <p>{user.name}</p>
              </div>
            ) : (
              <div className={`flex items-center ${textt} gap-1`}>
                <IoPersonOutline />
                <button onClick={() => history.push("/signin")}>Login</button>
                <p>/</p>
                <button onClick={() => history.push("/signup")}>
                  Register
                </button>
              </div>
            )}
            <IoSearch size={16} />
            <PiShoppingCart />
            <FaRegHeart />
          </div>

          {/* MOBILE ICONS */}
          <div className="flex md:hidden items-center gap-10">
            <IoPersonOutline size={24} />
            <IoSearch size={24} />
            <PiShoppingCart size={24} />
            <button onClick={toggleMenu}>
              <BiMenuAltRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden top-16 left-0 w-full bg-white py-[82px] flex flex-col items-center gap-[30px] text-[#737373] text-[30px]">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/pricing">Pricing</Link>
          <div onClick={handleContact}>Contact</div>
          <Link to="/contact">Pages</Link>
        </div>
      )}

      {/* MOBILE CONTACT SUBMENU */}
      {isContact && (
        <div className="md:hidden top-16 left-0 w-full bg-white py-[82px] flex flex-col items-center gap-[30px] text-[#737373] text-[30px]">
          <Link to="/contact">Contact Us</Link>
          <Link to="/contact">Support</Link>
          <Link to="/contact">FAQ</Link>
        </div>
      )}
    </>
  );
}

export default HeaderTwo;
