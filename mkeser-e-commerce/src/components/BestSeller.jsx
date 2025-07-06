import React from "react";
import ProductCard from "./ProductCard";

export function BestSeller() {
  return (
    <div className="flex flex-col items-center justify-center py-20 min-h-screen gap-[24px] font-[montserrat] bg-white px-4">
      <div className="flex flex-col items-center justify-center gap-[10px] mb-10">
        <h4 className="text-gray-600">Featured Products</h4>
        <h1 className="text-2xl font-bold text-center mb-4">
          <span className="block md:inline">BESTSELLER</span>{" "}
          <span className="block md:inline">PRODUCTS</span>
        </h1>

        <p className="max-w-xl text-center  text-gray-600 mb-8">
          <span className="block md:inline">
            Problems trying to resolve the
          </span>
          <span className="block md:inline">conflict between</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`
        ${i >= 5 ? "hidden lg:block" : ""}`}
          >
            <ProductCard />
          </div>
        ))}
      </div>

      <button className="bg-white text-[#23A6F0] font-semibold w-[256px] h-[52px] mt-10 text-sm px-[40px] py-[15px] border border-[#23A6F0] rounded-[5px] cursor-pointer hover:bg-[#23A6F0] hover:text-white transition-colors duration-300">
        LOAD MORE PRODUCTS
      </button>
    </div>
  );
}
