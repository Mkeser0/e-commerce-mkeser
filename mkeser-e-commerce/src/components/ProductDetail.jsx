import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";
import { PiShoppingCart } from "react-icons/pi";
import { IoMdEye } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function ProductDetail() {
  // Carousel için resim listesi
  const images = ["/chair.jpg", "/yellow.jpg"];

  // Şu an gösterilen büyük resmin indexi
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [liked, setLiked] = useState(false); // Yorum: Kalbin tıklanıp tıklanmadığını tutar

  // Geri git (sol ok)
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // İleri git (sağ ok)
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Küçük resme tıklanıldığında büyük resmi değiştir
  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Kalbe tıklama fonksiyonu
  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center bg-[#FAFAFA]">
      <div className="w-[348px] md:w-[1050px] h-[991px] md:h-[550px]">
        <div className="flex flex-col md:flex-row gap-7.5">
          <div className="flex flex-col gap-4">
            <div className="relative">
              {/* Aktif resmi göster */}
              <img
                src={images[currentImageIndex]} // Yorum: aktif görseli state'ten alıyoruz
                alt="yelow"
                className="w-[348px] md:w-[506px] h-[277px] md:h-[450px]"
              />
              {/* Sol ok */}
              <div
                className="absolute top-[118px] md:top-[215px] left-[20px] cursor-pointer"
                onClick={handlePrev} // Yorum: Sol oka basınca geri git
              >
                <MdKeyboardArrowLeft size={50} color="#FFFFFF" />
              </div>
              {/* Sağ ok */}
              <div
                className="absolute top-[118px] md:top-[215px] left-[289px] md:left-[447px] cursor-pointer"
                onClick={handleNext} // Yorum: Sağ oka basınca ileri git
              >
                <MdOutlineKeyboardArrowRight size={50} color="#FFFFFF" />
              </div>
            </div>
            {/* Thumbnail'lar */}
            <div className="flex items-center justify-start gap-4">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumb-${index}`}
                  onClick={() => handleThumbnailClick(index)} // Yorum: küçük resme tıklanınca aktif resim değişsin
                  className={`w-[100px] h-[75px] cursor-pointer ${
                    currentImageIndex === index
                      ? "border-2 border-[#23A6F0]" // Yorum: aktif olan thumbnail'e border
                      : ""
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col w-[510px] h-[471px] gap-4">
            <h4 className="text-[#252B42] text-[20px]">Floating Phone</h4>
            <div className="flex">
              <TiStarFullOutline color="#F3CD03" />
              <TiStarFullOutline color="#F3CD03" />
              <TiStarFullOutline color="#F3CD03" />
              <TiStarFullOutline color="#F3CD03" />
              <TiStarOutline color="#F3CD03" />
            </div>
            <h3 className="text-[#252B42] font-bold text-2xl">$1,139.33</h3>
            <p className="text-[#737373] text-sm">
              Availability :<span className="text-[#23A6F0]"> In Stock </span>
            </p>
            <p className="text-sm text-[#858585]">
              Met minim Mollie non desert Alamo est sit cliquey dolor <br /> do
              met sent. RELIT official consequent door ENIM RELIT Mollie. <br />
              Excitation venial consequent sent nostrum met.
            </p>
            <hr className="text-[#BDBDBD]" />
            <div className="hidden md:flex gap-[8px]">
              <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
              <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
              <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
              <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
            </div>
            <div className="flex items-center justify-start gap-[10px] mt-12">
              <button className="w-36 h-11 bg-[#23A6F0] hover:bg-[#fff] text-[#fff] hover:text-[#23A6F0] hover:border hover:border-[#23A6F0] text-sm rounded-md cursor-pointer">
                Select Option
              </button>
              <div>
                <div className="flex top-[340px] left-[35px] gap-[10px]">
                  <div
                    onClick={toggleLike}
                    className={`flex items-center justify-center rounded-full w-[40px] h-[40px] cursor-pointer transition-all duration-300 
                      ${
                        liked
                          ? "bg-red-500 border-red-500"
                          : "bg-white border-[#E8E8E8]"
                      } border`}
                  >
                    {liked ? (
                      <FaHeart size={20} color="#fff" /> // Yorum: Beğenildiyse dolu kalp ve beyaz ikon
                    ) : (
                      <FaRegHeart size={20} color="#252B42" /> // Yorum: Beğenilmediyse boş kalp
                    )}
                  </div>
                  <div className="flex items-center justify-center border border-[#E8E8E8] rounded-full bg-[#FFFFFF] w-[40px] h-[40px]">
                    <PiShoppingCart size={20} color="#252B42" />
                  </div>
                  <div className="flex items-center justify-center border border-[#E8E8E8] rounded-full bg-[#FFFFFF] w-[40px] h-[40px]">
                    <IoMdEye size={20} color="#252B42" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
