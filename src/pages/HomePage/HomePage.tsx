import React, { useContext, useEffect, useState } from "react";

import List from "../../components/List";
import Filter from "../../components/Filter";

import { MessagesContext } from "../../context/messagesContext";

const HomePage = () => {
  const { fetchMessages } = useContext(MessagesContext);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    fetchMessages && fetchMessages().catch(console.error);
  }, [fetchMessages]);

  return (
    <>
      <Filter filterValue={filterValue} setFilterValue={setFilterValue} />
      <List filterValue={filterValue} />
    </>
  );
};

export default HomePage;
