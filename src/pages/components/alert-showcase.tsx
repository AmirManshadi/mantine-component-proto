import { Container, Title, Text, Button, Alert, Group, Stack, Card } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import {
	IconAlertCircle,
	IconCheck,
	IconInfoCircle
} from "@tabler/icons-react";

export default function AlertShowcase() {
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
						Alert Component
					</Title>
					<Text size="lg" c="dimmed" mb="lg">
						Explore different alert styles and variants available in Mantine UI.
					</Text>
				</div>

				<Card withBorder p="lg">
					<Title order={2} mb="md">
						Alert Variants
					</Title>
					<Stack gap="md">
						<Alert title="Light Alert" color="blue">
							This is a light blue alert with a title.
						</Alert>
						<Alert title="Filled Alert" color="red" variant="filled">
							This is a filled red alert with a title.
						</Alert>
						<Alert title="Outline Alert" color="green" variant="outline">
							This is an outline green alert with a title.
						</Alert>
					</Stack>
				</Card>

				<Card withBorder p="lg">
					<Title order={2} mb="md">
						Alert with Icons
					</Title>
					<Stack gap="md">
						<Alert
							icon={<IconAlertCircle size={16} />}
							title="Warning"
							color="yellow"
						>
							This is a warning alert with an icon.
						</Alert>
						<Alert
							icon={<IconCheck size={16} />}
							title="Success"
							color="green"
						>
							This is a success alert with an icon.
						</Alert>
						<Alert
							icon={<IconInfoCircle size={16} />}
							title="Information"
							color="blue"
						>
							This is an information alert with an icon.
						</Alert>
					</Stack>
				</Card>

				<Card withBorder p="lg">
					<Title order={2} mb="md">
						Closeable Alerts
					</Title>
					<Stack gap="md">
						<Alert
							title="Closeable Alert"
							color="blue"
							withCloseButton
							onClose={() => alert("Alert closed!")}
						>
							This alert can be closed by clicking the close button.
						</Alert>
					</Stack>
				</Card>
			</Stack>
		</Container>
	);
}
