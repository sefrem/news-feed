import React, { useContext } from "react";

import Modal from "./components/UI/Modal/Modal";
import AddMessage from "./components/AddMessage";
import Router from "./Router";

import Header from "./components/Header";
import { ModalContext } from "./context/modalContext";

import styles from "./App.module.css";

function App() {
  const { isMessageModalOpen, closeModal } = useContext(ModalContext);

  return (
    <main>
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
