/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        primary: '#416EC2',
        "be-white": '#EEF0FB',
      },
      container: {
        screens: {
          DEFAULT: '1440px',
        },
        center: true,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
