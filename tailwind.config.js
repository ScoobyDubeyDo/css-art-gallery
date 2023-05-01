/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				frederickaTheGreat: [
					'"Fredericka the Great"',
					"Times New Roman"
				],
				gluten: ['"Gluten"', "cursive"]
			}
		}
	},
	plugins: []
};
