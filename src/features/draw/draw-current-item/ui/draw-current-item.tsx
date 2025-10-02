import type { FC } from "react";
import { useTranslation } from "react-i18next";
import type { IDrawCurrent } from "@/entities/draw";

export const DrawCurrentItem:FC<{ item: IDrawCurrent }> = ({ item }) => {
  const { t } = useTranslation("draw");

	return (
    <div className="grid grid-flow-row gap-4 justify-items-center items-center">
      <div className="text-center">
        <p className={`text-lg font-semibold text-font-color`}>{t("draw_current.title")}</p>
        <p className="text-3xl font-bold bg-gradient-to-r from-main-color to-btn-color bg-clip-text text-transparent">{item?.name}</p>
      </div>
      <img src={item?.img_url} alt={item?.name} className="rounded-[20px] overflow-hidden"/>
    </div>
	);
};