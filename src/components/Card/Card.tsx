import React from "react";

import { Message } from "../../models/messages";

import styles from "./Card.module.css";

type Props = {
  message: Message;
  forwardRef?: React.MutableRefObject<null> | null;
};

const Card: React.FC<Props> = ({ message, forwardRef }) => {
  const { author, date, text } = message;
  return (
    <li className={styles.card} ref={forwardRef}>
      <div className={styles.header}>
        <div className={styles.author}>{author}</div>
        <div className={styles.date}>
          {new Date(date * 1000).toLocaleString("RU")}
        </div>
      </div>
      <div className={styles.text}>{text}</div>
    </li>
  );
};

export default React.memo(Card);
