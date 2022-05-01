import React from "react";

import { Message } from "../../types/types";

import styles from "./Card.module.css";
import { Link } from "react-router-dom";

type Props = {
  message: Message;
  forwardRef?: React.MutableRefObject<null> | null;
};

const Card: React.FC<Props> = ({ message, forwardRef }) => {
  const { author, date, text, author_id } = message;
  return (
    <li className={styles.card} ref={forwardRef}>
      <div className={styles.header}>
        <Link to={`/author/${author_id}`} className={styles.author}>
          <span>{author}</span>
        </Link>
        <div className={styles.date}>{new Date(date).toLocaleString("RU")}</div>
      </div>
      <div className={styles.text}>{text}</div>
    </li>
  );
};

export default React.memo(Card);
