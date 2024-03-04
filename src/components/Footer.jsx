import React from "react";
import { useNavigate } from "react-router-dom";
import { TranslationContext } from "../App";

const Footer = () => {
  const t = React.useContext(TranslationContext);
  const history = useNavigate();
  return (
    <>
      <div className=" h-[100vh] w-[100vw] bg-[#EDEAE0] overflow-x-hidden overflow-y-hidden">
        <div className="bg-[#00211B] min-h-[80%] w-full flex flex-col xs:flex-row items-center justify-center text-[#B0A47F]">
          <div className="w-[90%] sm:w-[85vw] md:w-[80vw] flex flex-col xs:flex-row py-10 xs:py-0 justify-between space-y-10 xs:space-y-0">
            <div>
              <p className="uppercase antonia font-bold">{t("hello")}</p>
              <div className="mt-[5em] font-bold">
                <p className="uppercase max-w-[12ch]" antonia>
                  {t("addis")}
                </p>
                <p className=" antonia">+(251)987-370-036</p>
                <p className=" antonia underline">
                  <a href="mailto:zior.ered1@gmail.com">zior.ered1@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="space-y-10">
              <h1
                className="font-[300] antonia tracking-tighter uppercase  text-end"
                style={{
                  lineHeight: "1",
                  fontSize: "clamp(2.2rem, 4vw, 10rem)",
                }}
              >
                {t("sth")} <br /> {t("mind")}
              </h1>
              <div className="flex flex-col items-end md:flex md:justify-end md:space-x-5">
                <p className="underline capitalize">
                  <a href="https://www.linkedin.com/in/zior-ezedin-b283b7234/">
                    {t("link")}
                  </a>
                </p>
                <p className="underline capitalize">
                  <a href="https://www.instagram.com/zior.ju/">{t("ig")}</a>
                </p>
                <p className="underline capitalize">
                  <a href="">{t("fb")}</a>
                </p>
                <p className="underline capitalize">
                  <a href="https://github.com/zioredd">{t("git")}</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5 py-10 ">
          <div className="flex max-w-[90%] mx-auto flex-col-reverse sm:flex-row-reverse sm:justify-center items-center gap-x-6 mt-[1em]">
            <p className="text-[#5c5c5c]">{t("version")}</p>
            <div className="w-px h-3 bg-[#5c5c5c] hidden sm:flex"></div>
            <p className="text-[#5c5c5c]">{t("codeby")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
