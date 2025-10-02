import { CircleCheckBig, Gift, House, User } from "lucide-react";

import { ENUM_PATH } from "@/shared/config";

import type { IFooterMenuItem } from "./types";

export const FOOTER_MENU_ITEMS: IFooterMenuItem[] = [
	{
		label: "menu.home",
		href: ENUM_PATH.MAIN,
		icon: House
	},
	{
		label: "menu.profile",
		href: ENUM_PATH.PROFILE,
		icon: User
	},
	{
		label: "menu.tasks",
		href: ENUM_PATH.TASKS.ROOT,
		icon: CircleCheckBig
	},
	{
		label: "menu.draws",
		href: ENUM_PATH.DRAWS.ROOT,
		icon: Gift
	}
];
