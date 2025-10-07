import { Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";

import { useAppSelector } from "@/shared/hooks";

import { BoosterCard, MOCK_BOOSTERS } from "@/entities/booster";

export const Boosters = () => {
	const { t } = useTranslation("booster");
	const mock_boosters = MOCK_BOOSTERS;
	const { rice_count } = useAppSelector((state) => state.rice);
	return (
		<div className="grid grid-flow-row gap-8">
			<div className="relative flex flex-col gap-4 items-center justify-center animate-fade-in-down">
				<Rocket
					className="text-second-color animate-bounce stroke-1"
					size={60}
				/>
				<div className="absolute -top-10 bg-gradient-to-r from-second-color to-btn-color rounded-full size-28 mx-auto opacity-10 animate-ping"></div>
				<p className="text-center text-2xl font-bold bg-gradient-to-r from-main-color to-btn-color bg-clip-text text-transparent">
					{t("boosters_title")}
				</p>
				<p className="text-center text-base font-semibold text-font-color">
					{t("boosters_description")}
				</p>
			</div>
			<div className="grid grid-flow-row gap-5">
				{mock_boosters?.map((booster) => (
					<BoosterCard
						key={booster.booster_type}
						booster={booster}
						rice_count={rice_count}
					/>
				))}
			</div>
		</div>
	);
};
