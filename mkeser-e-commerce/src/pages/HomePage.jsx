import React from "react";
import HeaderOne from "../components/HeaderOne";
import HeaderTwo from "../components/HeaderTwo";
import MainCard from "../components/MainCard";
import { BestSeller } from "../components/BestSeller";
import { FeaturedProducts } from "../components/FeaturedProducts";
import ShopCards from "../components/ShopCards";
import { Content } from "../components/Content";
import FeaturedPosts from "../components/FeaturedPosts";
import Logos from "../components/Logos";
import FooterHome1 from "../components/FooterHome1";
import FooterHome2 from "../components/FooterHome2";
import FooterHome3 from "../components/FooterHome3";

function HomePage() {
  return (
    <div>
      <HeaderOne />
      <HeaderTwo />
      <MainCard />
      <Logos />
      <ShopCards />
      <BestSeller />
      <Content />
      <FeaturedProducts />
      <FeaturedPosts />
      <FooterHome1 />
      <FooterHome2 />
      <FooterHome3 />
    </div>
  );
}

export default HomePage;
