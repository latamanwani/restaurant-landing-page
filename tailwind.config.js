/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        sienna: "#a06f42",
        darkgoldenrod: "#c29439",
        gray: {
          "100": "#7c7878",
          "300": "#0d0c0c",
        },
        dimgray: {
          "100": "#5a4646",
          "200": "#4f3a3a",
        },
        lightgray: "rgba(218, 212, 204, 0.42)",
        silver: "rgba(207, 200, 180, 0.59)",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "24xl": "43px",
      },
    },
    fontSize: {
      "11xl": "30px",
      "7xl": "26px",
      mini: "15px",
      xl: "20px",
      "5xl": "24px",
      "21xl": "40px",
      "3xl": "22px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
