import { writable } from "svelte/store";
import type { ChatHistory } from "./history.store";

export const selectedHistoryStore = writable<{
  chat_id: string;
  chat_history: ChatHistory;
}>();
