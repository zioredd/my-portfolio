"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "../common/Magnetic";
import Nav from "../Header/Nav";
import Input from "../Header/index";
import { Link, useNavigate } from "react-router-dom";
import { TranslationContext } from "../../App";

export default function Zior({ changeLang }) {
  const t = React.useContext(TranslationContext);
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);
  const history = useNavigate();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false)
          );
        },
      },
    });
  }, []);

  return (
    <>
      <div ref={header} className={`${styles.header} text-black`}>
        <Link to="/">
          <div className={`${styles.logo} font-bold`}>
            <p className={styles.copyright}>©</p>
            <div className={styles.name}>
              <p className={styles.codeBy}>Code by</p>
              <p className={styles.dennis}>Zior</p>
              <p className={styles.snellenberg}>Ezedin</p>
            </div>
          </div>
        </Link>

        {/* <h1
          onClick={() => history("/")}
          className="creattion text-[4em]"
          style={{ lineHeight: "1" }}
        >
          zior ezedin
        </h1> */}

        {/* <Link to="/">
          <div className={`${styles.logo} items-center`}>
            <p className={styles.copyright}>©</p>
            <div className={`${styles.name} creattion text-[3em]`}>
              <p className={styles.codeBy}>code by</p>
              <p className={styles.dennis}>zior</p>
              <p className={styles.snellenberg}>ezedin</p>
            </div>
          </div>
        </Link> */}

        <div
          className={`${styles.nav} font-[700] text-[#00211B] hidden sm:flex items-center`}
        >
          <Magnetic>
            <div className={styles.el}>
              <Link to="/projects">{t("work-nav")}</Link>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <Link to="/about">{t("about-nav")}</Link>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <Link to="/contact">{t("contact-nav")}</Link>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
        </div>
        <div className="space-x-2">
          <button onClick={changeLang("en")}>EN</button>
          <button onClick={changeLang("am")}>አማ</button>
        </div>
      </div>

      <div ref={button} className={styles.headerButtonContainer}>
        <Input />
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
