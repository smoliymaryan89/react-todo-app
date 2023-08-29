/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#494C6B",
        secondary: "#9495A5",
        "light-grey": "#D1D2DA",
        "bg-light": "#FAFAFA",
        "bg-dark": "#171823",
      },
    },
  },
  plugins: [],
};
