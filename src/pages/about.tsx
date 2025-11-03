import { Container, Title, Text, Button, Group } from "@mantine/core";
import { Link } from "@tanstack/react-router";

export default function About() {
	return (
		<Container size="md" className="py-8">
			<Title order={1} className="mb-4 text-3xl font-bold">
				About MyApp
			</Title>
			<Text className="text-lg text-gray-600 mb-4">
				This page demonstrates TanStack Router's capability to handle multiple
				routes and navigate between them seamlessly. TanStack Router is a modern
				routing solution for React applications with excellent TypeScript
				support.
			</Text>
			<Text className="font-semibold mb-2">
				<strong>Key Features:</strong>
			</Text>
			<ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
				<li>Type-safe routing</li>
				<li>Nested routes support</li>
				<li>Built-in error handling</li>
				<li>Search params and hash support</li>
			</ul>
			<Group>
				<Link to="/">
					<Button variant="outline">Back to Home</Button>
				</Link>
			</Group>
		</Container>
	);
}
