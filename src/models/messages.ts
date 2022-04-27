
export type Message = {
  id: string;
  author: string;
  date: number;
  text: string;
}

export type Messages = {
  total: number;
  messages: Message[];
}