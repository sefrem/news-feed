import React, { useContext, useEffect } from "react";

import Card from "../Card";
import CardSkeleton from "../CardSkeleton";
import Spinner from "../Spinner";

import useOnScreen from "../../hooks/useOnScreen";
import { MessagesContext } from "../../context/messagesContext";

import styles from "./List.module.css";

type Props = {
  filterValue: string;
};

const List: React.FC<Props> = ({ filterValue }) => {
  const { fetchMore, data, isLoading } = useContext(MessagesContext);
  const { messages, filteredMessages, total } = data;
  const [ref, isVisible] = useOnScreen();

  useEffect(() => {
    !filterValue.length &&
      isVisible &&
      messages.length < total &&
      fetchMore &&
      fetchMore(messages[messages.length - 1].id);
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
