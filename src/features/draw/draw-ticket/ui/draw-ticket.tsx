import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const DrawTicket:FC<{ ticketPrice: number }> = ({ ticketPrice }) => {
  const { t } = useTranslation("draw");

  // TODO: from slice
  const riceCount = 46534;
    
	return (
        <div className="grid grid-flow-row gap-4 w-full">
        <p className="text-lg uppercase text-center font-semibold text-font-color">{t("draw_current.draw_ticket.title")}</p>
        <div className={`bg-main-color shadow-2xl w-[90%] mx-auto text-font-color rounded-xl p-4 mb-2 backdrop-blur-sm`}>
          <div className="text-center font-bold text-lg">🍚 {ticketPrice.toLocaleString()}</div>
        </div>
        <button 
          className={`w-full py-3 rounded-lg font-semibold text-lg transition-all shadow-lg ${
            riceCount >= ticketPrice 
              ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 transform hover:scale-105' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
          }`}
          disabled={riceCount < ticketPrice}
        >
          {riceCount >= ticketPrice ? t("draw_current.draw_ticket.buy_button.active") : t("draw_current.draw_ticket.buy_button.disabled")}
        </button>
      </div>
	);
};