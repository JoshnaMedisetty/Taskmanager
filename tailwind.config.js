/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Include all files in the app directory
    './src/components/**/*.{js,ts,jsx,tsx}', // Include all files in the components directory
    './src/helpers/**/*.{js,ts,jsx,tsx}', // Include files in the helpers directory if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
