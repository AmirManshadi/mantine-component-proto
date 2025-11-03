import { Container, Title, Text, Button, Group, Stack } from "@mantine/core";
import { Link } from "@tanstack/react-router";

export default function NotFound() {
	return (
		<Container size="md">
			<Stack gap="lg" align="center" ta="center">
				<Title order={1} c="red">
					404 - Page Not Found
				</Title>
				<Text size="lg" c="dimmed">
					Sorry, the page you're looking for doesn't exist. It might have been
					moved or deleted.
				</Text>
				<Group justify="center">
					<Link to="/">
						<Button>Go Back Home</Button>
					</Link>
				</Group>
			</Stack>
		</Container>
	);
}
