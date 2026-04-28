/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Rich gold — primary accent.
        gold: {
          50:  '#fdf9ee',
          100: '#faf0d3',
          200: '#f4dfa3',
          300: '#ecc769',
          400: '#d4af37',
          500: '#b8954b',
          600: '#97772f',
          700: '#745a23',
          800: '#524018',
          900: '#2e240a',
        },
        // Warm black for headings, CTAs, dark sections.
        ink: {
          50:  '#f8f8f7',
          100: '#ebebe8',
          200: '#cfcfca',
          300: '#a8a8a0',
          400: '#6f6f66',
          500: '#4a4a42',
          600: '#2f2f2a',
          700: '#1d1d1a',
          800: '#121210',
          900: '#0a0a09',
        },
        // Warm ivory surfaces (replaces cool slate-50/100/200).
        cream: {
          50:  '#fdfbf6',
          100: '#faf6e8',
          200: '#f0e9d2',
          300: '#dccfa6',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
