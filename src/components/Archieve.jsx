import React, { useContext, useEffect, useState } from "react";
import Page from "./Page";
import { TranslationContext } from "../App";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";

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

      <div className="pb-[15rem] bg-[#E9EAEB]">
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

const Card = ({ id, title, src, img }) => {
  const t = useContext(TranslationContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <>
      <Link to={src}>
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          className={`${isHovered && "text-[#B0A47F]"} hidden lg:block`}
        >
          <div className="flex justify-between max-w-[80%] mx-auto py-10  ">
            <h1
              className="capitalize"
              style={{ fontSize: "clamp(1.75em, 2.3vw, 2.5em)" }}
            >
              {title}
            </h1>
            <button className="flex items-center text-center h-full">
              {t("see-website")}
            </button>
          </div>
          <div className="line max-w-[90%] mx-auto"></div>
        </div>
        <div
          className="space-y-3 lg:hidden"
          onClick={() => history(`/projects/${id}`)}
        >
          <div
            className={`bg-[#00211B] min-h-[20rem] flex justify-center items-center`}
          >
            <img src={img} className="w-[80%] mx-auto h-auto" />
          </div>
          <h1
            className="capitalize"
            style={{ fontSize: "clamp(1.75em, 2.3vw, 2.5em)" }}
          >
            {title}
          </h1>
          <div className="line max-w-[90%]"></div>
          <div className="">
            <p className="text-[1em] ">{t("see-website")}</p>
          </div>
        </div>
      </Link>
    </>
  );
};
