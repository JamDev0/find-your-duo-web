/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surfaces: {
          background: '#121214',
          shape: '#2A2634',
        },
      },

      backgroundImage: {
        galaxy: "url('./galaxy-background.png')",
        'purple-cyan-yellow-gradient':
          'linear-gradient(89.86deg, #9572FC 0%, #43E7AD 50%, #E1D55D 100%);',
        'game-card-text-container-background-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);',
      },

      fontFamily: {
        inter: 'Inter',
      },
    },
  },
  plugins: [],
}
