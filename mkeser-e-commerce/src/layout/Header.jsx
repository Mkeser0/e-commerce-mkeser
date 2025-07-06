import React from "react";
import HeaderOne from "../components/HeaderOne";
import HeaderTwo from "../components/HeaderTwo";

function Header({ bgColor, widthO, widthT, textO, textt }) {
  return (
    <div>
      <HeaderOne bgColor={bgColor} widthO={widthO} textO={textO} />
      <HeaderTwo widthT={widthT} textt={textt} />
    </div>
  );
}

export default Header;
