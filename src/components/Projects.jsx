import React from "react";
import Card from "./projectCard";
import Button from "./Button";
import constantineHome from "../assets/sampleWorks/constantineHome.png";
import grace from "../assets/sampleWorks/grace.png";
import tanya from "../assets/sampleWorks/tanya.png";
import mella from "../assets/mella/mellaHome.png";
import { TranslationContext } from "../App";

const Projects = () => {
  const t = React.useContext(TranslationContext);
  return (
    <>
      <div className="bg-[#EDEAE0] pt-5">
        <div className="max-w-[90%] mx-auto flex flex-col items-center min-h-[150vh]">
          <p className="text-[#00211B] font-bold text-[1.5em] mr-auto mb-5 uppercase">
            {t("works")}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-x-10 gap-y-20 mt-5 ">
            <Card id="01" image={mella} title={t("mella")} />
            <Card id="02" image={grace} title={t("grace")} />
            <Card id="03" image={tanya} title={t("knudsen")} />
            <Card id="04" image={constantineHome} title={t("constantin")} />
          </div>
          <div className="mb-20 my-[7em]">
            <Button text={t("more-works")} path="projects" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
