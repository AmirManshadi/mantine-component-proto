import { Container, Title, Text, Button } from "@mantine/core";
import { Link } from "@tanstack/react-router";

export default function Home() {
	return (
		<Container size="md" className="py-8">
			<Title order={1} className="mb-4 text-3xl font-bold">
				Welcome to MyApp
			</Title>
			<Text className="text-lg text-gray-600 mb-6">
				This is a modern React application built with Vite, Mantine UI, TanStack
				Router, and Tailwind CSS.
			</Text>
			<Link to="/about">
				<Button className="bg-blue-600 hover:bg-blue-700">Learn More</Button>
			</Link>
		</Container>
	);
}
