import type {Config} from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  prefix: '',
  theme: {
    extend: {
      screens: {
        /* CUSTOMIZE NEW SCREEN */
        mobile_max: {max: '480px'},
        tablet_max: {max: '1279px'},
        laptop: '1280px',
      },
      colors: {
        muted: '#475569',
        link: '#006FEE',
        default: {
          DEFAULT: '#0F172A',
        },
        primary: {
          DEFAULT: '#006FEE',
        },
        secondary: {
          DEFAULT: '#9353D3',
        },
        success: {
          DEFAULT: '#17C964',
        },
        warning: {
          DEFAULT: '#F5A524',
        },
        error: {
          DEFAULT: '#dc2626',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
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
