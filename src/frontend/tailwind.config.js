/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    "../../node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        // primary: {
        //   50: "#FFF5F2",
        //   100: "#FFF1EE",
        //   200: "#FFE4DE",
        //   300: "#FFD5CC",
        //   400: "#FFBCAD",
        //   500: "#FE795D",
        //   600: "#EF562F",
        //   700: "#EB4F27",
        //   800: "#CC4522",
        //   900: "#A5371B",
        // },
        primary: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
