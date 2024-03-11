/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'orange': '#FF8D29',
        'purple': '#541690',
        'pink': '#FF4949',
        'yellow': '#FFCD38',
        'white': '#FFFFFF',
        'purple-shades': {
          '50': '#faf5ff',
          '100': '#f3e8ff',
          '200': '#e9d5ff',
          '300': '#d8b4fe',
          '400': '#c084fc',
          '500': '#a855f7',
          '600': '#9333ea',
          '700': '#7e22ce',
          '800': '#6b21a8',
          '900': '#581c87',
        },
        'yellow-shades': {
          '50': '#fffbea',
          '100': '#fff3c4',
          '200': '#fce588',
          '300': '#fadb5f',
          '400': '#f7c948',
          '500': '#f0b429',
          '600': '#de911d',
          '700': '#cb6e17',
          '800': '#b44d12',
          '900': '#8d2b0b',
        },
        'orange-shades': {
          '50': '#fff8f1',
          '100': '#feecdc',
          '200': '#fcd9bd',
          '300': '#fdba8c',
          '400': '#ff8a4c',
          '500': '#ff5a1f',
          '600': '#d03801',
          '700': '#b43403',
          '800': '#8a2c0d',
          '900': '#73230d',
        },
      },
      
      fontFamily: {
        //sans: ['Noto_Sans', 'sans-serif'],
      },

      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};