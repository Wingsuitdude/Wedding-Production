/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'warp-speed': 'warp-speed 1s linear infinite',
        'throb': 'throb 1s ease-in-out infinite',
      },
      keyframes: {
        'warp-speed': {
          '0%': { transform: 'translateZ(0) translateY(0)', opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { transform: 'translateZ(1000px) translateY(100px)', opacity: 0 },
        },
        'throb': {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.9 },
          '50%': { transform: 'scale(1.05)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}