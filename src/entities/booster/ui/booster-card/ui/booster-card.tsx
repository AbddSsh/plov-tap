import type { FC } from "react";
import { useTranslation } from "react-i18next";

import type { IBooster } from "@/entities/booster";

interface IBoosterCardProps {
	booster: IBooster;
	rice_count: number;
}

export const BoosterCard: FC<IBoosterCardProps> = ({ booster, rice_count }) => {
	const { t } = useTranslation("booster");
	const boosterTitle = t(`booster.${booster.booster_type}.title`);
	const boosterDescription = t(`booster.${booster.booster_type}.description`);
	return (
		<div className="flex flex-col gap-3 rounded-xl p-4 bg-gradient-to-br from-second-color/10 to-second-color/30">
			<div className="grid grid-cols-[1fr_40px] items-center justify-items-stretch justify-between gap-6">
				<div className="flex flex-col gap-1">
					<p className="text-base font-bold text-font-color">
						{boosterTitle}
					</p>
					<p className="text-[10px] font-semibold text-font-color rounded-xl p-1.5 bg-btn-color/50 w-fit">
						{t("booster_level")} {booster.booster_level}
					</p>
				</div>
				<div className="text-[40px] w-fit">
					<p>{booster.icon_url}</p>
				</div>
			</div>
			<p className="text-xs text-font-color font-semibold">
				{boosterDescription}
			</p>
			<button
				className={`bg-gradient-to-br from-btn-color/40 to-btn-color text-font-color text-sm font-bold rounded-xl p-2 disabled:grayscale-25 disabled:opacity-50 disabled:pointer-events-none`}
				disabled={rice_count < booster.upgrade_price}
			>
				🍚{" "}
				{rice_count < booster.upgrade_price
					? `${rice_count.toLocaleString()} / ${booster.upgrade_price.toLocaleString()}`
					: booster.upgrade_price.toLocaleString()}
			</button>
		</div>
	);
};
