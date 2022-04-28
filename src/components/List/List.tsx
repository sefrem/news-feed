import React, { useEffect } from "react";

import Card from "../Card";

import { Messages, State } from "../../models/messages";
import useOnScreen from "../../hooks/useOnScreen";
import { api } from "../../api/api";
import { API_URL } from "../../consts";

import styles from "./List.module.css";

type Props = {
  data: State;
  setData: React.Dispatch<React.SetStateAction<State>>;
  inputValue: string;
};

const List: React.FC<Props> = ({ data, setData, inputValue }) => {
  const { messages, filteredMessages, total } = data;
  const [ref, isVisible] = useOnScreen();

  useEffect(() => {
    const fetchMore = async (after: string) => {
      const { messages } = await api<Messages>(
        `${API_URL}/get_news?limit=10&after=${after}`
      );
      setData((prev) => ({
        ...prev,
        messages: [...prev.messages, ...messages],
      }));
    };
    !inputValue.length &&
      isVisible &&
      messages.length < total &&
      fetchMore(messages[messages.length - 1].id).catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <ul className={styles.list}>
      {(inputValue.length > 0 || filteredMessages.length
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
