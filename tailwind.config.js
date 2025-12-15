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
        'rich-black': '#0a0a0a',
        'royal-amethyst': '#8b5cf6',
        'amethyst-light': '#d946ef',
        'champagne-gold': '#D4AF37', // Metallic Gold
        'platinum': '#e2e8f0',
        // Hybrid Additions (Tech Luxury)
        'tech-purple': '#1a0b2e',
        'neon-blue': '#00f3ff',
        'neon-purple': '#bc13fe',
        'glass-white': 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 40%, #B38728 60%, #FBF5B7 100%)',
        'gold-sheen': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
        'tech-gradient': 'linear-gradient(to bottom, #0F0c29, #302b63, #24243e)',
        'neon-gradient': 'linear-gradient(90deg, #00f3ff, #bc13fe)',
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.3)',
        'gold-glow-lg': '0 0 40px rgba(212, 175, 55, 0.5)',
        'neon-glow': '0 0 10px rgba(0, 243, 255, 0.5), 0 0 20px rgba(0, 243, 255, 0.3)',
        'purple-glow': '0 0 10px rgba(188, 19, 254, 0.5), 0 0 20px rgba(188, 19, 254, 0.3)',
      },
      animation: {
        'shimmer': 'shimmer 3s infinite linear',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'spin-reverse-slow': 'spin 15s linear infinite reverse',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
