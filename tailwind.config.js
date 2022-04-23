module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: "syne",
        mono: "mono",
      },
      colors: {
        primary: "#FFC061",
      },
      boxShadow: {
        zen: "rgba(0, 0, 0, 0.075) 0px 1px 1px, rgba(0, 0, 0, 0.075) 0px 2px 2px, rgba(0, 0, 0, 0.075) 0px 4px 4px, rgba(0, 0, 0, 0.075) 0px 8px 8px, rgba(0, 0, 0, 0.075) 0px 16px 16px",
      },
    },
  },
  plugins: [],
};
