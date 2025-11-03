import {
	createRootRoute,
	createRoute,
	createRouter
} from "@tanstack/react-router";
import RootLayout from "./pages/root-layout.tsx";
import Home from "./pages/home.tsx";
import About from "./pages/about.tsx";
import NotFound from "./pages/not-found.tsx";

// Root route
const rootRoute = createRootRoute({
	component: RootLayout
});

// Home route
const homeRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: Home
});

// About route
const aboutRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/about",
	component: About
});

// Not found route (catch-all)
const notFoundRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "*",
	component: NotFound
});

// Create route tree
const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, notFoundRoute]);

// Create router
export const router = createRouter({ routeTree });

// Register router for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
