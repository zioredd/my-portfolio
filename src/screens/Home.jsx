"use client";
import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import Page from "../components/Page";
import { TranslationContext } from "../App";
import Skills from "../components/MySkills";
import WhoWeAre from "../components/WhoWeAre";

const Home = () => {
  const t = React.useContext(TranslationContext);

  return (
    <>
      <TranslationContext.Provider value={t}>
        <div className="bg-[#F3F1EB]">
          <Page title={t("home-nav")} />
          <Hero />
          {/* <WhoWeAre /> */}
          <Skills />
          <Clients />
          <Projects />
          <Footer />
        </div>
      </TranslationContext.Provider>
    </>
  );
};

export default Home;
