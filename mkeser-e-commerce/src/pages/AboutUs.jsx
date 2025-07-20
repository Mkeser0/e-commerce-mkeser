import React from "react";
import AboutUsHeader from "../components/AboutUsHeader";
import AboutUsMainCard from "../components/AboutUsMainCard";
import AboutUsProblem from "../components/AboutUsProblem";
import AboutUsLikes from "../components/AboutUsLikes";
import Footer from "../layout/Footer";
import Logos from "../components/Logos";
import AboutUsTeam from "../components/AboutUsTeam";
import AboutUsVideo from "../components/AboutUsVideo";

function AboutUs() {
  return (
    <div>
      <AboutUsHeader />
      <AboutUsMainCard />
      <AboutUsProblem />
      <AboutUsLikes />
      <div className="flex justify-center items-center pt-[80px]">
        <div className="flex flex-col justify-center items-center w-[325px] md:w-[864px] gap-[30px]">
          <h2 className="text-[40px] font-bold text-[#252B42] text-center">
            Big Companies Are Here
          </h2>
          <div className="flex flex-col justify-center items-center text-sm text-[#737373]">
            <p>Problems trying to resolve the conflict between</p>
            <p className="text-center">
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
      </div>
      <AboutUsVideo />
      <AboutUsTeam />
      <Logos />
      <Footer />
    </div>
  );
}

export default AboutUs;
