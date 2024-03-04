import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ id, img, title, service, year, location }) => {
  const [isHovered, setIsHovered] = useState(false);
  const history = useNavigate();

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <>
      <div
        className="space-y-3 lg:hidden"
        onClick={() => history(`/projects/${id}`)}
      >
        <div
          className={`bg-[#00211B] min-h-[20rem] flex justify-center items-center`}
        >
          <img src={img} className="w-[80%] mx-auto h-auto" />
        </div>
        <h1 className="" style={{ fontSize: "clamp(1.75em, 2.3vw, 2.5em)" }}>
          {title}
        </h1>
        <hr />
        <div className="flex justify-between">
          <p className="text-[1em] ">{service}</p>
          <p className="text-[1em] ">{year}</p>
        </div>
      </div>

      <div
        className={`max-w-[90%] mx-auto hidden lg:block  
      
        ${isHovered ? "text-[#B0A47F]" : "text-[#00211B]"}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={() => history(`/projects/${id}`)}
      >
        <div className="flex justify-between max-w-[80%] mx-auto py-10  ">
          <h1
            className=" w-[25%]"
            style={{ fontSize: "clamp(1.75em, 2.3vw, 2.5em)" }}
          >
            {title}
          </h1>
          <p className="text-[1em] justify-center  items-center flex w-[25%]">
            {location}
          </p>
          <p className="text-[1em]  items-center justify-end flex w-[25%]">
            {service}
          </p>
          <p className="text-[1em]  justify-end items-center flex w-[25%]">
            {year}
          </p>
        </div>
        <hr className="" />
      </div>
    </>
  );
};

export default Card;
