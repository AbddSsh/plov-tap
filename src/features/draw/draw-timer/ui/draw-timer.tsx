import { type FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const DrawTimer: FC<{ timeLeft: number }> = ({ timeLeft }) => {
	const { t } = useTranslation("draw");
	const [currentTimeLeft, setCurrentTimeLeft] = useState<number>(timeLeft);

	const formatLotteryTime = (seconds: number) => {
		const days = Math.floor(seconds / (24 * 60 * 60));
		const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
		const minutes = Math.floor((seconds % (60 * 60)) / 60);
		const secs = seconds % 60;
		return { days, hours, minutes, seconds: secs };
	};

	// Обновляем локальное состояние при изменении пропса
	useEffect(() => {
		setCurrentTimeLeft(timeLeft);
	}, [timeLeft]);

	// Обратный отсчет каждую секунду
	useEffect(() => {
		if (currentTimeLeft <= 0) return;

		const timer = setInterval(() => {
			setCurrentTimeLeft((prev) => {
				if (prev <= 1) {
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [currentTimeLeft]);

	const time = formatLotteryTime(currentTimeLeft);

	return (
		<div className="grid grid-flow-row gap-4 justify-items-center items-center">
			<h3
				className={`text-2xl text-center font-bold bg-gradient-to-r from-main-color to-btn-color bg-clip-text text-transparent`}
			>
				{t("draw_current.draw_timer.title")}
			</h3>
			<div className="grid grid-cols-4 gap-2">
				{[
					{
						value: time.days,
						label: t("draw_current.draw_timer.days")
					},
					{
						value: time.hours,
						label: t("draw_current.draw_timer.hours")
					},
					{
						value: time.minutes,
						label: t("draw_current.draw_timer.minutes")
					},
					{
						value: time.seconds,
						label: t("draw_current.draw_timer.seconds")
					}
				].map((unit, index) => (
					<div key={index} className="text-center">
						<div className="bg-gradient-to-br from-main-color/30 to-btn-color/20 text-font-color rounded-xl p-4 mb-2 shadow-lg backdrop-blur-sm">
							<div className="text-2xl font-bold font-mono">
								{unit.value.toString().padStart(2, "0")}
							</div>
						</div>
						<div className={`text-sm font-normal text-font-color`}>
							{unit.label}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
