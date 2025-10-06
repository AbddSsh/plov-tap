import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import { type TFooterKeys } from "@/shared/config";
import { handleVibration } from "@/shared/lib";

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
		<div className="max_width fixed left-1/2 -translate-x-1/2 bottom-4 w-[92%] p-2.5 backdrop-blur-sm bg-main-color/10 rounded-xl z-40">
			<div className="grid grid-cols-[1fr_1fr_0.75fr_1fr_1fr] gap-0 items-center">
				{FOOTER_MENU_ITEMS.map((item, index) => {
					const isActive = isActiveRoute(item.href);
					const Icon = item.icon;

					if (index === 2) {
						return (
							<Link
								to={item.href}
								className="relative w-full h-full block"
								onClick={handleVibration}
							>
								<div
									className={`absolute -top-7 left-1/2 -translate-x-1/2 size-[64px] bg-second-color rounded-full flex items-center justify-center ${isActive ? "border-2 border-btn-color" : "border-none"}`}
								>
									{/* <p className="animate-pulse text-2xl font-bold">
 									{t(item.label as TFooterKeys)}
								</p> */}
									<div className="size-[58px] bg-[url('/character/plov-tap-icon.svg')] bg-cover bg-center"></div>
								</div>
								{!isActive && (
									<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-second-color to-btn-color rounded-full size-14 mx-auto opacity-30 animate-ping"></div>
								)}
							</Link>
						);
					}

					return (
						<Link
							key={item.href}
							to={item.href}
							onClick={handleVibration}
							className={`flex flex-col items-center justify-center gap-0.5 ${
								isActive ? "text-main-color" : "text-font-color"
							}`}
						>
							<Icon className="size-5 stroke-[2px]" />
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
