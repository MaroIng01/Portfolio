/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-void': '#050505',
        'royal-amethyst': '#8b5cf6',
        'amethyst-light': '#d946ef',
        'champagne-gold': '#fbbf24',
        'platinum': '#e2e8f0',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
