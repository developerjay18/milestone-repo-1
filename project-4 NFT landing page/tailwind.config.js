/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        Pink: '#d164fa',
        Violet: '#5d60d6',
        Purple: '#501aa1',
        DarkBlue: '#1d1336',
      },
    },
  },
  plugins: [],
};
