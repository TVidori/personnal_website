/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        // custom: ['NunitoSans', 'Helvetica', 'Arial', 'sans-serif'],
        customBase: ['Flama', 'Helvetica', 'Arial', 'sans-serif'],
        titleBase: ['Sansita', 'Inter', 'Arial', 'sans-serif'],
        // flama: ['Flama', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
