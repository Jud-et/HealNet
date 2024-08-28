import { get } from "svelte/store";
import { authStore } from "./auth.store";

type QueryAllChats = Array<{
  chat_id: string;
  chat_history: Array<{ role: string; parts: Array<{ text: string }> }>;
}>;
export const getAllChats = async (): Promise<QueryAllChats> => {
  const actor = get(authStore).actor;
  return actor.get_chats_by_user();
};
