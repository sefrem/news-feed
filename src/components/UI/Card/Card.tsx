import React from "react";
import { Link } from "react-router-dom";

import { Message } from "../../../types/types";

import styles from "./Card.module.css";
import CardDate from "../CardDate";

type Props = {
  message: Message;
  forwardRef?: React.MutableRefObject<null> | null;
  showAuthor?: boolean;
};

const Card: React.FC<Props> = ({ message, forwardRef, showAuthor = true }) => {
  const { author, date, text, author_id } = message;

  return (
    <li className={styles.card} ref={forwardRef}>
      <div className={styles.header}>
        {showAuthor && (
          <Link to={`/author/${author_id}`} className={styles.author}>
            <span>{author}</span>
          </Link>
        )}
        <CardDate date={date} />
      </div>
      <div className={styles.text}>{text}</div>
    </li>
  );
};

export default React.memo(Card);
