/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'prim-1': '#00607A',
        'prim-2': '#005066',
        'prim-3': '#004052',
        'prim-4': '#00303D',
        'prim-5': '#002029',
        'prim-text-light': '#212529',
        'prim-text-dark': '#ffffff',
      },
      animation: {
        'loading-spin': 'loading-spin 1s infinite alternate',
      },
      keyframes: {
        'loading-spin': {
          '0%, 10%': {
            'background-size': '20% 100%',
          },
          '50%': {
            'background-size': '20% 20%',
          },
          '90%, 100%': {
            'background-size': '100% 20%',
          },
        },
      },
    },
  },
  plugins: [],
};
