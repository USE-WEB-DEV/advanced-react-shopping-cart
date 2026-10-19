import { useTheme } from "../hooks/useTheme";

export function ThemeButton() {
	const { theme, setTheme } = useTheme();

	return (
		<button
			type="button"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
		>
			Current Theme: {theme}
		</button>
	);
}
