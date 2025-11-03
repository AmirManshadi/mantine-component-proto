import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import { theme } from "./config/theme";

function App() {
	return (
		<MantineProvider theme={theme}>
			<RouterProvider router={router} />
		</MantineProvider>
	);
}

export default App;
