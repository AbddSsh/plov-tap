import { useTranslation } from "react-i18next";
import { Trophy } from "lucide-react";
import { DrawCurrentItem, DrawTicket, DrawTimer } from "@/features/draw";
import { MOCK_CURRENT_DRAW } from "@/entities/draw";

export const DrawCurrent = () => {
	const { t } = useTranslation("draw");

	// TODO: from api
	const mockCurrentDraw = MOCK_CURRENT_DRAW;

	const ticketPrice = 50000;
	
	return (
		<div className="grid grid-flow-row gap-8 justify-items-center items-center">
			<div className="mt-10 grid grid-flow-row gap-2 justify-items-center items-center text-center">
            	<div className="relative flex items-center justify-center">
              		<Trophy className="text-second-color animate-bounce stroke-1" size={60} />
              		<div className="absolute -top-10 bg-gradient-to-r from-second-color to-btn-color rounded-full size-28 mx-auto opacity-10 animate-ping"></div>
            	</div>
            	<h2 className={`text-2xl font-bold text-second-color`}>{t("page_title.title")}</h2>
            	<p className={`text-font-color`}>{t("page_title.description")}</p>
          	</div>
			<DrawCurrentItem item={mockCurrentDraw} />
			<DrawTimer timeLeft={3 * 24 * 60 * 60 + 14 * 60 * 60 + 32 * 60 + 18} />
			<DrawTicket ticketPrice={ticketPrice} />
		</div>
	);
};