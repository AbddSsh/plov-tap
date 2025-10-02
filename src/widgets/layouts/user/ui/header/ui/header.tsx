import { LanguageToggle, ThemeToggle } from "@/shared/ui";
import { Menu } from "lucide-react";

export const Header = () => {
	return (
		<header className="p-2.5 sticky top-3 w-[92%] mx-auto z-40 backdrop-blur-sm bg-main-color/10 rounded-xl">
			<div className="grid grid-cols-3 items-center justify-between gap-4">
				<div className="flex items-center gap-2 justify-start"><Menu className="size-5" /></div>
				<div className="rounded-full flex items-center justify-center gap-2 cursor-pointer truncate">
					<div className="text-base truncate animate-pulse">
						🍚
					</div>
					<div className="text-sm font-bold text-[var(--main-color)] truncate animate-pulse">
						46 534
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
