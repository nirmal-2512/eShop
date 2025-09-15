/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2B003C", // main (used when you write `bg-primary`)
          light: "#6366F1",   // lighter shade
          dark: "#3730A3",    // darker shade
        },
        secondary: {
          DEFAULT: "#F59E0B",
          light: "#FBBF24",
          dark: "#B45309",
        },
      },
    },
  },
  plugins: [],
}