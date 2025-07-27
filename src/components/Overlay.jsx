import React, { useState } from "react";
import { motion } from "framer-motion";

const Overlay = ({ num, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex-grow flex-shrink flex-basis-0 min-w-0 flex flex-col justify-center items-center druk min-h-[30vh] md:min-h-0 md:h-[30vh] bg-[#B0A47F] shadow-md cursor-pointer select-none overflow-hidden"
      whileHover={{
        rotateY: 18,
        scaleY: 1.13,
        originY: 1, // anchor at the bottom so only the top expands
        boxShadow: "0 12px 32px 0 rgba(50,50,50,0.18), 0 2px 12px 0 #b0a47f40",
        zIndex: 2,
        borderRadius: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
      style={{ perspective: 700, zIndex: 1 }}
    >
      <span className="text-[2.5em] md:text-[3.5em] font-bold text-[#00211B] helvetica-neue drop-shadow-sm">{num}</span>
      <span className="text-xs md:text-sm text-[#5c5c5c] font-medium mt-2 uppercase tracking-wide letter-spacing-1">{text}</span>
    </motion.div>
  );
};

export default Overlay;
