import React from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { TranslationContext } from "../../../App";

export default function Buttton({ isActive, toggleMenu }) {
  const t = React.useContext(TranslationContext);
  return (
    <div className={styles.button}>
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className={styles.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label={t("menu")} />
        </div>
        <div
          className={styles.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label={t("close")} />
        </div>
      </motion.div>
    </div>
  );
}

export function PerspectiveText({ label }) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
