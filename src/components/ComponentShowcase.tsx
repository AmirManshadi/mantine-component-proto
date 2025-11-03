import {
	Container,
	Stack,
	Group,
	Button,
	Card,
	Title,
	Text
} from "@mantine/core";
import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";

interface Section {
	title: string;
	description?: string;
	children: ReactNode;
}

interface ComponentShowcaseProps {
	title: string;
	description: string;
	sections: Section[];
}

/**
 * Reusable template component for component showcase pages
 * Reduces code duplication and maintains consistent structure
 */
export function ComponentShowcase({
	title,
	description,
	sections
}: ComponentShowcaseProps) {
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
						{title}
					</Title>
					<Text size="lg" c="dimmed" mb="lg">
						{description}
					</Text>
				</div>

				{sections.map((section, index) => (
					<Card key={index} withBorder p="lg">
						<Title order={2} mb="md">
							{section.title}
						</Title>
						{section.description && (
							<Text size="sm" c="dimmed" mb="md">
								{section.description}
							</Text>
						)}
						{section.children}
					</Card>
				))}
			</Stack>
		</Container>
	);
}
