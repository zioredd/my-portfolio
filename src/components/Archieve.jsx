import React, { useContext, useEffect, useState } from "react";
import Page from "./Page";
import { TranslationContext } from "../App";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Archieve = ({ projects }) => {
  const t = useContext(TranslationContext);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Adjust the screen width breakpoint as needed
    };

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Initial call to set the initial state based on the screen size
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Page title={t("archieve")} />

      <div className="mb-[15rem]">
        <div className="max-w-[80%] mx-auto mb-20 sm:pt-[8rem] md:pt-[10rem] lg:pt-[11rem] pt-[8em] ">
          <h1
            className=" leading-tight antonia text-[#00211B]"
            style={{ fontSize: "clamp(2.8em, 6vw, 7em)" }}
          >
            {t("archieve")}
          </h1>
        </div>

        <hr className="max-w-[90%] mx-auto mt-10 border-t-[0.1em] hidden lg:block" />
        <div
          className={
            isLargeScreen
              ? ""
              : "grid sm:grid-cols-2 gap-y-20 max-w-[90%] mx-auto gap-x-6"
          }
        >
          {projects.map((project, i) => {
            return (
              <Card
                key={i}
                id={project.id}
                img={project.img1}
                title={project.title}
                service={project.service}
                year={project.year}
                location={project.location}
                src={project.src}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Archieve;

const Card = ({ id, title, src }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <>
      <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <div className="flex justify-between max-w-[80%] mx-auto py-10  ">
          <h1
            className="capitalize"
            style={{ fontSize: "clamp(1.75em, 2.3vw, 2.5em)" }}
          >
            {title}
          </h1>

          <a href={src}>
            <button className="flex items-center text-center h-full text-[#B0A47F]">
              See Website
            </button>
          </a>
        </div>
        {/* <hr className="" /> */}
        <div className="line max-w-[90%] mx-auto"></div>
      </div>
    </>
  );
};
