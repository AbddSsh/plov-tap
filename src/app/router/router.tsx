import { createBrowserRouter } from "react-router-dom";

import { ENUM_LAYOUT, ENUM_PATH } from "@/shared/config";

import { RootLayout } from "@/widgets/layouts";

import { ALL_APP_ROUTES_LIST } from "./router.config";

const ROOT_ROUTES_LIST = ALL_APP_ROUTES_LIST.filter(
	(route) => route.layout === ENUM_LAYOUT.ROOT
).map((route) => ({
	path: route.path,
	element: <route.component />
}));

export const router = createBrowserRouter(
	[
		{
			path: ENUM_PATH.MAIN,
			element: <RootLayout />,
			children: ROOT_ROUTES_LIST
		}
		// admin routes
		// {
		// 	path: ENUM_PATH.ADMIN,
		// 	element: <AdminLayout />,
		// 	children: ADMIN_ROUTES_LIST
		// }
	],
	{
		future: {
			v7_relativeSplatPath: true
		}
	}
);
