import React from "react";
import Personnel from "../components/Personnel";

function PersonnelPage() {
  const images = [
    "vesikalık.jpeg",
    "profil1.png",
    "profil2.png",
    "profil3.png",
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-[112px] py-[112px]">
        <div className="flex flex-col justify-center items-center gap-2.5">
          <h4 className="text-[40px] font-bold text-[#252B42]">
            Meet Our Team
          </h4>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-2">
              <p>Problems trying to resolve</p>
              <p> the conflict between the two major</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-2">
              <p>realms of Classical physics: </p>
              <p>Newtonian mechanics </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <Personnel
            profileimg={"vesikalık.jpeg"}
            isim={"Mustafa Keser"}
            title={"Founder"}
          />
          <Personnel
            profileimg={"profil1.png"}
            isim={"Mustafa Keser"}
            title={"Co-Founder"}
          />
          <Personnel
            profileimg={"profil2.png"}
            isim={"Mustafa Keser"}
            title={"Co-Founder"}
          />
          <Personnel
            profileimg={"profil3.png"}
            isim={"Mustafa Keser"}
            title={"Co-Founder"}
          />
        </div>
      </div>
    </div>
  );
}

export default PersonnelPage;
