import {
	Container,
	Title,
	Text,
	Button,
	Group,
	Stack,
	Card
} from "@mantine/core";
import { Link } from "@tanstack/react-router";

export default function ButtonShowcase() {
	return (
		<Container size="md">
			<Stack gap="lg">
				<Group mb="lg">
					<Link to="/">
						<Button variant="outline">← Back Home</Button>
					</Link>
				</Group>

				<div>
					<Title order={1} mb="md">
						Button Component
					</Title>
					<Text size="lg" c="dimmed" mb="lg">
						Explore different button styles and variants available in Mantine
						UI.
					</Text>
				</div>

				<Card withBorder p="lg">
					<Title order={2} mb="md">
						Basic Buttons
					</Title>
					<Group>
						<Button>Default</Button>
						<Button color="blue">Blue</Button>
						<Button color="red">Red</Button>
						<Button color="green">Green</Button>
					</Group>
				</Card>

				<Card withBorder p="lg">
					<Title order={2} mb="md">
						Button Variants
					</Title>
					<Group>
						<Button variant="filled">Filled</Button>
						<Button variant="outline">Outline</Button>
						<Button variant="subtle">Subtle</Button>
						<Button variant="default">Default</Button>
					</Group>
				</Card>

				<Card withBorder p="lg">
					<Title order={2} mb="md">
						Button Sizes
					</Title>
					<Group>
						<Button size="xs">Extra Small</Button>
						<Button size="sm">Small</Button>
						<Button size="md">Medium</Button>
						<Button size="lg">Large</Button>
						<Button size="xl">Extra Large</Button>
					</Group>
				</Card>

				<Card withBorder p="lg">
					<Title order={2} mb="md">
						Button States
					</Title>
					<Group>
						<Button>Normal</Button>
						<Button disabled>Disabled</Button>
						<Button loading>Loading</Button>
					</Group>
				</Card>
			</Stack>
		</Container>
	);
}
