<script lang="ts">
  import { Card, Badge } from "flowbite-svelte";

  export let role: string;
  export let text: string;

  //   const formattedResponseWithNewlines = text
  //     .replace(/_\*_/g, "<i>")
  //     .replace(/\*\*/g, "</i><b>")
  //     .replace(/\*\*/g, "</b>")
  //     .replace(/\n/g, "<br>");

  const formattedResponseWithNewlines = text
    .replace(/_\*_/g, "<i>")
    .replace(/_\*_/g, "</i>")
    .replace(/\*\*/g, "<b>")
    .replace(/\*\*/g, "</b>")
    .replace(/\n/g, "<br>");
</script>

<Card size="lg" class="bg-purple-200">
  <Badge
    rounded
    border
    large
    color={role === "user" ? "purple" : "green"}
    class="w-fit">{role === "user" ? "You" : "Baatcheet"}</Badge
  >
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
    {@html formattedResponseWithNewlines}
  </p>
</Card>
