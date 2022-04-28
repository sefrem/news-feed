import React from "react";

import { State } from "../../models/messages";

import styles from "./Filter.module.css";

type Props = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setData: React.Dispatch<React.SetStateAction<State>>;
};

const Filter: React.FC<Props> = ({ inputValue, setData, setInputValue }) => {
  const filterMessages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputValue(value);
    setData((prev) => ({
      ...prev,
      filteredMessages: value
        ? prev.messages.filter(({ text }) => text.includes(value))
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
        value={inputValue}
        onChange={filterMessages}
      />
    </div>
  );
};

export default Filter;
