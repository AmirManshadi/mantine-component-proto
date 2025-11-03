import { Container, Title, Text, Card, Group, Badge } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import { IconButton, IconAlertCircle } from "@tabler/icons-react";

const components = [
	{
		name: "Button",
		description: "Interactive button component with multiple variants and sizes",
		path: "/components/button",
		icon: IconButton,
		color: "blue"
	},
	{
		name: "Alert",
		description: "Alert component for displaying messages and notifications",
		path: "/components/alert",
		icon: IconAlertCircle,
		color: "red"
	}
];

export default function Home() {
	return (
		<Container size="lg" className="py-8">
			<div className="mb-12">
				<Title order={1} className="mb-4 text-4xl font-bold">
					Component Showcase
				</Title>
				<Text className="text-lg text-gray-600">
					Explore and interact with our collection of reusable UI components built with Mantine UI and Tailwind CSS.
				</Text>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{components.map((component) => {
					const IconComponent = component.icon;
					return (
						<Link key={component.path} to={component.path}>
							<Card
								shadow="md"
								p="lg"
								radius="md"
								className="h-full cursor-pointer transition-all hover:shadow-lg hover:scale-105 bg-white border border-gray-200"
							>
								<div className="flex items-start justify-between mb-4">
									<div className="flex items-center gap-3">
										<div
											className={`p-3 rounded-lg`}
											style={{
												backgroundColor: `var(--mantine-color-${component.color}-0)`
											}}
										>
											<IconComponent
												size={24}
												style={{
													color: `var(--mantine-color-${component.color}-6)`
												}}
											/>
										</div>
										<div>
											<Title order={3} className="text-xl font-bold">
												{component.name}
											</Title>
										</div>
									</div>
									<Badge color={component.color} variant="light">
										Component
									</Badge>
								</div>

								<Text size="sm" c="dimmed" className="mb-4">
									{component.description}
								</Text>

								<Group justify="flex-end">
									<Text
										size="sm"
										className="text-blue-600 font-semibold hover:text-blue-700"
									>
										Explore →
									</Text>
								</Group>
							</Card>
						</Link>
					);
				})}
			</div>

			<div className="mt-12 p-8 bg-gray-50 rounded-lg">
				<Title order={2} className="text-2xl font-bold mb-4">
					About This App
				</Title>
				<Text className="text-gray-600 mb-4">
					This application demonstrates a modern React development setup with:
				</Text>
				<ul className="list-disc list-inside space-y-2 text-gray-600">
					<li>React 19 with TypeScript for type safety</li>
					<li>Vite for fast development and optimized builds</li>
					<li>Mantine UI for beautiful, accessible components</li>
					<li>TanStack Router for powerful client-side routing</li>
					<li>Tailwind CSS for utility-first styling</li>
				</ul>
			</div>
		</Container>
	);
}
