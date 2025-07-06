import React from "react";
import { BiSolidBookReader } from "react-icons/bi";
import { VscBook } from "react-icons/vsc";
import { AiOutlineStock } from "react-icons/ai";

export function FeaturedProducts() {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-2 min-h-screen font-[montserrat]">
      <h2 className="font-medium text-xl text-[#737373]">Featured Products</h2>
      <h1 className="font-bold text-2xl">THE BEST SERVICES</h1>
      <p className="text-sm font-medium text-[#737373]">
        Problems trying to resolve the confilict between
      </p>

      <div className="flex flex-col justify-center md:flex-row gap-24 p-12">
        <IconCard
          IconComponent={BiSolidBookReader}
          title="Easy Wins"
          description="Get your best looking smile now!"
        />
        <IconCard
          IconComponent={VscBook}
          title="Concrete"
          description="Defalcate is most focused in helping you discover your most beautiful smile"
        />
        <IconCard
          IconComponent={AiOutlineStock}
          title="Hack Growth"
          description="Overcame any hurdle or any other problem."
        />
      </div>
    </div>
  );
}

// Icon bileşeni props olarak alınır
function IconCard({ IconComponent, title, description }) {
  return (
    <div className="flex flex-col items-center gap-4 font-[montserrat]">
      <IconComponent size={72} color="#23A6F0" />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="font-medium text-center max-w-65 mt-4 text-[#737373]">
        {description}
      </p>
    </div>
  );
}
