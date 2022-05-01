import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

import Modal from "./components/Modal/Modal";
import AddMessage from "./components/AddMessage";
import Router from "./Router";

import Header from "./components/Header";
import { ModalContext } from "./context/modalContext";

import styles from "./App.module.css";

function App() {
  const { isMessageModalOpen, closeModal } = useContext(ModalContext);
  const { pathname } = useLocation();

  return (
    <main
      className={clsx(pathname === "/" ? styles.primaryBg : styles.secondaryBg)}
    >
      <Header />

      <div className={styles.main}>
        <Router />
        {isMessageModalOpen && (
          <Modal onClose={closeModal}>
            <AddMessage />
          </Modal>
        )}
      </div>
    </main>
  );
}

export default App;
