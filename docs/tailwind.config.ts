import type {Config} from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: [
    // => THE REASON
    // https://tailwindcss.com/docs/content-configuration#dynamic-class-names
    /*
      Using dynamic classes in tailwind-css is usually not recommended because tailwind uses tree-shaking i.e any class that wasn't declared in your source files, won't be generated in the output file.
    */

    // => SOLUTION TO FIX
    // https://tailwindcss.com/docs/content-configuration#safelisting-classes
    {
      pattern: /bg-(default|primary|secondary|success|warning|error)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    {
      pattern: /fill-(default|primary|secondary|success|warning|error)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    {
      pattern: /text-(sm|md|lg)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
  ],
  theme: {
    extend: {
      screens: {
        /* CUSTOMIZE NEW SCREEN */
        mobile_max: {max: '480px'},
        tablet_max: {max: '1279px'},
        laptop: '1280px',
      },
      // colors: {
      //   muted: '#475569',
      //   link: '#006FEE',
      //   default: {
      //     DEFAULT: '#11181C',
      //   },
      //   primary: {
      //     light: '#66AAF9',
      //     DEFAULT: '#006FEE',
      //     dark: '#005BC4',
      //   },
      //   secondary: {
      //     light: '#AE7EDE',
      //     DEFAULT: '#7828C8',
      //     dark: '#6020A0',
      //   },
      //   success: {
      //     light: '#74DFA2',
      //     DEFAULT: '#17C964',
      //     dark: '#12A150',
      //   },
      //   warning: {
      //     light: '#F9C97C',
      //     DEFAULT: '#F5A524',
      //     dark: '#C4841D',
      //   },
      //   error: {
      //     light: '#ef4444',
      //     DEFAULT: '#dc2626',
      //     dark: '#b91c1c',
      //   },
      //   grey: {
      //     light: '#e4e4e7',
      //     DEFAULT: '#d4d4d8',
      //     dark: '#a1a1aa',
      //   },
      // },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      transitionProperty: {
        size: 'width, height',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwind-scrollbar'),
    plugin(function ({addComponents, addUtilities}) {
      addComponents({
        '.flex-between': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.absolute-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.fixed-center': {
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      })
      addUtilities({
        '.overflow-y-auto': {
          'scroll-behavior': 'smooth',
          'scrollbar-width': 'thin',
        },
        '.overflow-x-auto': {
          'scroll-behavior': 'smooth',
          'scrollbar-width': 'thin',
        },
        '.overflow-auto': {
          'scroll-behavior': 'smooth',
          'scrollbar-width': 'thin',
        },
      })
    }),
  ],
}
export default config
