<script>
  import { Heading, P, Span } from "flowbite-svelte";
</script>

<div
  class="text-center p-4 sm:p-32 max-sm:pt-20 flex items-center flex-col justify-center h-[100vh] bg-gradient-to-b from-pink-300 via-purple-600 to-sky-400"
>
  <Heading
    tag="h1"
    class="mb-4"
    customSize="text-3xl font-extrabold  md:text-5xl lg:text-6xl"
  >
    Welcome to <Span gradient class="from-purple-600 to-sky-400"
      >Healnet AI</Span
    > - Empowering Recovery with Your Advanced Medical Education Assistant Discover the power of AI-driven
    learning.
  </Heading>
  <P
    >Healnet AI is an AI chat model powered by <Span
      class="from-purple-400 to-sky-600"
      gradient>Gemini Flash</Span
    >, your friendly guide, offering engaging and supportive conversations about drug misuse prevention, treatment, and recovery—always here to help you on your journey to better health.
   </P
  >
</div>
