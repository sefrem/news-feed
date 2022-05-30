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

export type NewMessage = {
  total: number;
  message: Message;
};

export type Author = {
  name: string;
  about: string;
  messages: Message[];
};

export type State = Messages & {
  filteredMessages: Message[];
  filterValue: string;
};
