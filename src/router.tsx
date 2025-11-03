import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routes";
import { APP_CONFIG } from "./config/constants";

// Create router instance with centralized route definitions
export const router = createRouter({
	routeTree,
	basepath: APP_CONFIG.basePath
});

// Register router for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
