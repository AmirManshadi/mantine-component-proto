import { Outlet } from "@tanstack/react-router";
import { Container, Box } from "@mantine/core";
import { Navigation } from "../components/Navigation";
import { APP_CONFIG } from "../config/constants";

export default function RootLayout() {
	return (
		<Box
			style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
		>
			<Navigation />

			<Box component="main" style={{ flex: 1 }}>
				<Container size={APP_CONFIG.containerSize} py="lg">
					<Outlet />
				</Container>
			</Box>
		</Box>
	);
}
