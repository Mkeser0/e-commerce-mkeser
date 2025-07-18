import React from "react";
import Header from "../layout/Header";
import Logos from "../components/Logos";
import Footer from "../layout/Footer";
import ProductDescription from "../components/ProductDescription";

function ProductDetailPage() {
  return (
    <div>
      <Header
        bgColor={"bg-[#23856D]"}
        widthO={"w-[1042px]"}
        textO={"text-[12px]"}
        widthT={"w-[1042px]"}
        textt={"text-[14px]"}
      />
      <ProductDescription />
      <Logos />
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
