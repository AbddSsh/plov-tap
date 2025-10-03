import { useTranslation } from "react-i18next";

import type { IProfile } from "@/entities/profile";

interface IProfileStats {
	profile: IProfile;
}

export const ProfileStats = ({ profile }: IProfileStats) => {
	const { t } = useTranslation("profile");
	return (
		<div className="bg-gradient-to-bl from-main-color/10 to-main-color/30 rounded-xl p-4 grid grid-flow-row gap-4 animate-fade-in-up">
			<p className="text-center text-xl font-bold bg-gradient-to-r from-main-color to-btn-color bg-clip-text text-transparent">
				{t("stats.title")}
			</p>
			<div className="grid grid-flow-row gap-4">
				<div className="flex items-center justify-between gap-2 p-3 bg-main-color/10 rounded-xl border border-main-color/50 text-xs">
					<p className="font-semibold truncate">
						{t("stats.referrals_count")}
					</p>
					<p className="font-bold">{profile.referrals_count}</p>
				</div>
				<div className="flex items-center justify-between gap-2 p-3 bg-main-color/10 rounded-xl border border-main-color/50 text-xs">
					<p className="font-semibold truncate">
						{t("stats.participated_draws_count")}
					</p>
					<p className="font-bold">
						{profile.participated_draws_count}
					</p>
				</div>
				<div className="flex items-center justify-between gap-2 p-3 bg-main-color/10 rounded-xl border border-main-color/50 text-xs">
					<p className="font-semibold truncate">
						{t("stats.completed_tasks_count")}
					</p>
					<p className="font-bold">{profile.completed_tasks_count}</p>
				</div>
				<div className="flex items-center justify-between gap-2 p-3 bg-main-color/10 rounded-xl border border-main-color/50 text-xs">
					<p className="font-semibold truncate">
						{t("stats.date_of_registration")}
					</p>
					<p className="font-bold">{profile.date_of_registration}</p>
				</div>
			</div>
		</div>
	);
};
