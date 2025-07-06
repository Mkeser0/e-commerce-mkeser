import React from "react";

import MainCard from "../components/MainCard";
import { BestSeller } from "../components/BestSeller";
import { FeaturedProducts } from "../components/FeaturedProducts";
import ShopCards from "../components/ShopCards";
import { Content } from "../components/Content";
import FeaturedPosts from "../components/FeaturedPosts";
import Logos from "../components/Logos";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

function HomePage() {
  return (
    <div>
      <Header
        bgColor={"bg-[#252B42]"}
        widthO={"w-full"}
        widthT={"w-full"}
        textO={"text-[14px]"}
      />
      <MainCard />
      <Logos />
      <ShopCards />
      <BestSeller />
      <Content />
      <FeaturedProducts />
      <FeaturedPosts />
      <Footer />
    </div>
  );
}

export default HomePage;
