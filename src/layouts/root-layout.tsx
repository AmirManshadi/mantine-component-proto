import { Outlet, Link } from "@tanstack/react-router";
import { Container, Group, Button, Box } from "@mantine/core";

export default function RootLayout() {
	return (
		<Box style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
			<Box
				component="nav"
				p="md"
				style={{ backgroundColor: "#1f2937", color: "white", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
			>
				<Container size="lg">
					<Group justify="space-between" align="center">
						<h1 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0, color: "white" }}>
							MyApp
						</h1>
						<Group gap="md">
							<Link to="/">
								{({ isActive }) => (
									<Button
										variant={isActive ? "filled" : "subtle"}
										component="button"
									>
										Home
									</Button>
								)}
							</Link>
							<Link to="/about">
								{({ isActive }) => (
									<Button
										variant={isActive ? "filled" : "subtle"}
										component="button"
									>
										About
									</Button>
								)}
							</Link>
						</Group>
					</Group>
				</Container>
			</Box>

			<Box component="main" style={{ flex: 1 }}>
				<Container size="lg" py="lg">
					<Outlet />
				</Container>
			</Box>
		</Box>
	);
}
