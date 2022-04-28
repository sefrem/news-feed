import React, { useEffect, useState } from "react";

import List from "../../components/List";
import Filter from "../../components/Filter";

import { API_URL } from "../../consts";
import { api } from "../../api/api";
import { State, Messages } from "../../models/messages";
import AddMessage from "../../components/AddMessage/AddMessage";

const initState = {
  total: 0,
  messages: [],
  filteredMessages: [],
};

const Home = () => {
  const [data, setData] = useState<State>(initState);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      const { messages, total } = await api<Messages>(
        `${API_URL}/get_news?limit=10`
      );
      setData((prev) => ({
        ...prev,
        messages,
        total,
      }));
    };

    fetchMessages().catch(console.error);
  }, []);

  return (
    <div>
      <Filter
        inputValue={inputValue}
        setInputValue={setInputValue}
        setData={setData}
      />
      <List data={data} setData={setData} inputValue={inputValue} />
      <AddMessage />
    </div>
  );
};

export default Home;
