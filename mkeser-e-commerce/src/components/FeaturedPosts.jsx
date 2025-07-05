import React from "react";
import ProductCardPost from "./ProductCardPost";
import Resim1 from "../assets/fpost1.jpg";
import Resim2 from "../assets/fpost2.jpg";
function FeaturedPosts() {
  return (
    <div className="flex flex-col w-[329px] md:w-[1050px] mx-auto px-[16px] py-[32px] gap-[96px] justify-between items-center">
      <div className="flex flex-col justify-center items-center gap-[8px]">
        <h6 className="text-[14px] text-[#23A6F0] ">Practice Advice</h6>
        <h2 className="text-[40px] text-[#252B42] ">Featured Posts</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-[16px]">
        <ProductCardPost
          puan={"4.9"}
          head1={"English Department"}
          head2={"Graphic Design"}
          text1={"We focus on ergonomics and "}
          text2={"meeting you where you work. It's"}
          text3={"only a keystroke away."}
          imageUrl={Resim1}
        />
        <ProductCardPost
          puan={"4.9"}
          head1={"English Department"}
          head2={"Graphic Design"}
          text1={"We focus on ergonomics and"}
          text2={"meeting you where you work. It's"}
          text3={"only a keystroke away."}
          imageUrl={Resim2}
        />
      </div>
    </div>
  );
}

export default FeaturedPosts;
