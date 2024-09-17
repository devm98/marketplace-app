/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "big-background": "url('/images/bg.png')",
        dot: "radial-gradient(#F643E4, #FF54EE00)",
      },
    },
  },
  plugins: [],
};
