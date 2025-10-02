import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import { type TFooterKeys } from "@/shared/config";

import { FOOTER_MENU_ITEMS } from "../model";

export const Footer = () => {
	const { pathname } = useLocation();
	const { t } = useTranslation("footer");

	const isActiveRoute = (itemHref: string) => {
		// Точное совпадение
		if (pathname === itemHref) return true;

		// Проверяем, начинается ли текущий путь с href + "/"
		// Это покроет все динамические маршруты
		return pathname.startsWith(itemHref + "/");
	};

	return (
		<div className="max_width fixed left-1/2 -translate-x-1/2 bottom-3 w-[92%] p-2.5 backdrop-blur-sm bg-main-color/10 rounded-xl z-40">
			<div className="grid grid-cols-4">
				{FOOTER_MENU_ITEMS.map((item) => {
					const isActive = isActiveRoute(item.href);
					const Icon = item.icon;

					return (
						<Link
							key={item.href}
							to={item.href}
							className={`flex flex-col items-center justify-center gap-0.5 ${
								isActive
									? "text-main-color"
									: "text-font-color"
							}`}
						>
							<Icon className="size-5 stroke-[1.5px]" />
							<span className="text-[10px] font-medium">
								{t(item.label as TFooterKeys)}
							</span>
						</Link>
					);
				})}
			</div>
		</div>
	);
};
