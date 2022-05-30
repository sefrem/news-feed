import React, { useContext, useEffect } from "react";

import List from "../../components/List";
import Filter from "../../components/Filter";

import { MessagesContext } from "../../context/messagesContext";

const HomePage = () => {
  const { fetchMessages } = useContext(MessagesContext);

  useEffect(() => {
    fetchMessages?.();
  }, [fetchMessages]);

  return (
    <>
      <Filter />
      <List />
    </>
  );
};

export default HomePage;
