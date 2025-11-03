import { Container, Title, Text, Button, Group } from "@mantine/core";
import { Link } from "@tanstack/react-router";

export default function NotFound() {
	return (
		<Container size="md" className="py-8 text-center">
			<Title order={1} className="mb-4 text-4xl font-bold text-red-600">
				404 - Page Not Found
			</Title>
			<Text className="text-lg text-gray-600 mb-6">
				Sorry, the page you're looking for doesn't exist. It might have been
				moved or deleted.
			</Text>
			<Group justify="center">
				<Link to="/">
					<Button className="bg-blue-600 hover:bg-blue-700">
						Go Back Home
					</Button>
				</Link>
			</Group>
		</Container>
	);
}
