"use client";
import { TranslationContext } from "../App";
import codingbg from "../assets/images/coding-bg.jpg";

import React from "react";

const Hero = () => {
  const t = React.useContext(TranslationContext);

  return (
    <>
      <div className="h-screen relative overflow-hidden bg-[#B0A47F]">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className=" min-w-1/2 header  z-[100]  flex items-center ">
            <h1
              className=" druk font-600 capitalize  text-[15vw] text-center text-[#EDEAE0]"
              style={{
                fontSize: "clamp(5em, 9vw, 40em)",
                lineHeight: 0.8,
                letterSpacing: "8px",
              }}
            >
              {t("zior")} <br /> {t("ezedin")}
            </h1>
          </div>
        </div>
        <div
          className="absolute inset-0 bg-cover bg-center clip-container"
          style={{
            backgroundImage: `url(${codingbg})`,
          }}
        ></div>
        <div className="flex flex-col absolute inset-0 justify-end items-center space-y-2">
          <p className="text-[#324744]">{t("scroll")}</p>
          <div className="w-px h-12 bg-[#00211B]"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
