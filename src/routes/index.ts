import { createRootRoute, createRoute } from "@tanstack/react-router";
import RootLayout from "../layouts/root-layout";
import Home from "../pages/home";
import About from "../pages/about";
import ButtonShowcase from "../pages/components/button";
import AlertShowcase from "../pages/components/alert";
import NotFound from "../pages/not-found";

// Root route
export const rootRoute = createRootRoute({
	component: RootLayout
});

// Home route
export const homeRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: Home
});

// About route
export const aboutRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/about",
	component: About
});

// Button Showcase route
export const buttonShowcaseRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/components/button",
	component: ButtonShowcase
});

// Alert Showcase route
export const alertShowcaseRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/components/alert",
	component: AlertShowcase
});

// Not found route (catch-all)
export const notFoundRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "*",
	component: NotFound
});

// Export route tree
export const routeTree = rootRoute.addChildren([
	homeRoute,
	aboutRoute,
	buttonShowcaseRoute,
	alertShowcaseRoute,
	notFoundRoute
]);
