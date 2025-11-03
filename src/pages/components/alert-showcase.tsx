import { Container, Title, Text, Button, Alert, Group } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import { IconAlertCircle, IconCheck, IconInfoCircle } from "@tabler/icons-react";

export default function AlertShowcase() {
	return (
		<Container size="md" className="py-8">
			<Group mb="lg">
				<Link to="/">
					<Button variant="outline">← Back Home</Button>
				</Link>
			</Group>

			<Title order={1} className="mb-4 text-3xl font-bold">
				Alert Component
			</Title>
			<Text className="text-lg text-gray-600 mb-8">
				Explore different alert styles and variants available in Mantine UI.
			</Text>

			<div className="space-y-6">
				<div className="bg-gray-50 p-6 rounded-lg">
					<Title order={2} className="text-xl font-semibold mb-4">
						Alert Variants
					</Title>
					<div className="space-y-4">
						<Alert title="Light Alert" color="blue">
							This is a light blue alert with a title.
						</Alert>
						<Alert title="Filled Alert" color="red" variant="filled">
							This is a filled red alert with a title.
						</Alert>
						<Alert title="Outline Alert" color="green" variant="outline">
							This is an outline green alert with a title.
						</Alert>
					</div>
				</div>

				<div className="bg-gray-50 p-6 rounded-lg">
					<Title order={2} className="text-xl font-semibold mb-4">
						Alert with Icons
					</Title>
					<div className="space-y-4">
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
					</div>
				</div>

				<div className="bg-gray-50 p-6 rounded-lg">
					<Title order={2} className="text-xl font-semibold mb-4">
						Closeable Alerts
					</Title>
					<div className="space-y-4">
						<Alert
							title="Closeable Alert"
							color="blue"
							withCloseButton
							onClose={() => alert("Alert closed!")}
						>
							This alert can be closed by clicking the close button.
						</Alert>
					</div>
				</div>
			</div>
		</Container>
	);
}
