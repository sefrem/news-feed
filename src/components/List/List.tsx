import React, { useContext, useEffect } from "react";

import Card from "../UI/Card";
import CardSkeleton from "../UI/CardSkeleton";
import Spinner from "../UI/Spinner";

import useOnScreen from "../../hooks/useOnScreen";
import { MessagesContext } from "../../context/messagesContext";

import styles from "./List.module.css";

const List: React.FC = () => {
  const { shouldFetchMore, fetchMore, data, isLoading } = useContext(MessagesContext);
  const { messages, filterValue, filteredMessages } = data;
  const [ref, isVisible] = useOnScreen();

  useEffect(() => {
    shouldFetchMore &&
    isVisible &&
    fetchMore?.();
  }, [isVisible]);

  if (isLoading && !messages.length) {
    return <Spinner />;
  }

  const isFilteredMessages = filterValue.length > 0 || filteredMessages.length;

  return (
    <ul className={styles.list}>
      {(isFilteredMessages
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
