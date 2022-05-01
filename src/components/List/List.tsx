import React, { useContext, useEffect } from "react";

import Card from "../Card";

import useOnScreen from "../../hooks/useOnScreen";
import { MessagesContext } from "../../context/messagesContext";

import styles from "./List.module.css";

type Props = {
  filterValue: string;
};

const List: React.FC<Props> = ({ filterValue }) => {
  const { fetchMore, data } = useContext(MessagesContext);
  const { messages, filteredMessages, total } = data;
  const [ref, isVisible] = useOnScreen();

  useEffect(() => {
    !filterValue.length &&
      isVisible &&
      messages.length < total &&
      fetchMore &&
      fetchMore(messages[messages.length - 1].id).catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <ul className={styles.list}>
      {(filterValue.length > 0 || filteredMessages.length
        ? filteredMessages
        : messages
      ).map((message, index, array) => (
        <Card
          key={message.id}
          message={message}
          forwardRef={index === array.length - 2 ? ref : null}
        />
      ))}
    </ul>
  );
};

export default List;
