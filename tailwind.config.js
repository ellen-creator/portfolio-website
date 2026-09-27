/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Custom earthy palette
        earth: {
          50: '#F1EAD8',   // Light cream background
          100: '#D5C7AD',  // Secondary beige
          200: '#BEC5A4',  // Light olive accent
          600: '#8A8E75',  // Muted olive
          900: '#68604D',  // Dark brown
        },
        // Fallback ivory palette
        ivory: {
          50: '#FAF8F3',
          100: '#F7F5F0',
          200: '#F3F1EB',
          300: '#EFE9E0',
        },
        // Soft dark warm charcoal
        charcoal: {
          900: '#2B2620',
          800: '#3D3832',
          700: '#4F483F',
          600: '#6B6458',
        },
        // Navy for dark mode
        navy: {
          900: '#0f1419',
          800: '#1a1f2e',
          700: '#252d3d',
        },
        // Sage green
        sage: {
          50: '#F2F5F0',
          100: '#E8EEE4',
          200: '#D4DEC9',
          300: '#B8CCAA',
          400: '#9BAB84',
          600: '#7A8B6F',
          700: '#6B7D63',
        },
      },
      spacing: {
        // Generous spacing (Kinfolk style)
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
      },
      letterSpacing: {
        widest: '0.15em',
        'extra-wide': '0.2em',
      },
      lineHeight: {
        'relaxed': '1.8',
        'loose': '2',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
