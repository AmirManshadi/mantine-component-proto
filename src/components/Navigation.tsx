import { Container, Group, Button, Box } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import { APP_CONFIG, NAV_ITEMS } from "../config/constants";

export function Navigation() {
	return (
		<Box
			component="nav"
			p={APP_CONFIG.navHeight}
			style={{
				backgroundColor: "#1f2937",
				color: "white",
				boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
			}}
		>
			<Container size={APP_CONFIG.containerSize}>
				<Group justify="space-between" align="center">
					<h1
						style={{
							fontSize: "1.5rem",
							fontWeight: "bold",
							margin: 0,
							color: "white"
						}}
					>
						{APP_CONFIG.name}
					</h1>
					<Group gap="md">
						{NAV_ITEMS.map(item => (
							<Link key={item.path} to={item.path}>
								{({ isActive }) => (
									<Button
										variant={isActive ? "filled" : "subtle"}
										component="button"
									>
										{item.label}
									</Button>
								)}
							</Link>
						))}
					</Group>
				</Group>
			</Container>
		</Box>
	);
}
