"use client";
import { TranslationContext } from "../App";
import React from "react";
import Button from "./Button";

const Hero = () => {
  const t = React.useContext(TranslationContext);

  return (
    <>
      <div className="flex flex-col px-4  py-8 m-[2em]  md:m-[4rem]  space-y-8 md:space-y-10 min-h-[calc(100vh-72px)] justify-center">
        <h1 className="helvetica-neue text-[clamp(1.3em,6vw,2.5em)] md:text-[clamp(2em,4vw,4em)] max-w-full md:max-w-4xl tracking-normal leading-[1.2] text-[#00211B]">
          {t("who")}
        </h1>
        <p className="max-w-full md:max-w-[40%] text-[#00211B] font-sans text-[1em] md:text-[1.3em] tracking-normal leading-6 md:leading-7 font-normal">
          {t("who_description")}
        </p>
        <div className="flex gap-2">
          <Button text={t("see-works")} path="projects" />
          <Button text={t("download-cv")} path="download-cv" />
        </div>
      </div>
    </>
  );
};

export default Hero;
