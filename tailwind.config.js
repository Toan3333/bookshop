/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#39DB4A",
        green: "#6ADFE6",
        greenLight: "#90BD95",
        text: "#4A4A4A",
        red: "#F00",
        redBox: "#E44",
        secondary2: "#4D4D4D",
        secondary: "#FF6868",
        roundPopular: "#C1F1C6",
        grayText: "#555555",
        yellow: "#EA9514",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#39DB4A",
          secondary: "#EE4444",
          redPrimary: "#F00",
          accent: "#4D4D4D",
          neutral: "#4A4A4A",
          "base-100": "#ffffff", // Nền trắng cho toàn bộ ứng dụng
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      // Nếu muốn vẫn sử dụng theme 'light' nhưng không 'dark'
      "false",
    ],
  },
};
