/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
				mobile_max: { max: '480px' },
				tablet_max: { max: '1279px' },
				laptop: '1280px',
			},
			colors: {
				muted: '#475569',
				link: '#006FEE',
				default: {
					DEFAULT: '#11181C',
				},
				primary: {
					light: '#66AAF9',
					DEFAULT: '#006FEE',
					dark: '#005BC4',
				},
				secondary: {
					light: '#AE7EDE',
					DEFAULT: '#7828C8',
					dark: '#6020A0',
				},
				success: {
					light: '#74DFA2',
					DEFAULT: '#17C964',
					dark: '#12A150',
				},
				warning: {
					light: '#F9C97C',
					DEFAULT: '#F5A524',
					dark: '#C4841D',
				},
				error: {
					light: '#ef4444',
					DEFAULT: '#dc2626',
					dark: '#b91c1c',
				},
				grey: {
					light: '#e4e4e7',
					DEFAULT: '#d4d4d8',
					dark: '#a1a1aa',
				},
			},
			fontFamily: {
				sans: ['var(--font-inter)'],
			},
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		plugin(function ({ addComponents, addUtilities }) {
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
			});
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
			});
		}),
	],
};
