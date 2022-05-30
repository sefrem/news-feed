import React from "react";

import styles from "./CardSkeleton.module.css";

const CardSkeleton: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.author} />
        <div className={styles.date} />
      </div>
      <div className={styles.text}>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export default CardSkeleton;
