import React from "react";
import AboutUsProfileCard from "./AboutUsProfileCard";

function AboutUsTeam() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-[10px] w-[361px] md:w-[607px] py-[112px]">
          <h2 className="text-[40px] text-[#252B42] font-bold">
            Meet Our Team
          </h2>
          <p className="text-center">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-7.5">
          <AboutUsProfileCard
            profileimg={"/img1.jpg"}
            username={"Mustafa Keser"}
          />
          <AboutUsProfileCard
            profileimg={"/img2.jpg"}
            username={"Berna Kocalar"}
          />
          <AboutUsProfileCard profileimg={"/img3.jpg"} username={"Müge Su"} />
        </div>
      </div>
    </div>
  );
}

export default AboutUsTeam;
