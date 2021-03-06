module.exports = {
  purge: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      ringColor: ["focus-within"]
    },
  },
  plugins: [],
}
