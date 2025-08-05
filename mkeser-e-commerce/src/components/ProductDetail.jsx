import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";
import { PiShoppingCart } from "react-icons/pi";
import { IoMdEye } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { addToCart } from "../redux/actions/shoppingCardAction";
import { toast } from "react-toastify";

function ProductDetail() {
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  const { id } = useParams();
  const product = productList.find((p) => p.id === parseInt(id));

  // Ürün henüz yüklenmediyse
  if (!product)
    return <div className="p-10 text-center text-lg">Loading product...</div>;

  // Her durumda aynı görseli iki defa göster
  const singleImage = product.images?.[0]?.url || "";
  const images = [singleImage, singleImage];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true); // Görsel tepkiyi başlat
    setTimeout(() => setAdded(false), 1000);
    // toast ekle   TO DO
    toast.success("Ürün sepete eklendi!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="flex justify-center items-center bg-[#FAFAFA]">
      <div className="w-[348px] md:w-[1050px] h-[991px] md:h-[550px]">
        <div className="flex flex-col md:flex-row gap-7.5">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <img
                src={images[currentImageIndex]}
                alt="product"
                className="w-[348px] md:w-[506px] h-[277px] md:h-[450px]"
              />
              <div
                className="absolute top-[118px] md:top-[215px] left-[20px] cursor-pointer"
                onClick={handlePrev}
              >
                <MdKeyboardArrowLeft size={50} color="#FFFFFF" />
              </div>
              <div
                className="absolute top-[118px] md:top-[215px] left-[289px] md:left-[447px] cursor-pointer"
                onClick={handleNext}
              >
                <MdOutlineKeyboardArrowRight size={50} color="#FFFFFF" />
              </div>
            </div>

            <div className="flex items-center justify-start gap-4">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumb-${index}`}
                  onClick={() => handleThumbnailClick(index)}
                  className={`w-[100px] h-[75px] cursor-pointer ${
                    currentImageIndex === index
                      ? "border-2 border-[#23A6F0]"
                      : ""
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col w-[510px] h-[471px] gap-4">
            <h4 className="text-[#252B42] text-[20px]">{product.name}</h4>
            <div className="flex">
              <TiStarFullOutline color="#F3CD03" />
              <TiStarFullOutline color="#F3CD03" />
              <TiStarFullOutline color="#F3CD03" />
              <TiStarFullOutline color="#F3CD03" />
              <TiStarOutline color="#F3CD03" />
            </div>
            <h3 className="text-[#252B42] font-bold text-2xl">
              ₺{product.price}
            </h3>
            <p className="text-[#737373] text-sm">
              Availability :<span className="text-[#23A6F0]"> In Stock </span>
            </p>
            <p className="text-sm text-[#858585]">{product.description}</p>
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
              <div className="flex gap-[10px]">
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
                    <FaHeart size={20} color="#fff" />
                  ) : (
                    <FaRegHeart size={20} color="#252B42" />
                  )}
                </div>
                <div
                  onClick={handleAddToCart}
                  className={`flex items-center justify-center rounded-full w-[40px] h-[40px] cursor-pointer transition-all duration-300 border 
              ${
                added
                  ? "bg-green-500 border-green-500 scale-110"
                  : "bg-white border-[#E8E8E8]"
              }`}
                  title="Add to Cart"
                >
                  <PiShoppingCart
                    size={20}
                    color={added ? "#fff" : "#252B42"}
                  />
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
  );
}
export default ProductDetail;
