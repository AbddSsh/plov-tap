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
			<p className="text-lg uppercase text-center font-semibold text-font-color">
				{t("draw_current.draw_ticket.title")}
			</p>
			<button
				className={`relative bg-main-color shadow-2xl w-[90%] mx-auto text-font-color rounded-xl p-4 backdrop-blur-sm`}
				disabled={riceCount < ticketPrice}
				onClick={buyTicket}
			>
				<div className="text-center font-bold text-lg">
					🍚 {ticketPrice.toLocaleString()}
				</div>
				{riceCount <= ticketPrice && (
					<span className="z-10 absolute top-0 left-0 rounded-xl w-full h-full flex items-center justify-center text-font-color font-semibold text-sm uppercase backdrop-blur-sm">
						{t("draw_current.draw_ticket.buy_button.disabled")}
					</span>
				)}
			</button>
		</div>
	);
};
