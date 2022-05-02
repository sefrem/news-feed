export type Message = {
  id: string;
  author: string;
  date: number;
  text: string;
  author_id: string;
};

export type Author = {
  name: string;
  about: string;
};
