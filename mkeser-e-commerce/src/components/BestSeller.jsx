import React, { useContext, useState } from "react";
import ProductCard from "./ProductCard";
import { userContext } from "../context/SettingContext";

export function BestSeller({}) {
  const { data } = useContext(userContext);
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? data : data.slice(0, 10);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center w-[1035px] px-4 bg-white ">
        <div className="flex flex-col text-center my-8 gap-3">
          <h4 className="text-gray-600 text-sm">Featured Products</h4>
          <h1 className="text-2xl font-bold my-2">BESTSELLER PRODUCTS</h1>
          <p className="text-gray-500 text-sm">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {visibleProducts.map((product, i) => (
            <ProductCard
              key={i}
              imgUrl={product.images[0]?.url}
              productName={product.name}
              price={product.price}
              width="183px"
              height="400px"
            />
          ))}
        </div>

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
