import React, { useEffect, useState } from "react";
import arrow from "../assets/images/top-navigation.png";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <>
      <div
        className={`fixed bottom-10 right-10 md:bottom-20 md:right-20  transition-opacity ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={scrollToTop}
      >
        <img src={arrow} className="w-[30px] h-auto transform -rotate-90" />
      </div>
    </>
  );
};

export default ScrollToTop;
