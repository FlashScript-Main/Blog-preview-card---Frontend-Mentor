/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['"Figtree", sans-serif'],
      },
      colors: {
        // Primary
          'primary-yellow': 'hsl(47, 88%, 63%)',

        // Neutral
          'neutral-white': 'hsl(0, 0%, 100%)',
          'neutral-grey': 'hsl(0, 0%, 50%)',
          'neutral-black': 'hsl(0, 0%, 7%)',
      },
      screens: {
        // @media (min-width: ...) {}
          'xs': '475px',  // => @media (min-width: 475px) { ... }
        
        // @media (max-width: ...) {}
          // 'max-screen-xs': {'max': '425px'}, // => @media (max-width: 425px) { ... }
      },
    },
  },
  plugins: [],
}