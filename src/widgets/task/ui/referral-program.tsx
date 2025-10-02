import { useTranslation } from "react-i18next";
import { Link, Users } from "lucide-react";
import { REFERRAL_PROGRAM_MOCK_DATA } from "@/entities/task";

export const ReferralProgram = () => {
    const { t } = useTranslation("task");
    const referralProgram = REFERRAL_PROGRAM_MOCK_DATA;
    return (
        <div className="grid grid-flow-row gap-8">
            <div className="mt-6 relative flex items-center justify-center animate-fade-in-down">
                <Users className="text-second-color animate-bounce" size={60} />
                <div className="absolute -top-10 bg-gradient-to-r from-second-color to-btn-color 
                rounded-full size-28 mx-auto opacity-10 animate-ping"></div>
            </div>
            <div className="text-center text-2xl font-bold bg-gradient-to-r from-main-color to-btn-color bg-clip-text text-transparent animate-fade-in-up">{t("referral_program.title")}
            </div>
            <p className="text-center uppercase text-base text-font-color font-semibold">
                {t("referral_program.description")}
            </p>
            <div className="grid grid-flow-row gap-4">
                <div className="flex flex-col gap-2 p-5 bg-main-color/10 rounded-xl border border-main-color/50">
                    <p className="text-xs uppercase text-btn-color font-bold">
                        {t("referral_program.referral_link")}
                    </p>
                    <p className="text-base text-font-color font-medium">
                        {referralProgram?.referral_link}
                    </p>
                </div>
                <button className="flex justify-center items-center gap-2 h-12 text-base text-font-color font-semibold bg-main-color rounded-xl px-4 py-2">
                    <Link className="size-5" /> {t("referral_program.share_link")}
                </button>
            </div>
            <p className="text-center text-sm text-second-color font-semibold mb-6">
                {t("referral_program.invited_friends_count")} - {referralProgram?.invited_friends_count}
            </p>
        </div>
    );
};