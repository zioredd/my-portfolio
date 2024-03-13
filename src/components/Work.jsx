import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Page from "./Page";
import Footer from "../components/Footer";
import Button from "./Button";
import { TranslationContext } from "../App";

const Work = ({ projects, id }) => {
  const t = React.useContext(TranslationContext);
  const history = useNavigate();

  const fp = projects.filter(
    (project) => project.id.toLowerCase().replace(/\s/g, "") === id
  );

  const filteredProject = fp[0];

  return (
    <>
      <Page title={t(filteredProject.title)} />

      {/* ****************************************************** */}

      <div className="max-w-[80%] mx-auto mb-10 pt-[8rem] md:pt-[12rem] min-h-[70vh] capitalize overflow-hidden">
        <div className="flex flex-col md:flex-row space-y-3 justify-center items-between  md:space-x-3 md:justify-between md:items-center">
          <div>
            <p className="druk">{filteredProject.id}</p>
            <h1
              className="druk leading-tight pt-0"
              style={{
                // fontSize: "clamp(3.25em, 3vw, 4em)",
                fontSize: "clamp(2.5em, 6vw, 4em)",
                lineHeight: 1,
              }}
            >
              {filteredProject.title}
            </h1>
          </div>
          <Link to={filteredProject.src}>
            <Button text={t("visit")} path="" />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-y-10 mt-10">
          <div className="w-full">
            <p className="text-[0.8em] text-[#a0a0a1] uppercase">{t("role")}</p>
            <hr className="my-3 md:my-8 max-w-[80%] border-t-[0.1em]" />
            <p className="text-[0.9em] text-[#1c1d20]">
              {filteredProject.service}
            </p>
          </div>
          <div className="w-full">
            <p className="text-[0.8em] text-[#a0a0a1] uppercase">{t("loc")}</p>
            <hr className="my-3 md:my-8 max-w-[80%] border-t-[0.1em]" />
            <p className="text-[0.9em] text-[#1c1d20]">
              {filteredProject.location}
            </p>
          </div>
          <div className="w-full">
            <p className="text-[0.8em] text-[#a0a0a1] uppercase">
              {t("yeargen")}
            </p>
            <hr className="my-3 md:my-8 max-w-[80%] border-t-[0.1em]" />
            <p className="text-[0.9em] text-[#1c1d20]">
              {filteredProject.year}
            </p>
          </div>
        </div>
      </div>

      {/* ****************************************************** */}

      <img
        src={filteredProject.img1}
        className="md:w-[80vw] mx-auto h-auto md:rounded-xl"
      />

      {/* ****************************************************** */}

      <div className="mt-[4em] md:mt-[10em] space-y-6">
        <div className="flex space-x-6 md:space-x-10 max-w-[90%] mx-auto">
          <h1 className="antonia text-[20px] uppercase">
            {filteredProject["context"].title}
          </h1>
          <p className=" md:max-w-[50ch] capitalize antonia">
            {filteredProject["context"].detail}
          </p>
        </div>
        <img
          src={filteredProject.img2}
          className="max-w-[100%] md:max-w-[60vw] ml-auto h-auto mb-[10rem]"
        />
      </div>

      {/* ****************************************************** */}

      <div className="mt-[5em] md:mt-[10em] space-y-6 max-w-[95%] ml-auto">
        <div className="flex space-x-6 md:space-x-10 max-w-[90%] justify-end">
          <h1 className="antonia text-[20px] uppercase">
            {filteredProject["responsive"].title}
          </h1>
          <p className=" md:max-w-[50ch] capitalize antonia">
            {filteredProject["responsive"].detail}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row max-w-[80%] mx-auto space-x-20 space-y-5">
          <img
            src={filteredProject.img3}
            className="max-w-[60%] sm:max-w-[30%] h-auto  rotate-12"
          />
          <img
            src={filteredProject.img4}
            className="max-w-[60%] sm:max-w-[30%] h-auto "
          />
        </div>
      </div>

      {/* ****************************************************** */}

      <div className="max-w-[80%] mb-[2.5rem] md:mb-[5rem] mt-[3em] md:mt-[5em] mx-auto flex justify-end">
        {id < projects.length && (
          <Button
            text={t("next-project")}
            path={`/projects/0${parseInt(filteredProject.id) + 1}`}
          />
        )}
        {id >= projects.length && (
          <div className="">
            <Button
              text={t("prev-project")}
              path={`/projects/0${parseInt(filteredProject.id) - 1}`}
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Work;
