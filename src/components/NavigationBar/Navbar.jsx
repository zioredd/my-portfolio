import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import styles from "./logo.module.scss";
import { TranslationContext } from "../../App";
import menu_icon from "../../assets/images/lines.png";
import close from "../../assets/images/close.png";

function Navbar({ changeLang, location }) {
  const [open, setOpen] = useState(false);
  const history = useNavigate();
  const t = React.useContext(TranslationContext);
  const [activeLinks] = useState(Array(3).fill(false));
  const linkLabels = [
    { label: t("work-nav"), src: "/projects" },
    { label: t("about-nav"), src: "/about" },
    { label: t("contact-nav"), src: "/contact" },
  ];

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

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  const isOpen = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  //lets start animation
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.8,
      },
    },
  };

  return (
    <div className="fixed top-0 w-full flex z-[1000] bg-[#F3F1EB]">
      <header>
        <div className="flex  justify-between  w-full px-2 md:px-10 py-1">
          <div className=" justify-center items-center text-[16px] font-[100] hidden md:flex">
            <Link to="/">
              <div className={`${styles.logo} font-bold`}>
                <p className={styles.copyright}>©</p>
                <div className={styles.name}>
                  <p className={styles.codBy}>Code by</p>
                  <p className={styles.dennis}>Zior</p>
                  <p className={styles.snellenberg}>Ezedin</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex">
            {activeLinks.map((isActive, index) => (
              <div key={index} className="p-5 druk relative">
                <Link to={linkLabels[index].src}>
                  {linkLabels[index].label}
                </Link>
                {(location.pathname === linkLabels[index].src || isActive) && (
                  <div className="w-[8px] h-[8px] bg-[#B0A47F] rounded-full text-center absolute bottom-1/6 left-1/2 duration-300 ease-in-out transition"></div>
                )}
              </div>
            ))}
          </div>
          <div className="space-x-2 h-full flex items-center">
            <button onClick={changeLang("en")}>EN</button>
            <button onClick={changeLang("am")}>አማ</button>
          </div>
          <div
            className="menu w-[40px] h-[40px] bg-[#F3F1EB] rounded-full flex md:hidden overflow-hidden"
            onClick={isOpen}
          >
            <img src={menu_icon} className="w-[30px] h-auto" />
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="menu_container"
              variants={item}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit="exit"
            >
              <div className="absolute top-10 right-10" onClick={closeMenu}>
                <img src={close} className="w-[20px] h-auto" />
              </div>
              <div className="top-1/4 menu_container">
                <motion.a
                  className="antonia hover:text-[#A09A9A]"
                  style={{ fontSize: "clamp(2em, 4vw, 6em)" }}
                  onClick={() => {
                    history("./");
                    setOpen(false);
                  }}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 1,
                    },
                  }}
                >
                  Home
                </motion.a>
                <motion.a
                  className="antonia hover:text-[#A09A9A]"
                  style={{ fontSize: "clamp(2em, 4vw, 6em)" }}
                  onClick={() => {
                    history("./projects");
                    setOpen(false);
                  }}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 1,
                    },
                  }}
                >
                  Works
                </motion.a>
                <motion.a
                  className="antonia hover:text-[#A09A9A]"
                  style={{ fontSize: "clamp(2em, 4vw, 6em)" }}
                  onClick={() => {
                    history("./about");
                    setOpen(false);
                  }}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.8,
                    },
                  }}
                >
                  About
                </motion.a>
                <motion.a
                  className="antonia hover:text-[#A09A9A]"
                  style={{ fontSize: "clamp(2em, 4vw, 6em)" }}
                  onClick={() => {
                    history("./contact");
                    setOpen(false);
                  }}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.6,
                    },
                  }}
                >
                  Contact
                </motion.a>
              </div>

              <div className="flex space-x-[2em]  mx-auto md:justify-between absolute bottom-5">
                <div className="flex flex-col space-y-sm">
                  <p className="text-[0.8em] text-[#B0A47F]">
                    Contact Information
                  </p>
                  <p className="underline text-[1em]">zior.ered1@gmail.com</p>
                  <p className="underline text-[1em]">+251987370536</p>
                </div>
                <div className="flex flex-col space-y-sm">
                  <p className="text-[0.8em] text-[#B0A47F]">Socials</p>
                  <div className="flex flex-col md:flex-row gap-5">
                    <div>
                      <p className="underline text-[1em] ">Linkedin</p>
                      <p className="underline text-[1em] ">Instagram</p>
                    </div>
                    <div>
                      <p className="underline text-[1em] ">Facebook</p>
                      <p className="underline text-[1em] ">Github</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
