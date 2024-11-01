/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#3958BD',
				'light': '#4571D4',
				'accent': '#2B39A1',
				'background': '#010101'
			}
		},
	},
	plugins: [],
}
