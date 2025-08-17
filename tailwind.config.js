/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxxs': '0',
      'xxs': '330px',
      'xs': '400px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px',
      'xxxl': '1600px'
    },
    extend: {
      keyframes: { 'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } } },
      animation: { 'fade-in': 'fade-in 700ms ease forwards' },
      height: { 'fill-available': '-webkit-fill-available' },
      lineHeight: { 'tight-2': '1.2' },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
    },
  },
  corePlugins: {
    listStyleType: true,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
  fontSize: {
    sm: '0.8rem',
    base: '1rem',
    xl: '1.25rem',
    '2xl': '1.563rem',
    '3xl': '1.953rem',
    '4xl': '2.441rem',
    '5xl': '3.052rem',
  }
}
