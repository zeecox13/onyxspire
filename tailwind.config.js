/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-espresso': '#121212',
        'charcoal': '#1A1A1A',
        'accent-pink': '#FF1493',
        'soft-ivory': '#F5EFE7',
        'merlot-wine': '#5C1F2D',
      },
      fontFamily: {
        'serif': ['Catchy Mager', 'Cormorant Garamond', 'Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

