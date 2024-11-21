/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
        colors: {
			background: "#101010",
			foreground: "white",
			primary: "#4169E1",
			level: {
				good: "#5ed23b",
				bad: "#f14f14"
			}
		},
		fontFamily: {
			quicksand: "Quicksand"
		}
    },
  },
  plugins: [],
}

