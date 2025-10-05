import { Rocket } from "lucide-react";
import { type FC } from "react";
import { Link } from "react-router-dom";

import { ENUM_PATH } from "@/shared/config";

import { RICE_PER_PERIOD } from "@/entities/rice";

interface IProgressBarProps {
	per_period: number;
	canTap: boolean;
}

export const ProgressBar: FC<IProgressBarProps> = ({ per_period, canTap }) => {
	return (
		<div className="z-10 min-w-[80vw]">
			<div className="grid grid-cols-[1fr_auto] gap-4 items-center">
				{/* Левая часть - индикатор энергии */}
				<div className="flex flex-col gap-1">
					<div
						className={`flex items-center gap-1 text-xs uppercase font-semibold ${!canTap ? "text-gray-500" : "text-main-color"} animate-pulse`}
					>
						{/* Иконка энергии */}
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							className={
								!canTap
									? "text-gray-500"
									: "text-[var(--main-color)]"
							}
						>
							<path
								d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
								fill="currentColor"
							/>
						</svg>
						<span>
							{per_period} / {RICE_PER_PERIOD}
						</span>
					</div>
					<div className="w-full h-3 bg-font-color/10 rounded-[10px] overflow-hidden shadow-inner">
						<div
							className="h-full rounded-[10px] transition-all duration-300 shadow-[0_0_10px_var(--main-color)]"
							style={{
								width: `${(per_period / RICE_PER_PERIOD) * 100}%`,
								background:
									"linear-gradient(90deg, var(--main-color), var(--second-color))"
							}}
						></div>
					</div>
				</div>

				{/* Правая часть - кнопка "Улучшения" */}
				<Link
					to={ENUM_PATH.BOOSTERS}
					className="flex justify-center items-center gap-2 px-4 py-2 bg-gradient-to-br from-main-color to-btn-color text-font-color text-xs font-semibold rounded-lg transition-colors duration-200"
				>
					Улучшения
					<Rocket className="size-5 stroke-1.5" />
				</Link>
			</div>
		</div>
	);
};
