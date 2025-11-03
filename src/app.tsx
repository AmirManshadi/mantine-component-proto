import "@mantine/core/styles.css";
import {
	MantineProvider,
	colorsTuple,
	createTheme,
	type MantineColorsTuple
} from "@mantine/core";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";

const primaryColor = "#0066cc";
const colorTuple: MantineColorsTuple = colorsTuple(primaryColor);

const theme = createTheme({
	colors: { colorTuple }
});

function App() {
	return (
		<MantineProvider theme={theme}>
			<RouterProvider router={router} />
		</MantineProvider>
	);
}

export default App;
