import { LinkIcon } from "lucide-react";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface IProfileReferralProps {
	referral_link: string;
}

export const ProfileReferral: FC<IProfileReferralProps> = ({
	referral_link
}) => {
	const { t } = useTranslation("task");
	const rice_count = 50000;
	return (
		<div className="grid grid-flow-row gap-4 animate-fade-in-up">
			<div className="flex flex-col gap-2 p-5 bg-main-color/10 rounded-xl border border-main-color/50">
				<p className="text-xs uppercase text-btn-color font-bold">
					{t("referral_program.referral_link")}
				</p>
				<p className="text-xs text-font-color font-medium">
					{referral_link}
				</p>
			</div>
			<div className="grid grid-flow-row gap-2 justify-items-center items-center">
				<p className="text-base text-font-color font-semibold text-center">
					{t("referral_program.description")}
				</p>
				<p className="text-lg text-btn-color font-bold text-center">
					+ 🍚 {rice_count.toLocaleString()}
				</p>
			</div>
			<Link
				to={referral_link}
				className="flex justify-center items-center gap-2 h-12 text-base text-font-color font-semibold bg-main-color rounded-xl px-4 py-2"
			>
				<LinkIcon className="size-5" />{" "}
				{t("referral_program.share_link")}
			</Link>
		</div>
	);
};
