import React from "react";

import Router from "./Router";

import styles from "./App.module.css";

function App() {
  return (
    <main>
      <header className={styles.header}>
        <span className={styles.heading}>Messages from your friends</span>
      </header>

      <div className={styles.main}>
        <Router />
      </div>
    </main>
  );
}

export default App;
