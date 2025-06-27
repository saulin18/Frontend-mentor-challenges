/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/presentation/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Habilita el modo oscuro basado en clases
  theme: {
    extend: {
      colors: {
        // Custom color variables based on style guide
        'blue': {
          900: 'hsl(209, 23%, 22%)', // Dark Mode Elements
          950: 'hsl(207, 26%, 17%)', // Dark Mode Background
        },
        'grey': {
          50: 'hsl(0, 0%, 99%)',   // Light Mode Background
          400: 'hsl(0, 0%, 50%)',  // Light Mode Input
          950: 'hsl(200, 15%, 8%)', // Light Mode Text
        },
        'white': 'hsl(0, 100%, 100%)', // Dark Mode Text & Light Mode Elements
      },
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif'],
      },
      fontSize: {
        'home': '14px',    // Homepage Items
        'detail': '16px',  // Detail Page
      },
      fontWeight: {
        'light': '300',
        'semibold': '600',
        'extrabold': '800',
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
    },
  },
  plugins: [],
}

export default tailwindConfig; 