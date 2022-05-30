import React, { useEffect } from "react";

import { useTimePassed } from "../../../hooks/useTimePassed";

import styles from "./CardDate.module.css";

type Props = {
  date: number;
};

const CardDate: React.FC<Props> = ({ date }) => {
  const { timePassed, clear } = useTimePassed(date);

  useEffect(() => {
    return () => {
      clear();
    };
  }, [clear]);

  return (
    <div className={styles.date}>
      {timePassed ? (
        <>{`${timePassed} ago`}</>
      ) : (
        <>{new Date(date).toLocaleString("RU")}</>
      )}
    </div>
  );
};

export default CardDate;
