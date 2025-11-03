import { IconAlertCircle, IconBubble } from "@tabler/icons-react";

/**
 * App configuration constants
 */
export const APP_CONFIG = {
	name: "Yadakito Proto",
	basePath: "/mantine-component-proto",
	containerSize: "lg" as const,
	navHeight: "md" as const
} as const;

/**
 * Navigation menu items
 */
export const NAV_ITEMS = [
	{
		label: "Home",
		path: "/"
	},
	{
		label: "About",
		path: "/about"
	}
] as const;

/**
 * Component showcase metadata
 */
export const COMPONENT_SHOWCASE_ITEMS = [
	{
		name: "Button",
		description:
			"Interactive button component with multiple variants and sizes",
		path: "/components/button",
		icon: IconBubble,
		color: "blue"
	},
	{
		name: "Alert",
		description: "Alert component for displaying messages and notifications",
		path: "/components/alert",
		icon: IconAlertCircle,
		color: "red"
	}
] as const;
