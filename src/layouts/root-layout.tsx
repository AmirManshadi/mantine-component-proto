import { Outlet, Link } from "@tanstack/react-router";
import { Container, Group, Button } from "@mantine/core";

export default function RootLayout() {
	return (
		<div className="min-h-screen flex flex-col">
			<nav className="bg-blue-600 text-white shadow-md">
				<Container size="lg">
					<Group justify="space-between" align="center" className="py-4">
						<h1 className="text-2xl font-bold">MyApp</h1>
						<Group gap="md">
							<Link to="/">
								{({ isActive }) => (
									<Button
										variant={isActive ? "filled" : "subtle"}
										component="button"
										className={isActive ? "bg-blue-700" : "hover:bg-blue-500"}
									>
										Home
									</Button>
								)}
							</Link>
							<Link to="/about">
								{({ isActive }) => (
									<Button
										variant={isActive ? "filled" : "subtle"}
										component="button"
										className={isActive ? "bg-blue-700" : "hover:bg-blue-500"}
									>
										About
									</Button>
								)}
							</Link>
						</Group>
					</Group>
				</Container>
			</nav>

			<main className="flex-1">
				<Container size="lg" className="py-8">
					<Outlet />
				</Container>
			</main>
		</div>
	);
}
