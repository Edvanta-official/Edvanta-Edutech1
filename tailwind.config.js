export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#769f86',
          dark: '#4d6c59',
          light: '#8fae9b',
        },
        secondary: {
          DEFAULT: '#2c3a32',
          dark: '#1a241e',
          light: '#42554a',
        },
        accent: {
          DEFAULT: '#8fae9b',
          dark: '#5d846c',
          light: '#c2d4c8',
        },
        bgLight: '#f4f7f5',
        bgDark: '#121815',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(118, 159, 134, 0.25)',
        'glow-lg': '0 0 25px rgba(118, 159, 134, 0.45)',
      }
    },
  },
  plugins: [],
}