/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ["Playwrite AU TAS", "cursive"],
        raleway: ["Raleway", "sans-serif"],
        play: ["Play", "sans-serif"],
      },
    },
  },
  plugins: [],
}

