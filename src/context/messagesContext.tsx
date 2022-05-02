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
  isLoading: boolean;
  isSending: boolean;
}>({ data: initState, isLoading: false, isSending: false });

export const MessagesContextProvider: React.FC<{ children: React.ReactNode }> =
  ({ children }) => {
    const [data, setData] = useState<State>(initState);
    const [isLoading, setIsLoading] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const fetchMessages = useCallback(async () => {
      setIsLoading(true);
      try {
        const { messages, total } = await newsApi({
          addUrl: `/?limit=10`,
        });
        setData((prev) => ({
          ...prev,
          messages,
          total,
        }));
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }, []);

    const fetchMore = useCallback(async (after: string) => {
      setIsLoading(true);
      try {
        const { messages } = await newsApi({
          addUrl: `/?limit=10&after=${after}`,
        });
        setData((prev) => ({
          ...prev,
          messages: [...prev.messages, ...messages],
        }));
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }, []);

    const sendMessage = useCallback(async (value: string) => {
      setIsSending(true);
      try {
        const newMessage = await messageApi({
          method: "POST",
          payload: {
            text: value,
            author: "Walker Patterson",
            timestamp: new Date().getTime(),
          },
        });
        setData((prev) => ({
          ...prev,
          messages: [newMessage, ...prev.messages],
        }));
      } catch (e) {
        console.error(e);
      } finally {
        setIsSending(false);
      }
    }, []);

    return (
      <MessagesContext.Provider
        value={{
          data,
          isLoading,
          isSending,
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
