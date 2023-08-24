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
			height: {
				500: '500px',
				350: '350px',
				15: '64px',
				form: '600px',
			},
			animation: {
				'spin-slow': 'spin 15s linear infinite',
			},
			blur: {
				'5xl': '200px',
			},
			width: {
				'200': '200px',
				'95/10': '95%',
			},
			colors: {
				'background': '#161b33',
				'b2': '#2F3253',
				'b3': '#474973',
				'b4': '#685D6F',
				'b5': '#9A8C94',
				'b6': '#CCBBB8',
				'b7': '#DFCBBE',
				'b8': '#F1DAC4',
				'b9': '#F3E2D3',
				'b10': '#F4EAE1',
				'blouse': '#fcc75f',
				'background2': '#F2F5FF',
				'accent': '#A974FF',
				'text-bold': '#25386E',
				'text-gray': '#A3B5E0',
				'menu-light': '#FAFBFE',
				'gray1': '#191919',
				'gray2': '#282828',
				'graylight': '#2F2D2E',
				'accent': '#A974FF',
				'txtgray': '#CDCDCD',
				'borderdark': '#1A1A1A',
			},
			fontFamily: {
				sans: ['var(--font-poppins)'],
				mono: ['var(--font-roboto-mono)'],
			},
		},
	},
	plugins: [],
};
