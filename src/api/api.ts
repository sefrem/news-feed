import { API_URL } from "../consts";
import { Author, Message, Messages } from "../types/types";

const api =
  <T>(url: string) =>
  async (params: {
    method?: "GET" | "POST";
    addUrl?: string;
    payload?: Record<string, unknown>;
  }): Promise<T> => {
    const { method = "GET", addUrl = "", payload } = params;

    const response = await fetch(url + addUrl, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  };

export const newsApi = api<Messages>(`${API_URL}/news`);
export const messageApi = api<Message>(`${API_URL}/message`);
export const authorsApi = api<Author>(`${API_URL}/author`);
