module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"], 
      },
      keyframes: {
        rotate: { 
          "0%": { transform: "translate(0, -250px)" },
          "25%": { transform: "translate(300px, 0)" },
          "50%": { transform: "translate(0, 250px)" },
          "75%": { transform: "translate(-300px, 0)" },
          "100%": { transform: "translate(0, -250px)" },
        },
      },
      animation: {
        "rotate-yellow": "rotate 5s linear infinite",
        "rotate-pink": "rotate 6s linear infinite",
        "rotate-blue": "rotate 7s linear infinite",
        "rotate-red": "rotate 8s linear infinite",
      },
    },
  },
  plugins: [],
};
