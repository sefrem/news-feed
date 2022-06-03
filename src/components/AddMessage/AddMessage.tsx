import React, { useContext, useState } from "react";
import clsx from "clsx";

import Button from "../UI/Button";

import { MessagesContext } from "../../context/messagesContext";
import { ModalContext } from "../../context/modalContext";
import { useValidation } from "../../hooks/useValidation";

import styles from "./AddMessage.module.css";

const AddMessage: React.FC = () => {
  const [value, setValue] = useState("");
  const { sendMessage, isSending } = useContext(MessagesContext);
  const { closeModal } = useContext(ModalContext);
  const { error, validate } = useValidation();

  const handleSendMessage = async () => {
    const isValid = validate(value);
    if (!isValid) {
      return;
    }
    await sendMessage?.(value);
    closeModal?.();
  };

  return (
    <div className={styles.data}>
      <h4 className={styles.header}>Add you message</h4>
      <textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          validate(e.target.value);
        }}
        cols={45}
        rows={5}
        className={clsx(styles.message, error && styles.messageError)}
      />
      <div className={styles.textInfo}>
        <span className={styles.error}>{error}</span>
        <span className={styles.counter}>{value.length} / 200</span>
      </div>
      <Button
        onClick={handleSendMessage}
        text="Send"
        className={styles.button}
        disabled={isSending}
      />
    </div>
  );
};

export default AddMessage;
