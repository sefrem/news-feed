import React from "react";

import styles from "./Modal.module.css";

type Props = {
  children: React.ReactElement;
  onClose: () => void;
};

const Modal: React.FC<Props> = ({ children, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <button className={styles.close} onClick={onClose}>
          <span className={styles.btnText}></span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
