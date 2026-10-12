/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050914',
        navy: { 900: '#080e20', 800: '#0c1530', 700: '#111d40' },
        electric: '#3b82f6',
        violet: { glow: '#8b5cf6' },
        cyan: { glow: '#22d3ee' },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
