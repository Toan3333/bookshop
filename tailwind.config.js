/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#22C55E",
        green: "#6ADFE6",
        greenLight: "#F0FDF4",
        text: "#1F2937",
        red: "#F00",
        redBox: "#E44",
        secondary2: "#4D4D4D",
        secondary: "#EF4444",
        roundPopular: "#C1F1C6",
        grayText: "#9CA3AF",
        yellow: "#EA9514",
      },
      fontSize: {
        textTitle: "28px",
        price: "18px",
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
