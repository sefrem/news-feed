import express from "express";
import fs from "fs";

import { Message } from "./types";

const app = express();
app.use(express.json());

app.get("/get_news", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const messages: Message[] = JSON.parse(await readFile("./data/messages.json"));

  if (!req.query?.after || req.query?.after === "null") {
    const messagesResponse = messages.slice(0, Number(req.query.limit));
    res.send(JSON.stringify({
      "total": messages.length,
      "messages": messagesResponse
    }));
    return;
  }
  setTimeout(() => {
    if (req.query?.after) {
      const indexAfter = messages.findIndex(({ id }) => id === req.query.after) + 1;
      res.send(JSON.stringify({
        "total": messages.length,
        "messages": messages.slice(indexAfter, indexAfter + Number(req.query.limit))
      }));
    }
  }, 500)

});

app.listen(8080, () => console.info("api listening at http://localhost:8080"));

const readFile = async (path: string) => {
  return await fs.promises.readFile(path, "utf-8");
};