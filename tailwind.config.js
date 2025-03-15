/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", ".theseed-dark-mode"],
	content: ["./**/*.ejs"],
	safelist: ["dark"],
	corePlugins: {
		preflight: false,
	},
  theme: {
    extend: {},
  },
  plugins: [],
}

