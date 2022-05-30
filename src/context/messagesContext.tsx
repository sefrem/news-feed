import React, { createContext, useCallback, useReducer, useState } from "react";

import { Messages, NewMessage, State } from "../types/types";
import { messageApi, newsApi } from "../api/api";

const initState = {
  total: 0,
  messages: [],
  filteredMessages: [],
  filterValue: "",
};

export const MessagesContext = createContext<{
  data: State;
  setFilterValue?: (value: string) => void;
  fetchMessages?: () => Promise<void>;
  fetchMore?: (after: string) => Promise<void>;
  sendMessage?: (value: string) => Promise<void>;
  isLoading: boolean;
  isSending: boolean;
}>({ data: initState, isLoading: false, isSending: false });

const enum ACTIONTYPE {
  "FETCHMESSAGES" = "FETCHMESSAGES",
  "UPDMESSAGES" = "UPDMESSAGES",
  "NEWMESSAGE" = "NEWMESSAGE",
  "FILTERMESSAGES" = "FILTERMESSAGES",
}

type UpdMessageAction = {
  type: ACTIONTYPE.UPDMESSAGES | ACTIONTYPE.FETCHMESSAGES;
  payload: Messages;
};

type NewMessageAction = {
  type: ACTIONTYPE.NEWMESSAGE;
  payload: NewMessage;
};

type FilterMessages = {
  type: ACTIONTYPE.FILTERMESSAGES;
  payload: string;
};

function reducer(
  state: State,
  { type, payload }: UpdMessageAction | NewMessageAction | FilterMessages
) {
  switch (type) {
    case "FETCHMESSAGES":
      return {
        ...state,
        ...payload,
      };
    case "UPDMESSAGES":
      return {
        ...state,
        messages: [...state.messages, ...payload.messages],
      };
    case "NEWMESSAGE":
      return {
        ...state,
        total: payload.total,
        messages: [payload.message, ...state.messages],
      };
    case "FILTERMESSAGES":
      return {
        ...state,
        filterValue: payload,
        filteredMessages: payload
          ? state.messages.filter(({ text }) =>
              text.toLowerCase().includes(payload.toLowerCase())
            )
          : [],
      };

    default:
      throw new Error();
  }
}

export const MessagesContextProvider: React.FC<{ children: React.ReactNode }> =
  ({ children }) => {
    const [data, dispatch] = useReducer(reducer, initState);
    const [isLoading, setIsLoading] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const setFilterValue = useCallback((value: string) => {
      dispatch({
        type: ACTIONTYPE.FILTERMESSAGES,
        payload: value,
      });
    }, []);

    const fetchMessages = useCallback(async () => {
      setIsLoading(true);
      try {
        const messages = await newsApi({
          addUrl: `/?limit=10`,
        });
        dispatch({
          type: ACTIONTYPE.FETCHMESSAGES,
          payload: messages,
        });
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }, []);

    const fetchMore = useCallback(async (after: string) => {
      setIsLoading(true);
      try {
        const messages = await newsApi({
          addUrl: `/?limit=10&after=${after}`,
        });
        dispatch({
          type: ACTIONTYPE.UPDMESSAGES,
          payload: messages,
        });
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
        dispatch({
          type: ACTIONTYPE.NEWMESSAGE,
          payload: newMessage,
        });
      } catch (e) {
        console.error(e);
      } finally {
        setIsSending(false);
      }
    }, []);

    const value = React.useMemo(
      () => ({
        data,
        isLoading,
        isSending,
        fetchMessages,
        fetchMore,
        sendMessage,
        setFilterValue,
      }),
      [
        data,
        fetchMessages,
        fetchMore,
        isLoading,
        isSending,
        sendMessage,
        setFilterValue,
      ]
    );

    return (
      <MessagesContext.Provider value={value}>
        {children}
      </MessagesContext.Provider>
    );
  };
