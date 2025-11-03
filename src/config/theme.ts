import { colorsTuple, createTheme, type MantineColorsTuple } from "@mantine/core";

const PRIMARY_COLOR = "#0066cc";
const colorTuple: MantineColorsTuple = colorsTuple(PRIMARY_COLOR);

export const theme = createTheme({
	colors: {
		colorTuple
	}
});
