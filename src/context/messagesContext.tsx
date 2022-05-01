import React, { createContext, useCallback, useState } from "react";
import { State } from "../types/types";
import { messageApi, newsApi } from "../api/api";

const initState = {
  total: 0,
  messages: [],
  filteredMessages: [],
};

export const MessagesContext = createContext<{
  data: State;
  setData?: React.Dispatch<React.SetStateAction<State>>;
  fetchMessages?: () => Promise<void>;
  fetchMore?: (after: string) => Promise<void>;
  sendMessage?: (value: string) => Promise<void>;
}>({ data: initState });

export const MessagesContextProvider: React.FC<{ children: React.ReactNode }> =
  ({ children }) => {
    const [data, setData] = useState<State>(initState);

    const fetchMessages = useCallback(async () => {
      const { messages, total } = await newsApi({
        addUrl: `/?limit=10`,
      });
      setData((prev) => ({
        ...prev,
        messages,
        total,
      }));
    }, []);

    const fetchMore = useCallback(async (after: string) => {
      const { messages } = await newsApi({
        addUrl: `/?limit=10&after=${after}`,
      });
      setData((prev) => ({
        ...prev,
        messages: [...prev.messages, ...messages],
      }));
    }, []);

    const sendMessage = useCallback(async (value: string) => {
      const newMessage = await messageApi({
        method: "POST",
        payload: {
          text: value,
          author: "Walker Patterson",
          timestamp: new Date().getTime(),
        },
      });
      console.log("new", newMessage);
      setData((prev) => ({
        ...prev,
        messages: [newMessage, ...prev.messages],
      }));
    }, []);

    return (
      <MessagesContext.Provider
        value={{
          data,
          setData,
          fetchMessages,
          fetchMore,
          sendMessage,
        }}
      >
        {children}
      </MessagesContext.Provider>
    );
  };
