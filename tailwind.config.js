/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

// eslint-disable-next-line no-undef
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "60px",
      },
      screens: {
        "2xl": "1440px",
      },
    },

    fontFamily: {
      sans: ['"Open Sans"', "sans-serif"],
      mulish: ['"Mulish"', "sans-serif"],
    },
    extend: {
      screens: {
        xxs: "420px",
        xs: "475px",
        ...defaultTheme.screens,
        "2xl": "1440px",
      },
      colors: {
        "primary-100": "#FFEDEC",
        "primary-500": "#FF7068",
        "primary-400": "#E8847F",
        "secondary-500": "#4932C5",
        "dark-1": "#000",
        "gray-1": "#42526E",
        "gray-2": "#8C8C8C",
        "gray-3": "#F7F8FA",
        "light-1": "#fff",
      },
      boxShadow: {
        service: "10px 40px 50px 0px rgba(229, 233, 246, 0.40)",
        default: "0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")],
};
