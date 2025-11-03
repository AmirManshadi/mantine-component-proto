import { Alert, Stack } from "@mantine/core";
import { IconAlertCircle, IconCheck, IconInfoCircle } from "@tabler/icons-react";
import { ComponentShowcase } from "../../components/ComponentShowcase";

export default function AlertShowcase() {
	return (
		<ComponentShowcase
			title="Alert Component"
			description="Explore different alert styles and variants available in Mantine UI."
			sections={[
				{
					title: "Alert Variants",
					children: (
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
					)
				},
				{
					title: "Alert with Icons",
					children: (
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
					)
				},
				{
					title: "Closeable Alerts",
					children: (
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
					)
				}
			]}
		/>
	);
}
