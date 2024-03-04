import React from "react";
import Footer from "../components/Footer";
import "../App.css";
import Page from "../components/Page";
import { TranslationContext } from "../App";

const About = () => {
  const t = React.useContext(TranslationContext);
  return (
    <>
      <Page title={t("about")} />
      <div className="absolute top-20 text-[#1f2622] pt-[3em] md:pt-[5em]">
        <div className="mb-[7em] md:mb-[10em]">
          <div className="max-w-[66.5%] mx-auto ">
            <h1
              className="antonia font-[700] leading-tight text-center xs:text-left "
              style={{ fontSize: "clamp(2.7em, 6vw, 7em)" }}
            >
              {t("about")}
            </h1>
          </div>
          <div className="max-w-[80%] md:max-w-[60%] lg:max-w-[50%] mx-auto  space-y-[2em]">
            <p
              className="max-w-[95%] md:max-w-[80%] leading-tight text-center xs:text-left"
              style={{
                fontSize: "clamp(16px, 1.2vw, 25px)",
                lineHeight: "1.5",
              }}
            >
              {t("aboutp")}
            </p>
            <h2
              className="font-[400] antonia leading-tight  text-center xs:text-left"
              style={{ fontSize: "clamp(1.8em, 4vw, 3em)" }}
            >
              {t("help")}
            </h2>
            <div className="space-y-[4em]">
              <div className="flex flex-col  w-full">
                <p className="text-[#B4B4B8]">01</p>
                <h1
                  style={{
                    fontSize: "clamp(1.55em, 2.3vh, 2.5em)",
                  }}
                >
                  {t("design")}
                </h1>
                {/* <div className="w-full h-[1.5px] bg-[#C7C8CC] my-3"></div> */}
                <div className="w-full h-[0.5px] my-3 bg-gray-300"></div>

                <p className="text-[1em]">{t("designp")}</p>
              </div>
              <div className="flex flex-col space-y-1 w-full">
                <p className="text-[#B4B4B8]">02</p>
                <h1 style={{ fontSize: "clamp(1.55em, 2.3vh, 2.5em)" }}>
                  {t("dev")}
                </h1>
                {/* <div className="w-full h-[1.5px] bg-[#C7C8CC] my-3"></div> */}
                <div className="w-full h-[0.5px] my-3 bg-gray-300"></div>

                <p className="text-[1em]">{t("devp")}</p>
              </div>
              <div className="flex flex-col space-y-1 w-full">
                <p className="text-[#B4B4B8]">03</p>
                <h1 style={{ fontSize: "clamp(1.55em, 2.3vh, 2.5em)" }}>
                  {t("full")}
                </h1>
                {/* <div className="w-full h-[1.5px] bg-[#C7C8CC] my-3"></div> */}
                <div className="w-full h-[0.5px] my-3 bg-gray-300"></div>

                <p className="text-[1em]">{t("fullp")}</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
