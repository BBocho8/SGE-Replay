/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				btn: "0 1px 3px rgba(0, 0, 0, 0.2)",
			},
			fontFamily: {
				sans: ['"Roboto"', ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				nav: "1.5rem",
				linksNav: "1rem",
				h1: "3rem",
				h2: "2rem",
				h3: "1.5rem",
				h4: "0.875rem",
				h1BigScreen: "4rem",
				h2BigScreen: "2rem",
				h3BigScreen: "1rem",
				h4BigScreen: "1rem",
				body: "1rem",
				btn: "0.875rem",
			},
			lineHeight: {
				header: "1.25",
				headerBigScreen: "1",
			},
			height: {
				nav: "calc(100vh - 72px)",
			},
			letterSpacing: {
				header: "0.25rem",
				btn: "0.25rem",
			},
			padding: {
				btnX: "0.75rem",
				btnY: "0.375rem",
			},
			screens: {
				nav: "800px",
			},
		},
	},
	plugins: [],
}
