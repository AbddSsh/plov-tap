import { ArrowDown, CheckCircle } from "lucide-react";
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

	const user_has_ticket = false;
	const ticket_id = "TFS-123FF-21";

	// api buy ticket mutation
	const buyTicket = () => {
		// if success request revalidate getUserRiceCountQuery
		// if error request show error message
		alert(`Покупка билета ${draw_id} на сумму ${ticketPrice}`);
	};

	return (
		<div className="grid grid-flow-row gap-4 w-full">
			{user_has_ticket ? (
				<div className="grid grid-cols-[auto_1fr] items-center justify-items-center gap-2 rounded-xl p-5 bg-second-color/10">
					<div className="w-fit p-2 rounded-full flex items-center justify-center bg-green-500 text-white">
						<CheckCircle className="size-8" />
					</div>
					<div className="grid grid-flow-row gap-1">
						<p className="text-base font-semibold text-font-color">
							{t("draw_current.draw_current_ticket.title")}
						</p>
						<p className="text-base font-normal text-main-color">
							<span className="font-semibold text-font-color">
								{t(
									"draw_current.draw_current_ticket.ticket_id"
								)}
								:
							</span>{" "}
							{ticket_id}
						</p>
					</div>
				</div>
			) : (
				<>
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
				</>
			)}
		</div>
	);
};
