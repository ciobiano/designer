module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'satoshi': ['Satoshi-Regular', 'Satoshi-Variable', 'sans-serif'],
        'satoshi-bold': ['Satoshi-Bold', 'Satoshi-Variable', 'sans-serif'],
      },
    },
  },
  plugins: [],
}