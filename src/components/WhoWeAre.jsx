import React from "react";
import { TranslationContext } from "../App";

const WhoWeAre = () => {
  const t = React.useContext(TranslationContext);
  return (
    <>
      {/* <div className="flex flex-col justify-end items-center min-h-[50vh] w-screen bg-[#EDEAE0] space-y-4"> */}
      <div className="flex flex-col justify-end items-center min-h-[50vh] w-screen bg-[#F3F1EB] space-y-4">
        <h2
          className="max-w-[90%] md:max-w-[50%] mx-auto text-center py-10 capitalize"
          style={{ fontSize: "clamp(1.5em, 3vw, 3em)" }}
        >
          {t("who")}
        </h2>
        <div className="flex flex-col justify-en items-center">
          <div className="w-px h-10 bg-black"></div>
          <p className="uppercase p-4">{t("sm")}</p>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
