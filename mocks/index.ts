import express from "express";
import cors from "cors";
import fs from "fs";
import crypto from "crypto";

import { Author, Message } from "./types";

const app = express();
app.use(express.json());
app.use(cors());

let limit = 10;

app.get("/news", async (req, res) => {
  const messages: Message[] = JSON.parse(
    await readFile("./data/messages.json")
  );
  if (Number(req.query.limit) !== limit) {
    limit = Number(req.query.limit);
  }

  if (!req.query?.after || req.query?.after === "null") {
    res.send(
      JSON.stringify({
        total: messages.length,
        messages: messages.slice(0, limit),
      })
    );
    return;
  }
  setTimeout(() => {
    if (req.query?.after) {
      const indexAfter =
        messages.findIndex(({ id }) => id === req.query.after) + 1;
      res.send(
        JSON.stringify({
          total: messages.length,
          messages: messages.slice(indexAfter, indexAfter + limit),
        })
      );
    }
  }, 500);
});

app.post("/message", async (req, res) => {
  const messages: Message[] = JSON.parse(
    await readFile("./data/messages.json")
  );
  const newMessage: Message = {
    id: crypto.randomBytes(12).toString("hex"),
    author: req.body.author,
    date: req.body.timestamp,
    text: req.body.text,
    author_id: "01",
  };
  messages.unshift(newMessage);
  await writeFile("./data/messages.json", messages);

  res.send(JSON.stringify(newMessage));
});

app.get("/author/:id", async (req, res) => {
  const authors: Record<string, Author> = JSON.parse(
    await readFile("./data/authors.json")
  );

  if (authors[req.params.id]) {
    res.send(JSON.stringify(authors[req.params.id]));
  }
});

app.listen(8080, () => console.info("api listening at http://localhost:8080"));

const readFile = async (path: string) => {
  return await fs.promises.readFile(path, "utf-8");
};

const writeFile = async (path: string, data: unknown) => {
  await fs.promises.writeFile(path, JSON.stringify(data));
};
