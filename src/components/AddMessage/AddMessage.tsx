import React, { useState } from "react";

import styles from "./AddMessage.module.css";

const AddMessage: React.FC = (props) => {
  console.log("props", props);
  const [value, setValue] = useState("");

  return (
    <div className={styles.data}>
      <h4 className={styles.header}>Add you message</h4>
      <textarea
        value={value}
        onChange={(e) => {
          if (e.target.value.length <= 200) {
            setValue(e.target.value);
          }
        }}
        cols={45}
        rows={5}
        className={styles.message}
      />
      <span className={styles.counter}>{value.length} / 200</span>
      <button className={styles.send}>Send</button>
    </div>
  );
};

export default AddMessage;
