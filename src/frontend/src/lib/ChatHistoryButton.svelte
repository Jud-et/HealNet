<script lang="ts">
  import { goto } from "$app/navigation";
  import { tick } from "svelte";
  import { selectedHistoryStore } from "./SelectedHistory.store";
  import type { ChatHistory } from "./history.store";
  import { page } from "$app/stores";

  export let chatIdAndHistory: {
    chat_id: string;
    chat_history: ChatHistory;
  };

  let chat_history = chatIdAndHistory.chat_history;
  let { text } = chat_history[chat_history.length - 2].parts[0];
  let headings = text.slice(0, 36);

  //   $: activeUrl = $page.url.pathname;

  export let onClick;
</script>

<button
  class="w-full"
  on:click={async () => {
    selectedHistoryStore.set(chatIdAndHistory);
    goto("/history");
    onClick();
  }}
>
  <!-- <a href="/history"> -->
  <div class="border-2 rounded-md border-purple-500 p-3 my-1">
    <p class="text-neutral-500 dark:text-neutral-400 text-left">
      {headings}
    </p>
  </div>
  <!-- </a> -->
</button>
