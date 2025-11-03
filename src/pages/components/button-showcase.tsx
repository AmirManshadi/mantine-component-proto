import { Container, Title, Text, Button, Group } from "@mantine/core";
import { Link } from "@tanstack/react-router";

export default function ButtonShowcase() {
	return (
		<Container size="md" className="py-8">
			<Group mb="lg">
				<Link to="/">
					<Button variant="outline">← Back Home</Button>
				</Link>
			</Group>

			<Title order={1} className="mb-4 text-3xl font-bold">
				Button Component
			</Title>
			<Text className="text-lg text-gray-600 mb-8">
				Explore different button styles and variants available in Mantine UI.
			</Text>

			<div className="space-y-8">
				<div className="bg-gray-50 p-6 rounded-lg">
					<Title order={2} className="text-xl font-semibold mb-4">
						Basic Buttons
					</Title>
					<Group>
						<Button>Default</Button>
						<Button color="blue">Blue</Button>
						<Button color="red">Red</Button>
						<Button color="green">Green</Button>
					</Group>
				</div>

				<div className="bg-gray-50 p-6 rounded-lg">
					<Title order={2} className="text-xl font-semibold mb-4">
						Button Variants
					</Title>
					<Group>
						<Button variant="filled">Filled</Button>
						<Button variant="outline">Outline</Button>
						<Button variant="subtle">Subtle</Button>
						<Button variant="default">Default</Button>
					</Group>
				</div>

				<div className="bg-gray-50 p-6 rounded-lg">
					<Title order={2} className="text-xl font-semibold mb-4">
						Button Sizes
					</Title>
					<Group>
						<Button size="xs">Extra Small</Button>
						<Button size="sm">Small</Button>
						<Button size="md">Medium</Button>
						<Button size="lg">Large</Button>
						<Button size="xl">Extra Large</Button>
					</Group>
				</div>

				<div className="bg-gray-50 p-6 rounded-lg">
					<Title order={2} className="text-xl font-semibold mb-4">
						Button States
					</Title>
					<Group>
						<Button>Normal</Button>
						<Button disabled>Disabled</Button>
						<Button loading>Loading</Button>
					</Group>
				</div>
			</div>
		</Container>
	);
}
