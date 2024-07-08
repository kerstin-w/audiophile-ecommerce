/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    letterSpacing: {
      widest: '10px',
    },
    extend: {
      colors: {
        primary: {
          50: '#FAFAFA',
          100: '#F1F1F1',
          200: '#191919;',
          300: '#D87D4A',
        },
        accent: {
          300: '#fbaf85',
        },
      },
    },
  },
  plugins: [],
};
