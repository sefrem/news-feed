import React, { useContext } from "react";

import { MessagesContext } from "../../context/messagesContext";

import styles from "./Filter.module.css";

const Filter: React.FC = () => {
  const {
    data: { filterValue },
    setFilterValue,
  } = useContext(MessagesContext);

  return (
    <div className={styles.filter}>
      <label htmlFor="filter">Filter messages: </label>
      <input
        id="filter"
        type="text"
        className={styles.input}
        value={filterValue}
        onChange={(e) => setFilterValue?.(e.target.value)}
      />
    </div>
  );
};

export default Filter;
