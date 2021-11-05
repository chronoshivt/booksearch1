module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: '#FFFFFF',
      },
      green: {
        DEFAULT: '#BCFE2F',
      },
      gray: {
        dark: '#5D5D5D',
        DEFAULT: '#A3A3A3',
        light: '#F5F5F5',
      },
      black: {
        DEFAULT:'#000000',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
