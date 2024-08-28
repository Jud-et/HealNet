<script>
  import { Drawer, Button, CloseButton } from "flowbite-svelte";
  import { ClockSolid } from "flowbite-svelte-icons";
  import { sineIn } from "svelte/easing";

  import ChatHistoryButton from "./ChatHistoryButton.svelte";
  import { historyStore } from "./history.store";

  let hidden1 = true;
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn,
  };
</script>

<div class="text-center">
  <button on:click={() => (hidden1 = false)}>History</button>
</div>

<Drawer
  transitionType="fly"
  {transitionParams}
  bind:hidden={hidden1}
  id="sidebar1"
>
  <div>
    <div class="flex items-center">
      <h5
        id="drawer-label"
        class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
      >
        <ClockSolid class="w-5 h-5 me-2.5" />History
      </h5>
      <CloseButton
        on:click={() => (hidden1 = true)}
        class="mb-4 dark:text-white"
      />
    </div>
    <div class="pb-20">
      {#each $historyStore.reverse() as chatIdAndHistory}
        <ChatHistoryButton
          {chatIdAndHistory}
          onClick={() => (hidden1 = true)}
        />
      {/each}
    </div>
  </div>
</Drawer>
