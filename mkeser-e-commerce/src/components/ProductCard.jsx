import React from "react";

function ProductCard() {
  return (
    <div className="flex flex-col  font-[montserrat] gap-[3] items-center">
      <img
        src="https://picsum.photos/295/360"
        alt="Product"
        className="w-[183px] h-[238px] "
      />
      <div className="flex flex-col items-center justify-center pb-[35px] px-[25px] pt-[25px] gap-[10px]">
        <h3 className="text-[16px] font-bold mt-4 text-center text-[#252B42]">
          Graphic Design
        </h3>
        <p className="text-[#737373]  font-bold mb-2 text-sm text-center">
          English Department
        </p>
        <p className="text-[#BDBDBD] font-bold text-xs mb-4 text-center">
          $49.99 <span className="text-[#23856D] ms-1 font-bold">$6.48</span>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
