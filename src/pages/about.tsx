import { Container, Title, Text, Button, Group, Stack } from "@mantine/core";
import { Link } from "@tanstack/react-router";

export default function About() {
	return (
		<Container size="md">
			<Stack gap="lg">
				<div>
					<Title order={1} mb="md">
						About MyApp
					</Title>
					<Text size="lg" c="dimmed" mb="md">
						This page demonstrates TanStack Router's capability to handle
						multiple routes and navigate between them seamlessly. TanStack
						Router is a modern routing solution for React applications with
						excellent TypeScript support.
					</Text>
				</div>

				<div>
					<Title order={2} mb="md">
						Key Features:
					</Title>
					<ul style={{ marginLeft: "1.5rem", paddingLeft: 0, lineHeight: 1.8 }}>
						<li>Type-safe routing</li>
						<li>Nested routes support</li>
						<li>Built-in error handling</li>
						<li>Search params and hash support</li>
					</ul>
				</div>

				<Group>
					<Link to="/">
						<Button variant="outline">Back to Home</Button>
					</Link>
				</Group>
			</Stack>
		</Container>
	);
}
