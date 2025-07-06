import React from "react";

function ShopProductCard({ resimUrl, head, text }) {
  return (
    <div>
      {/* Bu div'e relative veriyoruz */}
      <div className="relative w-[332px] md:w-[205px] h-[300px] md:h-[223px] text-[#FFFFFF]">
        <img src={resimUrl} alt="" className="w-full h-full object-cover" />
        <h5 className="absolute top-[134px] md:top-[87px] left-[127px] md:left-[70px] text-[16px] font-bold">
          {head}
        </h5>
        <p className="absolute text-[14px] top-[168px] md:top-[120.5px] left-[139px] md:left-[76.5px]">
          {text}
        </p>
      </div>
    </div>
  );
}

export default ShopProductCard;
