import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import downright from "../assets/images/down-right.png";
import goldarrow from "../assets/images/gold-arrow.png";

const Button = ({ text, path }) => {
  const history = useNavigate();
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <>
      <button
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        onClick={() => history(path)}
        type="submit"
        value="Send"
        className={`uppercase h-[3.2em] w-[13em] text-[#00211B] px-1 antolia flex justify-center items-center  transition duration-300 hover:bg-[#00211B] hover:text-white hover:border-none border border-[#B0A47F] border-[2px] rounded-full mt-[5em] ${
          btnHovered && "transform scale-y-75"
        }`}
      >
        <span className="flex space-x-2">
          <p className=" text-[0.9em] flex items-center">{text}</p>
          {btnHovered ? (
            <img src={goldarrow} className="w-[30px] h-[30px] duration-300" />
          ) : (
            <img src={downright} className="w-[30px] h-[30px] duration-300" />
          )}
        </span>
      </button>
    </>
  );
};

export default Button;
