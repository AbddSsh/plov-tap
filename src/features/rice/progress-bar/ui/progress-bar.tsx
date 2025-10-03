import { type FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { useAppDispatch, useAppSelector } from "@/shared/hooks";

import { RICE_PERIOD_SECONDS, RICE_PER_PERIOD } from "@/entities/rice";
import { setPerPeriod, setPeriodStart } from "@/entities/rice";

interface IProgressBarProps {
	per_period: number;
	canTap: boolean;
}

export const ProgressBar: FC<IProgressBarProps> = ({ per_period, canTap }) => {
	const { t } = useTranslation("home");
	const dispatch = useAppDispatch();
	const { period_start } = useAppSelector((state) => state.rice);

	const [timeLeft, setTimeLeft] = useState<number>(0);
	const [isPeriodActive, setIsPeriodActive] = useState<boolean>(false);

	// Проверяем период и обновляем таймер
	useEffect(() => {
		if (per_period >= RICE_PER_PERIOD && period_start) {
			const now = new Date();
			const periodStartDate = new Date(period_start);
			const timeDiff = Math.floor(
				(now.getTime() - periodStartDate.getTime()) / 1000
			);

			if (timeDiff >= RICE_PERIOD_SECONDS) {
				// Период истек, сбрасываем
				dispatch(setPerPeriod(0));
				dispatch(setPeriodStart(null));
				setIsPeriodActive(false);
				setTimeLeft(0);
			} else {
				// Период активен, показываем обратный отсчет
				setIsPeriodActive(true);
				setTimeLeft(RICE_PERIOD_SECONDS - timeDiff);
			}
		} else {
			setIsPeriodActive(false);
			setTimeLeft(0);
		}
	}, [per_period, period_start, dispatch]);

	// Обновляем таймер каждую секунду
	useEffect(() => {
		if (!isPeriodActive) return;

		const timer = setInterval(() => {
			setTimeLeft((prev) => {
				if (prev <= 1) {
					// Время истекло, сбрасываем период
					dispatch(setPerPeriod(0));
					dispatch(setPeriodStart(null));
					setIsPeriodActive(false);
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [isPeriodActive, dispatch]);

	const formatTime = (seconds: number): string => {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${mins}:${secs.toString().padStart(2, "0")}`;
	};

	return (
		<div className="z-10 min-w-[80vw]">
			<div
				className={`flex justify-between mb-2 text-xs uppercase font-semibold ${!canTap ? "text-gray-500" : "text-[var(--main-color)]"}`}
			>
				<span>
					{per_period} / {RICE_PER_PERIOD}
				</span>
				<span>
					{isPeriodActive
						? formatTime(timeLeft)
						: !canTap
							? t("rice.progress_bar.title_negative")
							: t("rice.progress_bar.title_positive")}
				</span>
			</div>
			<div className="w-full h-3 bg-font-color/10 rounded-[10px] overflow-hidden shadow-inner">
				<div
					className="h-full rounded-[10px] transition-all duration-300 shadow-[0_0_10px_var(--main-color)]"
					style={{
						width: `${(per_period / RICE_PER_PERIOD) * 100}%`,
						background:
							"linear-gradient(90deg, var(--main-color), var(--second-color))"
					}}
				></div>
			</div>
		</div>
	);
};
