import React, { useContext } from "react";

import styles from "./Modal.module.css";
import { Context } from "../../App";

type Props = {
  children: React.ReactElement;
};

const Modal: React.FC<Props> = ({ children }) => {
  const { setIsMessageModalOpen } = useContext(Context);
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <button
          className={styles.close}
          onClick={() => setIsMessageModalOpen && setIsMessageModalOpen(false)}
        >
          <span className={styles.btnText}></span>
        </button>
        {React.cloneElement(children, { data: 34 })}
      </div>
    </div>
  );
};

export default Modal;
