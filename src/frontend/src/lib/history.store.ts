import { writable, type Writable } from "svelte/store";
import { getAllChats } from "./api";

// type Message = {
//     role: "user" | "model";
//     parts: { text: string }[];
//   };

export type Message = {
  role: "user" | "model";
  parts: { text: string }[];
};
export type ChatHistory = Message[];

export type HistoryData = Array<{
  chat_id: string;
  chat_history: ChatHistory;
}>;

interface HistoryStore extends Writable<HistoryData> {
  sync: () => Promise<void>;
}

const init = async (): Promise<HistoryStore> => {
  const { set, subscribe, update } = writable<HistoryData>([]);
  return {
    set,
    subscribe,
    update,
    sync: async () => {
      const chatsHistory = await getAllChats();
      set(chatsHistory as HistoryData);
    },
  };
};

export const historyStore: HistoryStore = await init();

history: [
  {
    role: "user",
    parts: [{ text: "hi gemini" }],
  },
  {
    role: "model",
    parts: [{ text: "Hi there! 👋 How can I help you today? 😊" }],
  },
];
