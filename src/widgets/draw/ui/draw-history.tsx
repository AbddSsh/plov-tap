import { useTranslation } from "react-i18next";
import { DrawHistoryCard, DRAWS_HISTORY_MOCK } from "@/entities/draw";

export const DrawHistory = () => {
	const { t } = useTranslation("draw");
	const mock = DRAWS_HISTORY_MOCK;
	return (
        <div className={`grid grid-flow-row gap-6 shadow-xl px-3`}>
          <h3 className={`text-xl font-bold text-center`}>{t("draw_history.title")}</h3>
          <div className="grid grid-flow-row gap-4">
			{mock.map((item) => (
				<DrawHistoryCard key={item.date} {...item} />
			))}
          </div>
        </div>
	);
};