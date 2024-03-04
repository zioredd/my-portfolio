"use client";
import "./fonts.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import React, { useEffect } from "react";
import Contact from "./screens/Contact";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import tEn from "./locales/en/transaltion.json";
import tAm from "./locales/am/transaltion.json";
import Zior from "./components/DennisHeader";
import ProjectsData from "./components/ProjectsData";
import ProjectDataForIndividualWork from "./components/ProjectDataForIndividualWork";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: tEn,
    },
    am: {
      translation: tAm,
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

const changeLang = (l) => {
  return () => {
    i18n.changeLanguage(l);

    localStorage.setItem("lang", l);
  };
};

export const TranslationContext = React.createContext();

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    let currentLang = localStorage.getItem("lang");
    i18n.changeLanguage(currentLang);
  }, []);

  return (
    <>
      <Layout>
        <TranslationContext.Provider value={t}>
          <Zior changeLang={changeLang} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsData />} />
            <Route
              path="/projects/:id"
              element={<ProjectDataForIndividualWork />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </TranslationContext.Provider>
      </Layout>
      <ScrollToTop />
    </>
  );
}

export default App;
