/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,ts,svelte}'],
  theme: {
    extend: {
      backgroundImage: {
        loginForm: "url('./public/imgs/bg-login.jpg)"
      },
      borderRadius: {
        'color-box': '0.625rem'
      },
      boxShadow: {
        'button-active': 'inset 0 2px 4px 0 rgb(0 0 0 / 35%)',
        overlay: '0 -4px 16px 0 rgba(0, 0, 0, 0.08)'
      },
      colors: {
        focus: 'rgba(78, 171, 48, 0.65)',
        google: 'rgb(64, 128, 236)',
        bgLogin: '#F7F7F8'
      },
      fontFamily: {
        sans: ['Noto Sans KR', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        0: '0px',
        '10px': '10px'
      },
      minHeight: {
        modal: '18rem',
        td: '2.75rem',
        th: '1.875rem'
      },
      minWidth: {
        '5xl': '64rem'
      },
      spacing: {
        'button-md': '2.875rem',
        'button-sm': '2.25rem',
        'img-box-circle': '3.5rem',
        'img-box-square': '5.375rem',
        td: '2.75rem',
        th: '1.875rem'
      }
    }
  },
  plugins: []
}
