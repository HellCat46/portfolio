/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#89b4fa",
          "secondary": "#eba0ac",
          "accent": "#00ac00",
          "neutral": "#11111b",
          "base-100": "#1e1e2e",
          "info": "#b4befe",
          "success": "#a6e3a1",
          "warning": "#fab387",
          "error": "#f38ba8",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
