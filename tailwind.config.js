/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx, ts, tsx}",
    "./components/**/*.{js,jsx, ts, tsx}",
    "./app/**/*.{js,jsx, ts, tsx}",
    "./src/**/*.{js,jsx, ts, tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fbfbfb",
          "200": "#1e1e1e",
          "300": "#121d29",
          "400": "#10001d",
          "500": "rgba(251, 251, 251, 0.5)",
          "600": "rgba(251, 251, 251, 0.01)",
          "700": "rgba(255, 255, 255, 0.9)",
        },
        orange: "#fdb716",
        white: "#fff",
        dimgray: "#4f4538",
        black: "#000",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        platypi: "Platypi",
      },
      borderRadius: {
        "26xl": "45px",
        "3xl": "22px",
      },
    },
    fontSize: {
      mini: "15px",
      "6xl": "25px",
      xl: "20px",
      base: "16px",
      "21xl": "40px",
      "13xl": "32px",
      "5xl": "24px",
      "11xl": "30px",
      lg: "18px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      sm: {
        max: "650px",
        min: "0px",
      },
      lg: {
        min: "670px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
