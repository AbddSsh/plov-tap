import { ArrowLeft, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { ENUM_PATH } from "@/shared/config/routes";
import { useAppSelector } from "@/shared/hooks";
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

	return (
		<header className="p-2.5 sticky top-3 w-[92%] mx-auto z-40 backdrop-blur-sm bg-main-color/10 rounded-xl">
			<div className="grid grid-cols-[105px_1fr_105px] items-center justify-between gap-1">
				<div className="flex items-center gap-2 justify-start">
					{isDynamicRoute ? (
						<Link
							to={getBackPath()}
							className="flex items-center gap-2 hover:opacity-70 transition-opacity"
						>
							<ArrowLeft className="size-5" />
						</Link>
					) : (
						<Menu className="size-5" />
					)}
				</div>
				<div
					className={`rounded-full flex items-center justify-center gap-2 cursor-pointer truncate ${isRicePulsing ? "animate-rice-pulse" : ""}`}
				>
					<div className="text-xl truncate animate-pulse">🍚</div>
					<div className="text-lg font-bold text-[var(--main-color)] truncate animate-pulse">
						{rice_count?.toLocaleString()}
					</div>
				</div>
				<div className="grid grid-flow-col justify-end gap-2">
					<ThemeToggle />
					<LanguageToggle />
				</div>
			</div>
		</header>
	);
};
