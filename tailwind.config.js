/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				sprint: {
					"0%": { transform: "translate(0, 0)" },
					"100%": { transform: "translate(-130em, 0)" }
				}
			},
			fontFamily: {
				frederickaTheGreat: [
					'"Fredericka the Great"',
					"Times New Roman"
				],
				gluten: ['"Gluten"', "cursive"]
			},
			animation: {
				sprint: "sprint 4s linear infinite"
			}
		}
	},
	plugins: []
};
