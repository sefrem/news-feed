import React from "react";

import Button from "../UI/Button";
import ThemeSwitcher from "../UI/ThemeSwitcher";

import styles from "./Header.module.css";

type Props = {
  openDialog: () => void;
};

const Header: React.FC<Props> = ({ openDialog }) => {
  return (
    <header className={styles.header}>
      <div className={styles.main}>
        <span className={styles.title}>Messages from your friends</span>
        <Button onClick={openDialog} text="Create" className={styles.create} />
      </div>

      <div className={styles.switch}>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
