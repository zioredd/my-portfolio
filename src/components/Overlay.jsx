import React, { useState } from "react";

const Overlay = ({ num, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {isHovered ? (
        <div
          className={`flex-grow flex justify-center transition duration-300 ease-in-out items-center druk bg-[#324744] min-h-[35vh] `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="text-center">
            <h1 className="text-[5em] text-[#B0A47F] font-[600]">{num}</h1>
            <p
              className="text-white capitalize"
              style={{ fontSize: "clamp(16px, 1.2vw, 40px)" }}
            >
              {text}
            </p>
          </div>
        </div>
      ) : (
        <div
          className={`flex-grow flex justify-center items-center text-[#00211B] druk border border-[#9A9372] border-[1.5px]`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="text-center">
            <h1 className="text-[5em] font-[600]">{num}</h1>
            <p style={{ fontSize: "clamp(16px, 1.2vw, 40px)" }}>{text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Overlay;
