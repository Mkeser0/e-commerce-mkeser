import React from "react";
import { useHistory } from "react-router-dom";

function ProductCard({ imgUrl, price, productName, width, height, id }) {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/product/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col  font-[montserrat] gap-[3] items-center ${width} ${height}`}
    >
      <img src={imgUrl} alt="Product" className="w-[183px] h-[238px] " />
      <div className="flex flex-col items-center justify-center pb-[35px] px-[25px] pt-[25px] gap-[10px]">
        <h3 className="text-[16px] font-bold mt-4 text-center text-[#252B42]">
          {productName}
        </h3>
        <p className="text-[#737373]  font-bold mb-2 text-sm text-center">
          English Department
        </p>
        <p className="text-[#BDBDBD] font-bold text-xs mb-4 text-center">
          {price}₺ <span className="text-[#23856D] ms-1 font-bold">$6.48</span>
        </p>
        <div className="hidden md:flex gap-[8px]">
          <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></div>
          <div className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></div>
          <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></div>
          <div className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
