import { useTranslation } from "react-i18next";
import { DrawHistoryCard, DRAWS_HISTORY_MOCK } from "@/entities/draw";

export const DrawHistory = () => {
	const { t } = useTranslation("draw");
	const mock = DRAWS_HISTORY_MOCK;
	return (
        <div className={`rounded-2xl shadow-xl p-6 border`}>
          <h3 className={`text-xl font-bold mb-4`}>{t("draw_history.title")}</h3>
          <div className="space-y-4">
			{mock.map((item) => (
				<DrawHistoryCard key={item.date} {...item} />
			))}
          </div>
        </div>
	);
};