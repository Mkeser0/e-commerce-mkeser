import React from "react";

export function BestSeller() {
  return (
    <div className="flex flex-col items-center justify-center py-20 min-h-screen font-[montserrat] bg-white px-4">
      <h1 className="text-2xl font-bold text-center mb-4 ">
        BESTSELLER
        <br /> PRODUCTS
      </h1>

      <p className="max-w-xl text-center  text-gray-600 mb-8">
        Problems trying to resolve the conflict between
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`
        ${i >= 5 ? "hidden lg:block" : ""}`}
          >
            <Card />
          </div>
        ))}
      </div>

      <button className="bg-white text-[#23A6F0] font-semibold mt-10 text-sm px-6 py-3 border border-[#23A6F0] rounded-[5px] cursor-pointer hover:bg-[#23A6F0] hover:text-white transition-colors duration-300">
        LOAD MORE PRODUCTS
      </button>
    </div>
  );
}

function Card() {
  return (
    <div className="flex flex-col  font-[montserrat] gap-3 items-center">
      <img
        src="https://picsum.photos/295/360"
        alt="Product"
        className="w-[290px] h-[370px] "
      />
      <h3 className="text-md font-semibold mt-4 text-center text-black">
        Graphic Design
      </h3>
      <p className="text-[#737373]  font-bold mb-2 text-sm text-center">
        English Department
      </p>
      <p className="text-[#BDBDBD] font-bold text-xs mb-4 text-center">
        $49.99 <span className="text-[#23856D] ms-1 font-bold">$6.48</span>
      </p>
    </div>
  );
}
