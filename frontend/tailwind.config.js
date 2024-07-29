/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#e55701',
        'secondary': '#717f8f',
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-100%) translateX(-50%)' },
          '100%': { opacity: 1, transform: 'translateY(0) translateX(-50%)' },
        },
      },
      animation: {
        'slide-down': 'slideDown 0.25s ease-out',
      }
    },
  },
  plugins: [],
}