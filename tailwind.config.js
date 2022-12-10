module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Merriweather Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
