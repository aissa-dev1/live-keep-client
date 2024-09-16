/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      colors: {
        primary: "#7238b8",
        "primary-dark": "#00cdd4",
        secondary: "#adb5bd",
        "secondary-dark": "#495057",
        "page-bg": "#f1f4f9",
        "page-color": "#000",
        "page-bg-dark": "#1b1e23",
        "page-color-dark": "#fff",
      },
    },
  },
  plugins: [],
};
