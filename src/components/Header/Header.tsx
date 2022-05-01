import React, { useContext } from "react";

import Button from "../Button";

import { ModalContext } from "../../context/modalContext";

import styles from "./Header.module.css";

const Header: React.FC = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <header className={styles.header}>
      <span className={styles.title}>Messages from your friends</span>
      <Button onClick={openModal} text="Create" className={styles.create} />
    </header>
  );
};

export default Header;
