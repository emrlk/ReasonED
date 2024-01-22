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
        'white': '#FFFFFF'
      },
      fontFamily: {
        sans: ['Noto_Sans', 'sans-serif'],
      },

      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  plugins: [],
  }
}
