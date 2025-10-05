import {
	ENUM_AUTH,
	ENUM_LAYOUT,
	ENUM_PATH,
	type IRouting
} from "@/shared/config";

import { BoostersPage } from "@/pages/boosters";
import { CharacterPage } from "@/pages/character";
import { DrawPage, DrawsPage } from "@/pages/draws";
import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found-page";
import { ProfilePage } from "@/pages/profile";
import { TaskPage, TasksPage } from "@/pages/tasks";

export const ALL_APP_ROUTES_LIST: IRouting[] = [
	// home
	{
		path: ENUM_PATH.MAIN,
		component: HomePage,
		auth: ENUM_AUTH.ONLY_PUBLIC,
		layout: ENUM_LAYOUT.ROOT
	},
	// character
	{
		path: ENUM_PATH.CHARACTER,
		component: CharacterPage,
		auth: ENUM_AUTH.ONLY_PUBLIC,
		layout: ENUM_LAYOUT.ROOT
	},
	// boosters
	{
		path: ENUM_PATH.BOOSTERS,
		component: BoostersPage,
		auth: ENUM_AUTH.ONLY_PUBLIC,
		layout: ENUM_LAYOUT.ROOT
	},
	// profile
	{
		path: ENUM_PATH.PROFILE,
		component: ProfilePage,
		auth: ENUM_AUTH.ONLY_PUBLIC,
		layout: ENUM_LAYOUT.ROOT
	},
	// tasks
	{
		path: ENUM_PATH.TASKS.ROOT,
		component: TasksPage,
		auth: ENUM_AUTH.ONLY_PUBLIC,
		layout: ENUM_LAYOUT.ROOT
	},
	{
		path: ENUM_PATH.TASKS.TASK,
		component: TaskPage,
		auth: ENUM_AUTH.ONLY_PUBLIC,
		layout: ENUM_LAYOUT.ROOT
	},
	// draws
	{
		path: ENUM_PATH.DRAWS.ROOT,
		component: DrawsPage,
		auth: ENUM_AUTH.ONLY_PUBLIC,
		layout: ENUM_LAYOUT.ROOT
	},
	{
		path: ENUM_PATH.DRAWS.DRAW,
		component: DrawPage,
		auth: ENUM_AUTH.ONLY_PUBLIC,
		layout: ENUM_LAYOUT.ROOT
	},

	// 404
	{
		path: ENUM_PATH.NOT_FOUND,
		component: NotFoundPage,
		auth: ENUM_AUTH.ONLY_PUBLIC,
		layout: ENUM_LAYOUT.ROOT
	}
];
