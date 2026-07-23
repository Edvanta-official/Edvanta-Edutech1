/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B1F3A',
          dark: '#05101E',
          light: '#133563',
        },
        secondary: {
          DEFAULT: '#1E90FF',
          dark: '#0066CC',
          light: '#4DA6FF',
        },
        accent: {
          DEFAULT: '#00D4FF',
          dark: '#00A3C4',
          light: '#4DEDFF',
        },
        bgLight: '#F8FAFC',
        bgDark: '#0F172A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(0, 212, 255, 0.25)',
        'glow-lg': '0 0 25px rgba(0, 212, 255, 0.45)',
      }
    },
  },
  plugins: [],
}
