import { ExternalLink } from "lucide-react";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { ENUM_PATH } from "@/shared/config";

import type { IDrawHistory } from "@/entities/draw";

export const DrawHistoryCard: FC<IDrawHistory> = ({
	date,
	winner,
	winner_url,
	prize,
	participants,
	draw_id
}) => {
	const { t } = useTranslation("draw");

	return (
		<Link
			className={`grid grid-rows-2 gap-4 bg-gradient-to-bl from-main-color/10 to-main-color/30 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.025]`}
			to={`${ENUM_PATH.DRAWS.ROOT}/${draw_id}`}
		>
			<div className="flex justify-between items-start">
				<div>
					<p className={`text-base font-semibold`}>{prize}</p>
					<p className={`text-xs font-medium text-btn-color`}>
						{date}
					</p>
				</div>
				<ExternalLink className="size-4 text-second-color" />
			</div>
			<div className="grid grid-flow-col gap-2 justify-between items-start">
				<div
					onClick={(e) => {
						e.preventDefault();
						window.open(winner_url, "_blank");
					}}
					className="flex flex-col gap-0.5 text-sm font-semibold transition-all duration-300"
				>
					<div className="text-font-color">
						{t("draw_history.draw_history_card.winner")}:
					</div>
					<div className="text-second-color">{winner}</div>
				</div>
				<div className="flex flex-col items-end gap-0.5 text-sm font-semibold">
					<span className="text-font-color">
						{t("draw_history.draw_history_card.participants")}:
					</span>
					<span className="text-second-color">{participants}</span>
				</div>
			</div>
		</Link>
	);
};
