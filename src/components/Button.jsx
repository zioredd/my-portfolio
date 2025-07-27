import { useState } from "react";
import { useNavigate } from "react-router-dom";
import downright from "../assets/images/down-right.png";
import goldarrow from "../assets/images/gold-arrow.png";

const Button = ({ text, path }) => {
  const history = useNavigate();
  const [btnHovered, setBtnHovered] = useState(false);

  const [textColor, setTextColor] = useState("#00211B");

  if (path === "download-cv") {
    return (
      <a
        href="/cv.pdf"
        download
        onMouseEnter={() => {
          setBtnHovered(true);
          setTextColor("white");
        }}
        onMouseLeave={() => {
          setBtnHovered(false);
          setTextColor("#00211B");
        }}
        className={`uppercase h-[3.2em] w-[13em] text-[#00211B] px-1 antolia flex justify-center items-center  transition duration-300 hover:bg-[#00211B] hover:text-white hover:border-none border border-[#B0A47F] border-[2px] rounded-full ${
          btnHovered && "transform scale-y-75"
        }`}
        style={{ color: textColor, textDecoration: "none" }}
      >
        <span className="flex space-x-2">
          <p>{text}</p>
        </span>
      </a>
    );
  }

  return (
    <>
      <button
        onMouseEnter={() => {
          setBtnHovered(true);
          setTextColor("white");
        }}
        onMouseLeave={() => {
          setBtnHovered(false);
          setTextColor("#00211B");
        }}
        onClick={() => history(path)}
        type="submit"
        value="Send"
        className={`uppercase h-[3.2em] w-[13em] text-[#00211B] px-1 antolia flex justify-center items-center  transition duration-300 hover:bg-[#00211B] hover:text-white hover:border-none border border-[#B0A47F] border-[2px] rounded-full ${
          btnHovered && "transform scale-y-75"
        }`}
        style={{ color: textColor }}
      >
        <span className="flex space-x-2">
          <p
            className={`text-${textColor} text-[0.9em] font-bold flex items-center`}
          >
            {text}
          </p>
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
