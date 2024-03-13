import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TranslationContext } from "../App";

const Card = ({ id, title, image }) => {
  const t = React.useContext(TranslationContext);
  const history = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className="capitalize"
        onClick={() => history(`/projects/${id}`)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="h-3/4 overflow-hidden">
          <img
            src={image}
            className="w-full h-full transition-transform duration-700 transform-gpu hover:scale-110 hover:opacity-[90%]"
          />
        </div>
        <div className="py-6 text-center bg-[#00211B] flex flex-col justify-center items-center">
          <h1
            className="text-[#B0A47F]"
            style={{ fontSize: "clamp(1.75em, 2.3vw, 2.5em)" }}
          >
            {title}
          </h1>
          <p className={`text-[#EDEAE0] ${isHovered && "text-[#C09A6A]"}`}>
            {t("more-info")}
          </p>
        </div>
      </div>
    </>
  );
};

const Videoo = ({ id, title, video }) => {
  const t = React.useContext(TranslationContext);
  const history = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className=""
      onClick={() =>
        history(`/projects/${id.toLowerCase().replace(/\s/g, "")}`)
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className=" overflow-hidden">
        <video
          src={video}
          muted
          autoPlay
          loop
          className="w-full h-full transition-transform duration-700 transform-gpu hover:scale-110 hover:opacity-[90%]"
        ></video>
      </div>
      <div className="py-6 bg-[#00211B] flex flex-col justify-center items-center">
        <h1
          className="text-[#B0A47F]"
          style={{ fontSize: "clamp(1.75em, 2.3vw, 2.5em)" }}
        >
          {title}
        </h1>
        <p className={`text-[#EDEAE0] ${isHovered && "text-[#C09A6A]"}`}>
          {t("more-info")}
        </p>
      </div>
    </div>
  );
};

export default Card;
export { Videoo };
