import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        lg: "1280px",
        xl: "1280px",
        "2xl": "1280px",
      }
    },
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
          400: "var(--primary-400)",
        },
        accent: {
          DEFAULT: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground-100))",
          200: "hsl(var(--foreground-200))",
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
