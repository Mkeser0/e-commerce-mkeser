import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/thunks/productThunks";
import { setLimit, setOffset } from "../redux/actions/productAction";

export function ShopBestSeller() {
  const dispatch = useDispatch();
  const [activePage, setActivePage] = useState(1);

  const itemsPerPage = 12;
  const offset = (activePage - 1) * itemsPerPage;

  const { productList, total } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(setLimit(itemsPerPage));
    dispatch(setOffset(offset));
    dispatch(fetchProducts());
  }, [dispatch, activePage]);

  return (
    <div className="flex flex-col items-center justify-center py-16 bg-white">
      <div className="flex flex-col items-center justify-center w-[1048px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {productList.map((product) => (
            <ProductCard
              title={product.name}
              id={product.id}
              key={product.id}
              imgUrl={product.images[0]?.url}
              productName={product.name}
              price={product.price}
              width="240px"
              height="488px"
            />
          ))}
        </div>

        <div className="flex items-center justify-center mt-10 border border-[#BDBDBD] text-[#23A6F0] rounded w-[313px] h-[74px]">
          <button
            className="h-[74px] w-[83px] flex items-center justify-center text-[#BDBDBD]"
            onClick={() => setActivePage(1)}
          >
            First
          </button>

          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`border border-[#BDBDBD] h-[74px] w-[49px] transition ${
                activePage === page
                  ? "bg-[#23A6F0] text-white"
                  : "bg-white text-[#23A6F0]"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            className="h-[74px] w-[83px] flex items-center justify-center"
            onClick={() => setActivePage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
