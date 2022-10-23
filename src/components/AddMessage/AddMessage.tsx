import React, { useContext, useState } from "react";
import clsx from "clsx";

import Button from "../UI/Button";

import { MessagesContext } from "../../context/messagesContext";
import { useValidation } from "../../hooks/useValidation";

import styles from "./AddMessage.module.css";

type Props = {
  closeDialog: () => void
  textareaRef: React.RefObject<HTMLTextAreaElement>
}

const AddMessage: React.FC<Props> = ({ closeDialog, textareaRef }) => {
  const [value, setValue] = useState("");
  const { sendMessage, isSending } = useContext(MessagesContext);
  const { error, validate } = useValidation();

  const handleSendMessage = async () => {
    const isValid = validate(value);
    if (!isValid) {
      return;
    }
    await sendMessage?.(value);
    closeDialog();
    setValue("");
  };

  return (
    <form className={styles.data} onSubmit={e => {
      e.preventDefault();
      handleSendMessage();
    }}>
      <label htmlFor="message">
        <h4 className={styles.header}>Add you message</h4>
      </label>

      <textarea
        id="message"
        name="message"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          validate(e.target.value);
        }}
        cols={45}
        rows={5}
        className={clsx(styles.message, error && styles.messageError)}
        ref={textareaRef}
      />
      <div className={styles.textInfo}>
        <span className={styles.error}>{error}</span>
        <span className={styles.counter}>{value.length} / 200</span>
      </div>
      <Button
        type="submit"
        text="Send"
        className={styles.button}
        disabled={isSending}
      />
    </form>
  );
};

export default AddMessage;
