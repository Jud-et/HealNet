<script lang="ts">
  import { Button } from "flowbite-svelte";
  import { authStore } from "./auth.store";

  $: isAuthenticated = $authStore.isAuthenticated;

  const login = async () => {
    await authStore.signIn();
  };
</script>

{#if isAuthenticated}
  <Button
    color="alternative"
    class="primary"
    on:click={() => authStore.signOut()}>LOGOUT</Button
  >
{:else}
  <Button class="primary" on:click={() => login()}>LOGIN</Button>
{/if}
