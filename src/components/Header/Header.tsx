import React, { useContext } from "react";

import styles from "./Header.module.css";
import { Context } from "../../App";

const Header: React.FC = () => {
  const { setIsMessageModalOpen } = useContext(Context);

  return (
    <header className={styles.header}>
      <span className={styles.title}>Messages from your friends</span>
      <button
        onClick={() => setIsMessageModalOpen && setIsMessageModalOpen(true)}
      >
        Отправить сообщение
      </button>
    </header>
  );
};

export default Header;
