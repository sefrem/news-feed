import React, { useContext } from "react";

import Button from "../Button";
import ThemeSwitcher from "../ThemeSwitcher";

import { ModalContext } from "../../context/modalContext";

import styles from "./Header.module.css";

const Header: React.FC = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <header className={styles.header}>
      <div className={styles.main}>
        <span className={styles.title}>Messages from your friends</span>
        <Button onClick={openModal} text="Create" className={styles.create} />
      </div>

      <div className={styles.switch}>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
