import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				entriBlue: '#0061B5',
				blueContainer: '#E6F3FF',
				grayText: '#757575',
				darkGray: '#212121',
				footerBg: '#121212',
				footerText: '#808080',
				borderGray: '#B2B2B2',
				disabledBg: '#F0F0F0',
				disabledText: '#CFCFCF',
				lightBg: '#F6F6F6',
				borderLightGray: '#F0F0F0',
				borderDarkGray: '#2C2C2C',
				greenText: '#00FF00',
				redText: '#FF0000'
			},
			fontSize: {
				'4xl': '40px',
			},
			fontFamily: {
				sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
