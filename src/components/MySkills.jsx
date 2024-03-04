import React from "react";
import { useNavigate } from "react-router-dom";
import Overlay from "./Overlay";
import check from "../assets/images/check.png";
import { TranslationContext } from "../App";

const Skills = () => {
  const t = React.useContext(TranslationContext);
  const history = useNavigate();

  return (
    <>
      <section className="flex flex-col">
        <div className="bg-[#00211B] py-20">
          <div className="flex flex-col lg:flex-row  w-[80vw] mx-auto min-h-[70vh] items-center justify-between">
            <h3 className="text-[#B0A47F] text-[4em] avenir">{t("skills")}</h3>
            <div className="flex flex-col md:flex-row md:space-x-20">
              <div className="text-white text-[1em] relative">
                <div className="h-full w-px absolute left-[27%] bg-[#9A9372]" />
                <div className="w-full h-px bg-[#9A9372]" />
                <div className="flex">
                  <p className="p-6 capitalize">
                    <img src={check} className="w-[20px] h-[20px]" />
                  </p>
                  <p className="p-6 capitalize">{t("html")}</p>
                </div>
                <div className="w-full h-px bg-[#9A9372]" />

                <div className="flex">
                  <p className="p-6 capitalize">
                    <img src={check} className="w-[20px] h-[20px]" />
                  </p>
                  <p className="p-6 capitalize">{t("js")}</p>
                </div>
                <div className="w-full h-px bg-[#9A9372] mt-full" />
                <div className="flex">
                  <p className="p-6 capitalize">
                    <img src={check} className="w-[20px] h-[20px]" />
                  </p>
                  <p className="p-6 capitalize">{t("react")}</p>
                </div>
                <div className="w-full h-px bg-[#9A9372] mt-full" />
                <div className="flex">
                  <p className="p-6 capitalize">
                    <img src={check} className="w-[20px] h-[20px]" />
                  </p>
                  <p className="p-6 capitalize">{t("tailwind")}</p>
                </div>
                <div className="w-full h-px bg-[#9A9372]" />
                <div className="flex">
                  <p className="p-6 capitalize">
                    <img src={check} className="w-[20px] h-[20px]" />
                  </p>
                  <p className="p-6 capitalize">{t("figma")}</p>
                </div>
                <div className="w-full h-px bg-[#9A9372]" />
              </div>
              <div className="text-white text-[1em] relative">
                <div className="h-full w-px absolute left-[27%] bg-[#9A9372]" />
                <div className="w-full h-px bg-[#9A9372]" />

                <div className="flex">
                  <p className="p-6 capitalize">
                    <img src={check} className="w-[20px] h-[20px]" />
                  </p>
                  <p className="p-6 capitalize">{t("principle")}</p>
                </div>
                <div className="w-full h-px bg-[#9A9372]" />
                <div className="flex">
                  <p className="p-6 capitalize">
                    <img src={check} className="w-[20px] h-[20px]" />
                  </p>
                  <p className="p-6 capitalize">{t("webdes")}</p>
                </div>
                <div className="w-full h-px bg-[#9A9372]" />
                <div className="flex">
                  <p className="p-6 capitalize">
                    <img src={check} className="w-[20px] h-[20px]" />
                  </p>
                  <p className="p-6 capitalize">{t("wd")}</p>
                </div>
                <div className="w-full h-px bg-[#9A9372] mt-full" />
                <div className="flex">
                  <p className="p-6 capitalize">
                    <img src={check} className="w-[20px] h-[20px]" />
                  </p>
                  <p className="p-6 capitalize">{t("pm")}</p>
                </div>
                <div className="w-full h-px bg-[#9A9372] mt-full" />
                <div className="flex">
                  <p className="p-6 capitalize">
                    <img src={check} className="w-[20px] h-[20px]" />
                  </p>
                  <p className="p-6 capitalize">{t("cd")}</p>
                </div>
                <div className="w-full h-px bg-[#9A9372]" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#B0A47F] min-h-[30vh] md:min-h-0 md:h-[30vh]  w-full flex flex-col md:flex-row">
          <Overlay num="2+" text={t("years")} />
          <Overlay num="20+" text={t("developed")} />
          <Overlay num="15+" text={t("clients")} />
        </div>
      </section>
    </>
  );
};

export default Skills;
