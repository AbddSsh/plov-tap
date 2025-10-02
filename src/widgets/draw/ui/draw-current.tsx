import { useTranslation } from "react-i18next";
import { Trophy } from "lucide-react";
import { DrawCurrentItem, DrawTicket, DrawTimer } from "@/features/draw";
import { MOCK_CURRENT_DRAW, getTimeUntilNextDraw } from "@/entities/draw";
import { useAppSelector } from "@/shared/hooks";
import { useState, useEffect } from "react";

export const DrawCurrent = () => {
	const { t } = useTranslation("draw");
	const { rice_count } = useAppSelector((state) => state.rice);
	const [timeLeft, setTimeLeft] = useState<number>(0);

	// TODO: from api
	const mockCurrentDraw = MOCK_CURRENT_DRAW;

	// Обновляем таймер каждую секунду
	useEffect(() => {
		const updateTimer = () => {
			setTimeLeft(getTimeUntilNextDraw());
		};
		updateTimer();
		const timer = setInterval(updateTimer, 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="grid grid-flow-row gap-8 justify-items-center items-center">
			<div className="mt-10 grid grid-flow-row gap-2 justify-items-center items-center text-center">
            	<div className="relative flex items-center justify-center animate-fade-in-down">
              		<Trophy className="text-second-color animate-bounce stroke-1" size={60} />
              		<div className="absolute -top-10 bg-gradient-to-r from-second-color to-btn-color rounded-full size-28 mx-auto opacity-10 animate-ping"></div>
            	</div>
            	<h2 className={`text-2xl font-bold text-second-color animate-fade-in-up`}>{t("page_title.title")}</h2>
            	<p className={`text-font-color animate-fade-in-up`}>{t("page_title.description")}</p>
          	</div>
			<DrawCurrentItem item={mockCurrentDraw} />
			<DrawTimer timeLeft={timeLeft} />
			<DrawTicket ticketPrice={mockCurrentDraw?.ticket_price} riceCount={rice_count} draw_id={mockCurrentDraw?.draw_id} />
		</div>
	);
};