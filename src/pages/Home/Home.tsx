import React, { useEffect, useState } from "react";

import { api } from "../../api/api";
import { Message, Messages } from "../../models/messages";

import styles from "./Home.module.css";

const Home = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const data = await api<Messages>("http://localhost:8080/get_news?limit=10");
      setMessages(data.messages);
    };

    fetchMessages().catch(console.error);
  }, []);

  const fetchMore = async (after: string) => {
    const data = await api<Messages>(`http://localhost:8080/get_news?limit=10&after=${after}`);
    setMessages(prev => [...prev, ...data.messages]);
  };

  return (
    <div>
      <button onClick={() => {
        fetchMore(messages[messages.length - 1].id);
      }}>FetchMore
      </button>
      <ul className={styles.list}>
        {messages.map(({ id, author, date, text }) => (
          <li key={id} className={styles.card}>
            <div className={styles.header}>
              <div className={styles.author}>{author}</div>
              <div className={styles.date}>{new Date(date * 1000).toLocaleString("RU")}</div>
            </div>
            <div className={styles.text}>{text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;