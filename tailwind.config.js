/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'weserve-purple' : "#640EF1",
        'weserve-navy' : '#080C2E',
        'weserve-grey' : '#5D5D7C',
        'weserve-yellow' : '#FFD15A',
        'weserve-light' : '#8D90A8'
      },
      fontFamily: {
        'clash-display': 'Clash Display, sans-serif'
      },
      display: ["group-hover"],
    },
  },
  plugins: [],
}

