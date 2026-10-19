// Mastering ContextAPI

import { Dashboard } from "./components/Dashboard";
import { ThemeButton } from "./components/ThemeButton";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
	return (
		<div className="App">
			<ThemeProvider>
				<Dashboard>
					<ThemeButton />
				</Dashboard>
			</ThemeProvider>
		</div>
	);
}
