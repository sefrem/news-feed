import React, { useEffect, useLayoutEffect, useState } from "react";
import clsx from "clsx";

import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const [isSwitched, setIsSwitched] = useState(Boolean);
  const handleThemeSwitch = () => {
    const currentMode = document.documentElement.getAttribute(
      "data-user-color-scheme"
    );
    const newMode = currentMode === "light" ? "dark" : "light";
    localStorage.setItem("theme", newMode);
    document.documentElement.setAttribute("data-user-color-scheme", newMode);
    setIsSwitched(localStorage.getItem("theme") === "dark");
  };

  useLayoutEffect(() => {
    setIsSwitched(localStorage.getItem("theme") === "dark");
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    document.documentElement.setAttribute(
      "data-user-color-scheme",
      savedTheme ? savedTheme : "light"
    );
  }, []);

  return (
    <button onClick={handleThemeSwitch} className={styles.button}>
      <span className={styles.label}>
        <span className={clsx(styles.moon, isSwitched && styles.moonSwitched)}>
          🌜
        </span>
        <span className={clsx(styles.sun, isSwitched && styles.sunSwitched)}>
          🌞
        </span>
        <span
          className={clsx(styles.ball, isSwitched && styles.ballSwitched)}
        />
      </span>
    </button>
  );
};

export default ThemeSwitcher;
