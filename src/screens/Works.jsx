import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Page from "../components/Page";
import { TranslationContext } from "../App";

const Project = ({ projects }) => {
  const t = React.useContext(TranslationContext);
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
      <Page title={t("work-nav")} />

      <div className="pb-[5rem] md:pb-[10rem] ">
        <div className="max-w-[80%] mx-auto mb-20 sm:pt-[8rem] md:pt-[10rem] lg:pt-[11rem] pt-[8em] ">
          <h1
            className=" leading-tight antonia text-[#00211B]"
            style={{ fontSize: "clamp(2.8em, 6vw, 7em)" }}
          >
            {t("worksheader")}
          </h1>
        </div>
        <div className="max-w-[72%] mx-auto justify-between mt-20 hidden lg:flex">
          <p className="text-[0.6em] text-[#00211B] font-bold uppercase">
            {t("client")}
          </p>
          <p className="text-[0.6em] text-[#00211B] font-bold uppercase">
            {t("location")}
          </p>
          <p className="text-[0.6em] text-[#00211B] font-bold uppercase">
            {t("service")}
          </p>
          <p className="text-[0.6em] text-[#00211B] font-bold uppercase">
            {t("year")}
          </p>
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
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Project;
