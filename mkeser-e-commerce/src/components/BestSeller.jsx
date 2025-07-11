import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { data } from "../data";

export function BestSeller() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-5 px-4">
      <div className="flex flex-col items-center justify-center w-full max-w-[1035px] bg-white">
        <div className="flex flex-col text-center my-8 gap-3">
          <h4 className="text-gray-600 text-sm">Featured Products</h4>
          <h1 className="text-2xl font-bold my-2">BESTSELLER PRODUCTS</h1>
          <p className="text-gray-500 text-sm">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Mobil görünüm - ilk 5 ürün */}
        <div className="grid grid-cols-1 sm:hidden gap-4">
          {(showAll ? data : data.slice(0, 5)).map((product, i) => (
            <ProductCard
              key={i}
              title={product.title}
              imgUrl={product.image}
              productName={product.name}
              price={product.price}
              className="w-full min-h-[400px]"
            />
          ))}
        </div>

        {/* Tablet ve üzeri - ilk 10 ürün */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {(showAll ? data : data.slice(0, 10)).map((product, i) => (
            <ProductCard
              key={i}
              title={product.title}
              imgUrl={product.image}
              productName={product.name}
              price={product.price}
              className="w-full min-h-[400px]"
            />
          ))}
        </div>

        {/* Buton */}
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="mt-10 px-8 py-3 border w-[256px] h-[52px] border-[#23A6F0] text-[#23A6F0] rounded-md hover:bg-[#23A6F0] hover:text-white transition"
        >
          {showAll ? "SHOW LESS PRODUCTS" : "LOAD MORE PRODUCTS"}
        </button>
      </div>
    </div>
  );
}
