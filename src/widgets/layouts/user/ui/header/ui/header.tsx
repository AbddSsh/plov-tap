import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { ENUM_PATH } from "@/shared/config";
import { useAppSelector, useBackButton } from "@/shared/hooks";
import { LanguageToggle, ThemeToggle } from "@/shared/ui";

export const Header = () => {
	const { rice_count } = useAppSelector((state) => state.rice);
	const [isRicePulsing, setIsRicePulsing] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setIsRicePulsing(true);
		setTimeout(() => setIsRicePulsing(false), 100);
	}, [rice_count]);

	const isDynamicRoute =
		location.pathname.includes(`${ENUM_PATH.DRAWS.ROOT}/`) ||
		location.pathname.includes(`${ENUM_PATH.TASKS.ROOT}/`) ||
		location.pathname.includes(`${ENUM_PATH.BOOSTERS}`);

	const getBackPath = () => {
		if (location.pathname.includes(`${ENUM_PATH.DRAWS.ROOT}/`)) {
			return ENUM_PATH.DRAWS.ROOT;
		}
		if (location.pathname.includes(`${ENUM_PATH.TASKS.ROOT}/`)) {
			return ENUM_PATH.TASKS.ROOT;
		}
		if (location.pathname.includes(`${ENUM_PATH.BOOSTERS}`)) {
			return ENUM_PATH.CHARACTER;
		}
		return "/";
	};

	// Управление кнопкой "Back" в Telegram WebApp
	useBackButton({
		show: isDynamicRoute,
		backPath: getBackPath()
	});

	return (
		<header className="p-2.5 sticky top-24 w-screen z-40">
			<div className="grid grid-cols-2 items-center justify-between gap-1">
				<Link
					to={ENUM_PATH.CHARACTER}
					className={`bg-main-color/10 py-1.5 pt-2 px-3 backdrop-blur-md rounded-full flex items-center w-fit gap-2 cursor-pointer truncate ${isRicePulsing ? "animate-rice-pulse" : ""}`}
				>
					<div className="text-sm truncate">🍚</div>
					<div className="text-sm font-bold text-main-color truncate">
						{rice_count?.toLocaleString()}
					</div>
				</Link>
				<div className="grid grid-flow-col justify-end gap-2">
					<ThemeToggle />
					<LanguageToggle />
				</div>
			</div>
		</header>
	);
};
