import { Button, Group } from "@mantine/core";
import { ComponentShowcase } from "../../components/ComponentShowcase";

export default function ButtonShowcase() {
	return (
		<ComponentShowcase
			title="Button Component"
			description="Explore different button styles and variants available in Mantine UI."
			sections={[
				{
					title: "Basic Buttons",
					children: (
						<Group>
							<Button>Default</Button>
							<Button color="blue">Blue</Button>
							<Button color="red">Red</Button>
							<Button color="green">Green</Button>
						</Group>
					)
				},
				{
					title: "Button Variants",
					children: (
						<Group>
							<Button variant="filled">Filled</Button>
							<Button variant="outline">Outline</Button>
							<Button variant="subtle">Subtle</Button>
							<Button variant="default">Default</Button>
						</Group>
					)
				},
				{
					title: "Button Sizes",
					children: (
						<Group>
							<Button size="xs">Extra Small</Button>
							<Button size="sm">Small</Button>
							<Button size="md">Medium</Button>
							<Button size="lg">Large</Button>
							<Button size="xl">Extra Large</Button>
						</Group>
					)
				},
				{
					title: "Button States",
					children: (
						<Group>
							<Button>Normal</Button>
							<Button disabled>Disabled</Button>
							<Button loading>Loading</Button>
						</Group>
					)
				}
			]}
		/>
	);
}
