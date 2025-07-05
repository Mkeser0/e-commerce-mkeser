import { Icon } from "lucide-react";
import React from "react";

export function FeaturedProducts() {
  return (
    <div className="flex flex-col justify-center  items-center  text-center gap-2 min-h-screen  font-[montserrat]">
      <h2 className="font-medium text-xl text-[#737373] ">Featured Products</h2>
      <h1 className=" font-bold text-2xl">THE BEST SERVICES</h1>
      <p className="text-sm font-medium text-[#737373]">
        Problems trying to resolve the confilict between
      </p>

      <div className="flex flex-col justify-center md:flex-row gap-24 p-12">
        <IconCard
          icon="https://cdn-icons-png.flaticon.com/512/1055/1055644.png"
          title="Easy Wins"
          description="Get your best looking smile now!"
        />
        <IconCard
          icon="https://cdn-icons-png.flaticon.com/512/1055/1055644.png"
          title="Concrete"
          description="Defalcate is most focused in helping you discover your most beautiful smile"
        />
        <IconCard
          icon="https://cdn-icons-png.flaticon.com/512/1055/1055644.png"
          title="Hack Growth"
          description="Overcame any hurdle or any other problem."
        />
      </div>
    </div>
  );
}

function IconCard({ icon, title, description }) {
  return (
    <div className="flex flex-col font-[montserrat] items-center">
      <img src={icon} alt={title} className="w-16 h-16 mb-4" />
      <h3 className="text-2xl font-bold ">{title}</h3>
      <p className="font-medium text-center max-w-65 mt-4 text-[#737373]">
        {description}
      </p>
    </div>
  );
}
