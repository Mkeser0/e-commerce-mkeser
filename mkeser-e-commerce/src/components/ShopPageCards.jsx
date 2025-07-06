import React from "react";
import ShopProductCard from "./ShopProductCard";
import resimUrl from "../assets/col-md-4.png";

function ShopPageCards() {
  return (
    <div>
      <div className="flex items-center justify-center mt-10">
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center w-[1088px] gap-[15px] mt-10">
          <ShopProductCard
            resimUrl={resimUrl}
            head={"CLOTHS"}
            text={"5 Items"}
          />
          <ShopProductCard
            resimUrl={resimUrl}
            head={"CLOTHS"}
            text={"5 Items"}
          />
          <ShopProductCard
            resimUrl={resimUrl}
            head={"CLOTHS"}
            text={"5 Items"}
          />
          <ShopProductCard
            resimUrl={resimUrl}
            head={"CLOTHS"}
            text={"5 Items"}
          />
          <ShopProductCard
            resimUrl={resimUrl}
            head={"CLOTHS"}
            text={"5 Items"}
          />
        </div>
      </div>
    </div>
  );
}

export default ShopPageCards;
