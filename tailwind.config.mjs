import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            hr: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
  safelist: [
    'bg-stone-800',
    'dark:bg-stone-800',
    'bg-stone-900',
    'dark:bg-stone-900',
  ],
};
