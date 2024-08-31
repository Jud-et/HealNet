<script>
  import { page } from "$app/stores";
  import Drawer from "$lib/Drawer.svelte";
  import Auth from "$lib/Auth.svelte";
  import {
    DarkMode,
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";
  import { authStore } from "./auth.store";
  $: activeUrl = $page.url.pathname;
</script>

<Navbar class="fixed">
  <NavBrand href="/">
    <svg
      class="w-6 text-gray-800 dark:text-white me-3 h-6 sm:h-9"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6.616l-2.88 2.592C8.537 20.461 7 19.776 7 18.477V17H5a2 2 0 0 1-2-2V6Zm4 2a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7Zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-8 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm5 0a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z"
        clip-rule="evenodd"
      />
    </svg>
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      >Healnet</span
    >
  </NavBrand>
  <div class="flex md:order-2 gap-3">
    <DarkMode />
    <Auth />
  </div>
  <NavHamburger />
  <NavUl {activeUrl} class="order-1">
    <NavLi href="/">Home</NavLi>
    {#if $authStore.isAuthenticated}
      <NavLi><Drawer /></NavLi>
    {/if}
  </NavUl>
</Navbar>
