import { Outlet, ScrollRestoration } from "react-router-dom";

import { MainLayout } from "./main-layout";

export const RootLayout = () => {
	return (
		<MainLayout>
			<Outlet />
			<ScrollRestoration />
		</MainLayout>
	);
};
