import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Message } from "../../types/types";
import { useTimePassed } from "../../hooks/useTimePassed";

import styles from "./Card.module.css";

type Props = {
  message: Message;
  forwardRef?: React.MutableRefObject<null> | null;
  showAuthor?: boolean;
};

const Card: React.FC<Props> = ({ message, forwardRef, showAuthor = true }) => {
  const { author, date, text, author_id } = message;
  const { timePassed, clear } = useTimePassed(date);

  useEffect(() => {
    return () => {
      clear();
    };
  }, [clear]);

  return (
    <li className={styles.card} ref={forwardRef}>
      <div className={styles.header}>
        {showAuthor && (
          <Link to={`/author/${author_id}`} className={styles.author}>
            <span>{author}</span>
          </Link>
        )}
        {timePassed ? (
          <div>{`${timePassed}s ago`}</div>
        ) : (
          <div className={styles.date}>
            {new Date(date).toLocaleString("RU")}
          </div>
        )}
      </div>
      <div className={styles.text}>{text}</div>
    </li>
  );
};

export default React.memo(Card);
