import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/thunks/productThunks";
import { setLimit, setOffset } from "../redux/actions/productAction";

export function BestSeller() {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);

  const [visibleCount, setVisibleCount] = useState(10); // desktop için 10, mobil için 5 ayarlayacağız

  useEffect(() => {
    dispatch(setLimit(100)); // yüksek limit çekiyoruz
    dispatch(setOffset(0));
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 20);
  };

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

        <div className="grid grid-cols-1 sm:hidden gap-4">
          {productList
            .slice(0, Math.min(5 + visibleCount - 10, productList.length))
            .map((product, i) => (
              <ProductCard
                id={product.id}
                title={product.name}
                imgUrl={product.images[0]?.url}
                productName={product.name}
                price={product.price}
                key={i}
                className="w-full min-h-[400px]"
              />
            ))}
        </div>

        {/* Tablet ve üzeri (hidden sm:grid) */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {productList.slice(0, visibleCount).map((product, i) => (
            <ProductCard
              id={product.id}
              key={i}
              title={product.name}
              imgUrl={product.images[0]?.url}
              productName={product.name}
              price={product.price}
              className="w-full min-h-[400px]"
            />
          ))}
        </div>

        {/* Buton sadece gösterilecek ürün kaldıysa görünür */}
        {visibleCount < productList.length && (
          <button
            onClick={handleLoadMore}
            className="mt-10 px-8 py-3 border w-[256px] h-[52px] border-[#23A6F0] text-[#23A6F0] rounded-md hover:bg-[#23A6F0] hover:text-white transition"
          >
            LOAD MORE PRODUCTS
          </button>
        )}
      </div>
    </div>
  );
}
