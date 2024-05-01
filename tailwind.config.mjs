import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat Variable", ...defaultTheme.fontFamily.sans],
        palanquin: ["Palanquin", ...defaultTheme.fontFamily.sans],
        mada: ["Mada Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
        },
        accent: {
          DEFAULT: "var(--accent-100)",
          200: "var(--accent-200)",
		  300: "var(--accent-300)",
        },
        foreground: {
          DEFAULT: "var(--foreground-100)",
          200: "var(--foreground-200)",
        },
        background: {
          DEFAULT: "var(--background-100)",
          200: "var(--background-200)",
          300: "var(--background-300)",
        },
      },
    },
  },
  plugins: [],
};
