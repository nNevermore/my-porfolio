/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '3rem',
      },
      screens: {
        sm: '100%',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1600px',
        //   '2xlmax': { max: '1535px' },
        //   // => @media (max-width: 1535px) { ... }
        //   xlmax: { max: '1279px' },
        //   // => @media (max-width: 1279px) { ... }
        //   lgmax: { max: '1023px' },
        //   // => @media (max-width: 1023px) { ... }
        //   mdmax: { max: '767px' },
        //   // => @media (max-width: 767px) { ... }
        //   smmax: { max: '639px' },
        //   // => @media (max-width: 639px) { ... }
      },
    },
    extend: {
      /* https://color.adobe.com/pl/portfolio%20pattern-color-theme-10540641 */
      /* Color Theme Swatches in Hex */
      // .p1 { color: #91A0A7; }
      // .p2 { color: #BDD0D7; }
      // .p3 { color: #C0AB94; }
      // .p4 { color: #F4F3F0; }
      // .p5 { color: #595957; }
      colors: {
        p: {
          1: '#91A0A7',
          2: '#BDD0D7',
          3: '#C0AB94',
          4: '#F4F3F0',
          5: '#595957',
        },
        // p1: '#91A0A7',
        // p2: '#BDD0D7',
        // p3: '#C0AB94',
        // p4: '#F4F3F0',
        // p5: '#595957',

        // primary: {
        //   50: '#fff9eb',
        //   100: '#ffefc6',
        //   200: '#ffdd88',
        //   300: '#ffc54a',
        //   400: '#ffaf24',
        //   500: '#f98a07',
        //   600: '#dd6402',
        //   700: '#b74406',
        //   800: '#94330c',
        //   900: '#7a2b0d',
        //   950: '#461402',
        // },
        // p: colors.amber,
        // s: colors.red,
        // s: colors.green,
        // bs: colors.green,
        // defaultbackground: 'var(--defaultbackground)',
        // db: 'var(--db)',
        // defaulttext: 'var(--defaulttext)',
        // dt: 'var(--dt)',
        // 'custom-facebook-blue': '#3b5998',
        // 'custom-twitter-blue': '#55acee',
      },
    },
    safelist: [
      // 'max-w-[50px]',
      // 'bg-defaultbackground',
      // 'text-defaulttext',
      // 'bg-white',
      // 'text-white',
      // 'bg-black',
      // 'text-black',
      // {
      //   pattern: /max-w-[(80|100|150|200|250|300)px]/,
      // },
    ],
  },
  darkMode: 'class',
  plugins: [],
  // plugins: [require('@tailwindcss/typography')],
};
