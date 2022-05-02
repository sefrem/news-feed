import React, { useEffect, useLayoutEffect, useRef } from "react";

import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const ref = useRef<HTMLInputElement>(null);
  const handleThemeSwitch = () => {
    const currentMode = document.documentElement.getAttribute(
      "data-user-color-scheme"
    );
    const newMode = currentMode === "light" ? "dark" : "light";
    localStorage.setItem("theme", newMode);
    document.documentElement.setAttribute("data-user-color-scheme", newMode);
  };

  useLayoutEffect(() => {
    if (ref?.current) {
      ref.current.checked = localStorage.getItem("theme") === "dark";
    }
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    document.documentElement.setAttribute(
      "data-user-color-scheme",
      savedTheme ? savedTheme : "light"
    );
  }, []);

  return (
    <div className={styles.switch}>
      <input
        type="checkbox"
        id="switch"
        className={styles.checkbox}
        onChange={handleThemeSwitch}
        ref={ref}
      />
      <label htmlFor="switch" className={styles.label}>
        <span className={styles.moon}>🌜</span>
        <span className={styles.sun}>🌞</span>
        <span className={styles.ball} />
      </label>
    </div>
  );
};

export default ThemeSwitcher;
