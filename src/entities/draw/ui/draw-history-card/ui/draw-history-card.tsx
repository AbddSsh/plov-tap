import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import type { IDrawHistory } from "@/entities/draw";

export const DrawHistoryCard: FC<IDrawHistory> = ({ date, winner, winner_url, prize, participants }) => {
  const { t } = useTranslation("draw");
  
	return (
        <div className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-lg hover:scale-105`}>
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className={`font-semibold`}>{prize}</p>
            <p className={`text-sm`}>{date}</p>
          </div>
          <Star className="text-yellow-400 fill-current" size={20} />
        </div>
        <div className="flex justify-between text-sm">
          <Link to={winner_url} className="text-green-600 font-medium">{t("draw_history.draw_history_card.winner")}: {winner}</Link>
          <span className={`text-secondary`}>{participants} {t("draw_history.draw_history_card.participants")}</span>
        </div>
      </div>
	);
};