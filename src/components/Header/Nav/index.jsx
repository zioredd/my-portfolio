import React from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { links } from "./data";
import { perspective, slideIn } from "./anim";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { TranslationContext } from "../../../App";

export default function index() {
  const t = React.useContext(TranslationContext);
  const footerLinks = [
    {
      title: t("link"),
      href: "/",
    },
    {
      title: t("fb"),
      href: "/",
    },
    {
      title: t("ig"),
      href: "/",
    },
    {
      title: t("git"),
      href: "/",
    },
  ];
  const NavItems = ({ title, href }) => {
    return (
      <div
        className={styles.linkContainer}
        onClick={() => {
          if (href !== "") {
            history(`/${href}`);
          } else history("/");
        }}
      >
        <motion.div
          className="antonia hover:text-[#A09A9A]"
          variants={perspective}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {title}
        </motion.div>
      </div>
    );
  };
  const history = useNavigate();
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {/* {links.map((link, i) => {
          const { title, navTo } = link;
          return (
            <div
              key={`b_${i}`}
              className={styles.linkContainer}
              onClick={() => (window.location.href = `/${navTo}`)}
            >
              <motion.div
                href={navTo}
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {title}
              </motion.div>
            </div>
          );
        })} */}
        <NavItems title={t("home-nav")} href="" />
        <NavItems title={t("about-nav")} href="about" />
        <NavItems title={t("work-nav")} href="projects" />
        <NavItems title={t("contact-nav")} href="contact" />
      </div>

      <div className="flex flex-col md:flex-row  justify-center md:justify-center space-y-6 md:space-y-0 md:space-x-10">
        <div className="flex flex-col">
          <motion.a
            className=" text-[0.8em] text-[#B0A47F]"
            variants={slideIn}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {t("contact-detail")}
          </motion.a>
          <motion.a
            variants={slideIn}
            initial="initial"
            animate="enter"
            exit="exit"
            className="underline text-white"
          >
            zior.ered1@gmail.com
          </motion.a>
          <motion.a
            variants={slideIn}
            initial="initial"
            animate="enter"
            exit="exit"
            className="underline text-white"
          >
            +251987370536
          </motion.a>
        </div>
        <div className="flex flex-col">
          <p className="text-[0.8em] text-[#B0A47F]">{t("socials")}</p>
          <motion.div className={`${styles.footer} `}>
            {footerLinks.map((link, i) => {
              const { title, navTo } = link;
              return (
                <>
                  <motion.a
                    variants={slideIn}
                    custom={i}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    key={`f_${i}`}
                  >
                    {title}
                  </motion.a>
                </>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
