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
          DEFAULT: '#00d4ff',
          50: '#e0faff',
          100: '#b3f2ff',
          200: '#80eaff',
          300: '#4de1ff',
          400: '#26dbff',
          500: '#00d4ff',
          600: '#00b8e6',
          700: '#009ccc',
          800: '#0080b3',
          900: '#00547a',
        },
        secondary: {
          DEFAULT: '#0066ff',
          50: '#e6f0ff',
          100: '#b3d1ff',
          200: '#80b3ff',
          300: '#4d94ff',
          400: '#2680ff',
          500: '#0066ff',
          600: '#0052cc',
          700: '#003d99',
          800: '#002966',
          900: '#001433',
        },
        accent: {
          DEFAULT: '#00ff88',
          500: '#00ff88',
        },
        dark: {
          900: '#0a0e1a',
          800: '#0f1420',
          700: '#1a1f2e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1280px',
        },
      },
    },
  },
  plugins: [],
}
