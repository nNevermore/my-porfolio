import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        p: {
          1: 'hsl(var(--p-1))',
          2: 'hsl(var(--p-2))',
          3: 'hsl(var(--p-3))',
          4: 'hsl(var(--p-4))',
          5: 'hsl(var(--p-5))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;

// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     container: {
//       center: true,
//       padding: {
//         DEFAULT: '1rem',
//         sm: '1rem',
//         lg: '1rem',
//         xl: '1rem',
//         '2xl': '3rem',
//       },
//       screens: {
//         sm: '100%',
//         lg: '1024px',
//         xl: '1280px',
//         '2xl': '1600px',
//         //   '2xlmax': { max: '1535px' },
//         //   // => @media (max-width: 1535px) { ... }
//         //   xlmax: { max: '1279px' },
//         //   // => @media (max-width: 1279px) { ... }
//         //   lgmax: { max: '1023px' },
//         //   // => @media (max-width: 1023px) { ... }
//         //   mdmax: { max: '767px' },
//         //   // => @media (max-width: 767px) { ... }
//         //   smmax: { max: '639px' },
//         //   // => @media (max-width: 639px) { ... }
//       },
//     },
//     extend: {
//       /* https://color.adobe.com/pl/portfolio%20pattern-color-theme-10540641 */
//       /* Color Theme Swatches in Hex */
//       // .p1 { color: #91A0A7; }
//       // .p2 { color: #BDD0D7; }
//       // .p3 { color: #C0AB94; }
//       // .p4 { color: #F4F3F0; }
//       // .p5 { color: #595957; }
//       colors: {
//         p: {
//           1: '#91A0A7',
//           2: '#BDD0D7',
//           3: '#C0AB94',
//           4: '#F4F3F0',
//           5: '#595957',
//         },
//         primary: {
//           1: '#91A0A7',
//           2: '#BDD0D7',
//           3: '#C0AB94',
//           4: '#F4F3F0',
//           5: '#595957',
//         },
//         // p1: '#91A0A7',
//         // p2: '#BDD0D7',
//         // p3: '#C0AB94',
//         // p4: '#F4F3F0',
//         // p5: '#595957',

//         // primary: {
//         //   50: '#fff9eb',
//         //   100: '#ffefc6',
//         //   200: '#ffdd88',
//         //   300: '#ffc54a',
//         //   400: '#ffaf24',
//         //   500: '#f98a07',
//         //   600: '#dd6402',
//         //   700: '#b74406',
//         //   800: '#94330c',
//         //   900: '#7a2b0d',
//         //   950: '#461402',
//         // },
//         // p: colors.amber,
//         // s: colors.red,
//         // s: colors.green,
//         // bs: colors.green,
//         // defaultbackground: 'var(--defaultbackground)',
//         // db: 'var(--db)',
//         // defaulttext: 'var(--defaulttext)',
//         // dt: 'var(--dt)',
//         // 'custom-facebook-blue': '#3b5998',
//         // 'custom-twitter-blue': '#55acee',
//       },
//     },
//     safelist: [
//       // 'max-w-[50px]',
//       // 'bg-defaultbackground',
//       // 'text-defaulttext',
//       // 'bg-white',
//       // 'text-white',
//       // 'bg-black',
//       // 'text-black',
//       // {
//       //   pattern: /max-w-[(80|100|150|200|250|300)px]/,
//       // },
//     ],
//   },
//   darkMode: 'class',
//   plugins: [],
//   // plugins: [require('@tailwindcss/typography')],
// };
