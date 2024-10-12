module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            bg_color: '#1B2431',
            header_color: '#214761',
            card_cover_color: '#214761',
            card_content_color: '#2e6387',
            accent_color: '#D0FEFE'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
