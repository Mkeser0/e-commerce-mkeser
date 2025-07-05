import React from "react";
import HeaderOne from "../components/HeaderOne";
import HeaderTwo from "../components/HeaderTwo";
import MainCard from "../components/MainCard";
import { BestSeller } from "../components/BestSeller";
import { FeaturedProducts } from "../components/FeaturedProducts";
import ShopCards from "../components/ShopCards";
import { Content } from "../components/Content";
import FeaturedPosts from "../components/FeaturedPosts";

function HomePage() {
  return (
    <div>
      <HeaderOne />
      <HeaderTwo />
      <MainCard />
      <ShopCards />
      <BestSeller />
      <Content />
      <FeaturedPosts />
      <FeaturedProducts />
    </div>
  );
}

export default HomePage;
