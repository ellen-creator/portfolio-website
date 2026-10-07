/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Editorial type: heavy display serif for the masthead, text serif for reading,
        // bold Helvetica caps for utility labels
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        // Paper & ink (editorial). Full scale so every shade used in the app resolves.
        earth: {
          50: '#FFFFFF',   // Paper
          100: '#F4F3EF',  // Light rule / panel
          200: '#E4E2DC',
          300: '#CBC8C0',
          400: '#A6A29A',
          500: '#85817A',
          600: '#5F5C56',  // Meta text
          700: '#45423D',
          800: '#2A2825',
          900: '#111111',  // Ink
        },
        // Single accent, used sparingly: LUMI's text-safe coral (white text passes WCAG AA)
        accent: {
          DEFAULT: '#A9432D',
          soft: '#F7E4DD',
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
          950: '#0B0E14',  // Night edition paper
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
