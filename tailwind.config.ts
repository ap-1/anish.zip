import { fontFamily } from "tailwindcss/defaultTheme";
import { type Config } from "tailwindcss";

export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Satoshi", ...fontFamily.sans],
			},
			colors: {
				text: "var(--text)",
				background: "var(--background)",
				border: "var(--border)",
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				accent: "var(--accent)",
			},
		},
	},
	plugins: [],
} satisfies Config;
