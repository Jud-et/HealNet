<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Message from "$lib/Message.svelte";
  import { selectedHistoryStore } from "$lib/SelectedHistory.store";
  import SendMessage from "$lib/SendMessage.svelte";
  import SkeltonMessge from "$lib/SkeltonMessge.svelte";
  import { authStore } from "$lib/auth.store";
  import { runChat } from "$lib/gemini-api";
  import { historyStore, type ChatHistory } from "$lib/history.store";
  import { inputStore } from "$lib/input.store";
  import { onDestroy, onMount, tick } from "svelte";

  ///////////// scrolling code
  let messagesContainer: any;
  onMount(async () => {
    scrollToBottom();
    await historyStore.sync();
  });
  async function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  //////////

  type MessagePart = {
    text: string;
  };

  type Message = {
    role: "user" | "model";
    parts: MessagePart[];
  };
  type ChatHistory = Message[];

  let chatHistory: ChatHistory = [];
  let chatId: string | undefined = "";

  const unsubscribe = selectedHistoryStore.subscribe(
    async ({ chat_id, chat_history }) => {
      chatHistory = [];
      await tick();
      chatHistory = chat_history;
      chatId = chat_id;
    }
  );
  onDestroy(unsubscribe);

  let activateSkelton = false;

  let userMessage: Message;

  // Used for basically in new chat and history continuetion chat
  // Purpose is to generate chat from AI using user prompt and store them in backend
  async function creaNewChat() {
    const text = $inputStore;
    if (text.length === 0) return;

    userMessage = {
      role: "user",
      parts: [{ text }],
    };

    activateSkelton = true;
    await tick(); // This is the one basically helped to  scroll correctly and render
    scrollToBottom();
    let modelResponse = await runChat(chatHistory, text);
    activateSkelton = false;

    const modelMessage: Message = {
      role: "model",
      parts: [{ text: modelResponse }],
    };

    chatHistory = chatHistory;
    scrollToBottom();
    await storeChatHistory([userMessage, modelMessage]);
  }

  async function storeChatHistory(messages: Message[]) {
    if (chatId) {
      await $authStore.actor.add_chat(messages, chatId);
    } else {
      chatId = await $authStore.actor.create_new_chat(messages);
    }
  }

  async function handleClick() {
    await creaNewChat();
  }

  ///// for clearing existing chat history and initiate new chat inside current page
  async function newChatButton() {
    chatId = undefined;
    chatHistory = [];
    await historyStore.sync();
  }
</script>

<!-- {////////////////////////////////////} -->
<div class="flex flex-col h-screen pt-24 pb-24">
  <div class="flex-grow overflow-y-auto p-4" bind:this={messagesContainer}>
    <div class="space-y-4 flex flex-col items-center">
      {#each chatHistory as { role, parts }, index}
        <Message text={parts[0].text} {role} />
      {/each}
      {#if activateSkelton}
        <div class="space-y-4 flex flex-col items-center w-full">
          <Message text={userMessage.parts[0].text} role={userMessage.role} />
          <SkeltonMessge />
        </div>
      {/if}
    </div>
  </div>

  <SendMessage onClick={handleClick} onClickPlus={newChatButton} />
</div>
