import {colors} from '@starter-ui/theme'
import {Config} from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@starter-ui/core/dist/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
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
        tablet_max: {max: '1027px'},
        laptop: '1280px',
      },
      colors: {
        ...colors,
      },
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
