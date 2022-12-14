/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        primary: '#416EC2',
        secondary: "#0F2143",
        "be-white": '#EEF0FB',
        "be-gray": "#EDEFF2",
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
