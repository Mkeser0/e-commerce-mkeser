import React from "react";
import HeaderOne from "../components/HeaderOne";
import HeaderTwoShopPage from "../components/HeaderTwoShopPage";

function Header({ bgColor, widthO, widthT, textO, textt }) {
  return (
    <div>
      <HeaderOne bgColor={bgColor} widthO={widthO} textO={textO} />
      <HeaderTwoShopPage widthT={widthT} textt={textt} />
    </div>
  );
}

export default Header;
