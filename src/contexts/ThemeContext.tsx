import {
	createContext,
	type Dispatch,
	type PropsWithChildren,
	useState,
} from "react";

export type ThemeOptions = "light" | "dark";
export type ThemeContextType = null | {
	theme: ThemeOptions;
	setTheme: Dispatch<React.SetStateAction<ThemeOptions>>;
};

export const ThemeContext = createContext<ThemeContextType>(null);

export function ThemeProvider({ children }: PropsWithChildren) {
	const [theme, setTheme] = useState<ThemeOptions>("light");

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
