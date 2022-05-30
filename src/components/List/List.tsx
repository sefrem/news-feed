import React, { useContext, useEffect } from "react";

import Card from "../UI/Card";
import CardSkeleton from "../UI/CardSkeleton";
import Spinner from "../UI/Spinner";

import useOnScreen from "../../hooks/useOnScreen";
import { MessagesContext } from "../../context/messagesContext";

import styles from "./List.module.css";

const List: React.FC = () => {
  const { fetchMore, data, isLoading } = useContext(MessagesContext);
  const { messages, filterValue, filteredMessages, total } = data;
  const [ref, isVisible] = useOnScreen();

  useEffect(() => {
    !filterValue.length &&
      isVisible &&
      messages.length < total &&
      fetchMore?.(messages[messages.length - 1].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  if (isLoading && !messages.length) {
    return <Spinner />;
  }

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
      {isLoading && <CardSkeleton />}
    </ul>
  );
};

export default List;
