import React, { useContext } from "react";

import { MessagesContext } from "../../context/messagesContext";

import styles from "./Filter.module.css";

type Props = {
  filterValue: string;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
};

const Filter: React.FC<Props> = ({ filterValue, setFilterValue }) => {
  const { setData } = useContext(MessagesContext);
  const filterMessages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilterValue(value);
    setData &&
      setData((prev) => ({
        ...prev,
        filteredMessages: value
          ? prev.messages.filter(({ text }) =>
              text.toLowerCase().includes(value.toLowerCase())
            )
          : [],
      }));
  };

  return (
    <div className={styles.filter}>
      <label htmlFor="filter">Filter messages: </label>
      <input
        id="filter"
        type="text"
        className={styles.input}
        value={filterValue}
        onChange={filterMessages}
      />
    </div>
  );
};

export default Filter;
