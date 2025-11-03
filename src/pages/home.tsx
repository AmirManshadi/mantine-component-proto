import {
	Container,
	Title,
	Text,
	Card,
	Group,
	Badge,
	Stack,
	SimpleGrid
} from "@mantine/core";
import { Link } from "@tanstack/react-router";
import { COMPONENT_SHOWCASE_ITEMS, APP_CONFIG } from "../config/constants";

export default function Home() {
	return (
		<Container size={APP_CONFIG.containerSize}>
			<Stack gap="xl">
				<div>
					<Title order={1} mb="md">
						Component Showcase
					</Title>
					<Text size="lg" c="dimmed">
						Explore and interact with our collection of reusable UI components
						built with Mantine UI.
					</Text>
				</div>

				<SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
					{COMPONENT_SHOWCASE_ITEMS.map(component => {
						const IconComponent = component.icon;
						return (
							<Link key={component.path} to={component.path}>
								<Card
									shadow="md"
									p="lg"
									radius="md"
									style={{ cursor: "pointer", height: "100%" }}
									withBorder
								>
									<Group justify="space-between" mb="md">
										<Group>
											<div
												style={{
													padding: "0.75rem",
													borderRadius: "0.5rem",
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
											<Title order={3}>{component.name}</Title>
										</Group>
										<Badge color={component.color} variant="light">
											Component
										</Badge>
									</Group>

									<Text size="sm" c="dimmed" mb="md">
										{component.description}
									</Text>

									<Group justify="flex-end">
										<Text size="sm" c="blue" fw={600}>
											Explore →
										</Text>
									</Group>
								</Card>
							</Link>
						);
					})}
				</SimpleGrid>

				<Card withBorder p="lg" radius="md">
					<Stack gap="md">
						<Title order={2}>About This App</Title>
						<Text c="dimmed">
							This application demonstrates a modern React development setup
							with:
						</Text>
						<ul style={{ marginLeft: "1.5rem", paddingLeft: 0 }}>
							<li>React 19 with TypeScript for type safety</li>
							<li>Vite for fast development and optimized builds</li>
							<li>Mantine UI for beautiful, accessible components</li>
							<li>TanStack Router for powerful client-side routing</li>
						</ul>
					</Stack>
				</Card>
			</Stack>
		</Container>
	);
}
