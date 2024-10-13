/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Titillium Web", "system - ui"], // Define your custom font family
        roboto: ["Roboto", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fade: "fade 1s infinite",
      },
    },
  },
  plugins: [],
};
