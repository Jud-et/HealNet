<script>
  import "../app.css";
  import Navbar from "$lib/Navbar.svelte";
  import { authStore } from "$lib/auth.store";
  import Landing from "$lib/Landing.svelte";
</script>

<Navbar />
<!-- <div> -->

<!-- </div> -->
{#if $authStore.isAuthenticated}
  <slot />
{:else}
  <Landing />
{/if}

<style lang="postcss" global>
</style>
