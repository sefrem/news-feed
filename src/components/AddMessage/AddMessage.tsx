import React, { useContext, useState } from "react";

import Button from "../UI/Button";

import { MessagesContext } from "../../context/messagesContext";
import { ModalContext } from "../../context/modalContext";

import styles from "./AddMessage.module.css";

const AddMessage: React.FC = () => {
  const [value, setValue] = useState("");
  const { sendMessage, isSending } = useContext(MessagesContext);
  const { closeModal } = useContext(ModalContext);

  const handleSendMessage = async () => {
    await sendMessage?.(value);
    closeModal?.();
  };

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
      <Button
        onClick={handleSendMessage}
        text="Send"
        className={styles.button}
        disabled={!value.length || isSending}
      />
    </div>
  );
};

export default AddMessage;
