import React from "react";

import Dialog from "./components/UI/Dialog/Dialog";
import AddMessage from "./components/AddMessage";
import Router from "./Router";
import Header from "./components/Header";

import useDialog from "./hooks/useDialog";

import styles from "./App.module.css";

function App() {
  const [dialogRef, openDialog, closeDialog, textareaRef] = useDialog();

  return (
    <main>
      <Header openDialog={openDialog} />

      <div className={styles.main}>
        <Router />
        <Dialog closeDialog={closeDialog} dialogRef={dialogRef}>
          <AddMessage closeDialog={closeDialog} textareaRef={textareaRef} />
        </Dialog>
      </div>
    </main>
  );
}

export default App;
