/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "rethink-sans": ["Rethink Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#161721",
        secondary: "#1D1D2C",
        clock: "#DEFFF5",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
