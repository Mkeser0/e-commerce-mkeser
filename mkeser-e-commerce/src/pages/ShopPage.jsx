import React from "react";
import HeaderShop from "../layout/HeaderShop";
import Logos from "../components/Logos";
import Footer from "../layout/Footer";
import ShopPageHeader from "../components/ShopPageHeader";
import ShopPageCards from "../components/ShopPageCards";
import ShopProductFilter from "../components/ShopProductFilter";
import { ShopBestSeller } from "../components/ShopBestSeller";

function ShopPage() {
  return (
    <div>
      <HeaderShop
        bgColor={"bg-[#23856D]"}
        widthO={"w-[1042px]"}
        textO={"text-[12px]"}
        widthT={"w-[1042px]"}
        textt={"text-[14px]"}
      />
      <ShopPageHeader />
      <ShopPageCards />
      <ShopProductFilter />
      <ShopBestSeller />
      <Logos />
      <Footer />
    </div>
  );
}

export default ShopPage;
