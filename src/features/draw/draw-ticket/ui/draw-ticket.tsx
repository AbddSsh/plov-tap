import { ArrowDown } from "lucide-react";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

interface IDrawTicketProps {
	ticketPrice: number;
	riceCount: number;
	draw_id: string;
}

export const DrawTicket: FC<IDrawTicketProps> = ({
	ticketPrice,
	riceCount,
	draw_id
}) => {
	const { t } = useTranslation("draw");

	// api buy ticket mutation
	const buyTicket = () => {
		// if success request revalidate getUserRiceCountQuery
		// if error request show error message
		alert(`Покупка билета ${draw_id} на сумму ${ticketPrice}`);
	};

	return (
		<div className="grid grid-flow-row gap-4 w-full">
			<div className="flex items-center justify-center gap-2">
				<ArrowDown className="size-6 text-main-color animate-bounce mt-1" />
				<p className="text-xs uppercase text-center font-semibold text-font-color">
					{t("draw_current.draw_ticket.title")}
				</p>
				<ArrowDown className="size-6 text-main-color animate-bounce mt-1" />
			</div>
			<button
				className={`flex items-center justify-center gap-2 bg-main-color shadow-2xl w-[90%] mx-auto text-font-color rounded-xl h-12 backdrop-blur-sm disabled:grayscale-25 disabled:opacity-50 disabled:pointer-events-none disabled:animate-none animate-pulse`}
				disabled={riceCount < ticketPrice}
				onClick={buyTicket}
			>
				<span className="text-xl font-bold">🍚</span>
				<div className="text-center font-bold text-sm">
					{riceCount < ticketPrice
						? `${riceCount.toLocaleString()} / ${ticketPrice.toLocaleString()}`
						: ticketPrice.toLocaleString()}
				</div>
			</button>
		</div>
	);
};
