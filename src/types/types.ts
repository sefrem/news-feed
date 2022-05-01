export type Message = {
  id: string;
  author: string;
  date: number;
  text: string;
  author_id: string;
};

export type Messages = {
  total: number;
  messages: Message[];
};

export type Author = {
  name: string;
  about: string;
};

export type State = Messages & { filteredMessages: Message[] };
