import React, { useEffect } from "react";
import ShopProductCard from "./ShopProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/thunks/categoryThunks";

function ShopPageCards() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories) || [];

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="flex justify-center mt-10">
      <div className="w-[1088px] overflow-x-auto">
        <div className="flex w-max gap-4">
          {categories.length > 0 ? (
            categories.map((cat) => (
              <ShopProductCard
                key={cat.id}
                resimUrl={cat.img}
                head={cat.title}
                text={cat.gender === "k" ? "Kadın" : "Erkek"}
              />
            ))
          ) : (
            <p className="text-center">Kategoriler yükleniyor...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShopPageCards;
