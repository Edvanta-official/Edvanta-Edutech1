export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9ebc9e',
          dark: '#769a85',
          light: '#e6efe7',
        },
        secondary: {
          DEFAULT: '#28322c',
          dark: '#1c2621',
          light: '#3d4a41',
        },
        accent: {
          DEFAULT: '#769a85',
          dark: '#527060',
          light: '#c8dacd',
        },
        bgLight: '#f5f7f5',
        bgDark: '#1a221d',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(158, 188, 158, 0.25)',
        'glow-lg': '0 0 25px rgba(158, 188, 158, 0.45)',
      }
    },
  },
  plugins: [],
}