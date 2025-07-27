"use client";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import { ButtonContext } from "../ButtonContext";

const Page = ({ title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isActive, setIsActive } = React.useContext(ButtonContext);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  console.log(isActive);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <>
          <Preloader title={title} />
        </>
      )}
    </AnimatePresence>
  );
};

export default Page;
