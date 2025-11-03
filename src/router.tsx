import {
	createRootRoute,
	createRoute,
	createRouter
} from "@tanstack/react-router";
import RootLayout from "./layouts/root-layout.tsx";
import Home from "./pages/home.tsx";
import About from "./pages/about.tsx";
import ButtonShowcase from "./pages/components/button-showcase.tsx";
import AlertShowcase from "./pages/components/alert-showcase.tsx";
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

// Button Showcase route
const buttonShowcaseRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/components/button",
	component: ButtonShowcase
});

// Alert Showcase route
const alertShowcaseRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/components/alert",
	component: AlertShowcase
});

// Not found route (catch-all)
const notFoundRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "*",
	component: NotFound
});

// Create route tree
const routeTree = rootRoute.addChildren([
	homeRoute,
	aboutRoute,
	buttonShowcaseRoute,
	alertShowcaseRoute,
	notFoundRoute
]);

// Create router
export const router = createRouter({
	routeTree,
	basepath: "/mantine-component-proto"
});

// Register router for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
