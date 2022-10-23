import React from "react";

import styles from "./Dialog.module.css";

type Props = {
  children: React.ReactElement;
  closeDialog: () => void;
  dialogRef: React.RefObject<HTMLDialogElement>;
};

const Dialog: React.FC<Props> = ({ children, closeDialog, dialogRef }) => {
  return (
    <dialog className={styles.modal} ref={dialogRef}>
      <div className={styles.content}>
        <button
          className={styles.close}
          onClick={closeDialog}
          aria-label="Close Dialog"
        >
          <span className={styles.btnText}></span>
        </button>
        {children}
      </div>
    </dialog>
  );
};

export default Dialog;
