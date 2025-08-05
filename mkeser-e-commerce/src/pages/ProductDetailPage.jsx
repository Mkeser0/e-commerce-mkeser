import React from "react";
import HeaderShop from "../layout/HeaderShop";
import Logos from "../components/Logos";
import Footer from "../layout/Footer";
import ProductDescription from "../components/ProductDescription";
import ProductDetailHeader from "../components/ProductDetailHeader";
import ProductDetail from "../components/ProductDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductDetailPage() {
  return (
    <div>
      <HeaderShop
        bgColor={"bg-[#23856D]"}
        widthO={"w-[1042px]"}
        textO={"text-[12px]"}
        widthT={"w-[1042px]"}
        textt={"text-[14px]"}
      />
      <ProductDetailHeader />
      <ProductDetail />
      <ProductDescription />
      <Logos />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default ProductDetailPage;
