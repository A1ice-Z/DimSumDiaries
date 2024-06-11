/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      palatino: ["Palatino", "sans-serif"],
    },
    extend: {
      colors: {
        'cream': '#FAEED1',
        'cream-light': '#FDF7E4',
        'orange': '#FFB200'
      },
    },
  },
  plugins: [],
}