import React from "react";
import constantinLogo from "../assets/brandLogos/ConstantinLogo.svg";
import mellaHome from "../assets/mella/mellaHome.png";
import mellaTwo from "../assets/mella/mella2.jpeg";
import mellaMobile1 from "../assets/mella/mobile.jpeg";
import mellaContact from "../assets/mella/mellaContact.jpeg";
import constantineMac from "../assets/constantine/constantine1.jpeg";
import constantineHome from "../assets/constantine/constantineHome.png";
import constantineIphone1 from "../assets/constantine/constantineIphone1.jpeg";
import constantineIphone2 from "../assets/constantine/constantineIphone2.jpeg";
import tanyaDesk from "../assets/tanya/tanyaDesk.jpeg";
import tanyaHome from "../assets/tanya/tanyaHome.png";
import tanyaIphone1 from "../assets/tanya/tanyaIphone1.jpeg";
import tanyaIphone2 from "../assets/tanya/tanyaIphone2.jpeg";
import graceHome from "../assets/grace/graceHome.png";
import graceDesk from "../assets/grace/graceDesk.jpeg";
import graceIphone1 from "../assets/grace/graceIphone1.jpeg";
import graceIphone2 from "../assets/grace/graceIphone2.jpeg";
import ytHome from "../assets/yt/ytHome.png";
import ytDesk from "../assets/yt/ytDesk.jpeg";
import ytIphone1 from "../assets/yt/ytIphone1.jpeg";
import ytIphone2 from "../assets/yt/ytIphone2.jpeg";
import { TranslationContext } from "../App";
import Work from "./Work";
import { useParams } from "react-router-dom";

export const clients = [
  {
    id: "client-1",
    logo: constantinLogo,
  },
];

export const useTranslation = () => {
  return React.useContext(TranslationContext);
};

const ProjectDataForIndividualWork = () => {
  const t = useTranslation();
  const { id } = useParams();

  const projects = [
    {
      id: "01",
      title: t("mella"),
      service: t("both"),
      year: t("mella-yr"),
      location: t("mella-loc"),
      img1: mellaHome,
      img2: mellaTwo,
      img3: mellaMobile1,
      img4: mellaContact,
      context: {
        title: t("context"),
        detail: t("melladtl"),
      },

      responsive: {
        title: t("responsive"),
        detail: t("res"),
      },
    },
    {
      id: "02",

      title: t("grace"),
      service: t("both"),
      year: t("grace-yr"),
      location: t("grace-loc"),
      img1: graceHome,
      img2: graceDesk,
      img3: graceIphone1,
      img4: graceIphone2,
      context: {
        title: t("context"),
        detail: t("gracedtl"),
      },

      responsive: {
        title: t("responsive"),
        detail: t("res"),
      },
    },
    {
      id: "03",
      title: t("knudsen"),
      service: t("both"),
      year: t("tanya-yr"),
      location: t("tanya-loc"),
      img1: tanyaHome,
      img2: tanyaDesk,
      img3: tanyaIphone1,
      img4: tanyaIphone2,
      context: {
        title: t("context"),
        detail: t("tanyadtl"),
      },

      responsive: {
        title: t("responsive"),
        detail: t("res"),
      },
    },
    {
      id: "04",
      title: t("constantin"),
      service: t("dev"),
      year: t("constantin-yr"),
      location: t("constantin-loc"),
      img1: constantineHome,
      img2: constantineMac,
      img3: constantineIphone1,
      img4: constantineIphone2,
      context: {
        title: t("context"),
        detail: t("constantindtl"),
      },

      responsive: {
        title: t("responsive"),
        detail: t("res"),
      },
    },
    {
      id: "05",
      title: t("yt"),
      service: t("dev"),
      year: "2022",
      location: "Kenya",
      img1: ytHome,
      img2: ytDesk,
      img3: ytIphone2,
      img4: ytIphone1,
      context: {
        title: t("context"),
        detail: t("ytdtl"),
      },

      responsive: {
        title: t("responsive"),
        detail: t("res"),
      },
    },
  ];

  return (
    <>
      <Work projects={projects} id={id} />
    </>
  );
};

export default ProjectDataForIndividualWork;
