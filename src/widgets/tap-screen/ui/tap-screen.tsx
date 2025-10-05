import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/shared/hooks";

import { RICE_PER_PERIOD, RICE_RESTORE_MS } from "@/entities/rice";
import { setPerPeriod, setRestoreStart } from "@/entities/rice";

import { CharacterAnimation } from "@/features/character";
import { ProgressBar } from "@/features/rice";

export const TapScreen = () => {
	const dispatch = useAppDispatch();
	const { per_period, restore_start, last_tap_time } = useAppSelector(
		(state) => state.rice
	);
	const [canTap, setCanTap] = useState<boolean>(per_period > 0);

	// Обновляем canTap при изменении per_period
	useEffect(() => {
		setCanTap(per_period > 0);
	}, [per_period]);

	// Математический расчет восстановления энергии при рендере (только один раз при монтировании)
	useEffect(() => {
		if (restore_start && per_period < RICE_PER_PERIOD) {
			const now = new Date();
			const restoreStartDate = new Date(restore_start);
			const timeDiff = Math.floor(
				now.getTime() - restoreStartDate.getTime()
			);

			if (timeDiff > 0) {
				const energyToRestore = Math.floor(timeDiff / RICE_RESTORE_MS);
				const newEnergy = Math.min(
					per_period + energyToRestore,
					RICE_PER_PERIOD
				);
				const newRestoreStart = new Date(
					restoreStartDate.getTime() +
						energyToRestore * RICE_RESTORE_MS
				);

				dispatch(setPerPeriod(newEnergy));
				dispatch(setRestoreStart(newRestoreStart));
			}
		}
	}, []); // Убираем зависимости, чтобы выполнилось только при монтировании

	// Таймер для начала накопления через 1000мс после последнего тапа
	useEffect(() => {
		if (!last_tap_time) return;

		const timer = setTimeout(() => {
			if (per_period < RICE_PER_PERIOD) {
				dispatch(setRestoreStart(new Date()));
			}
		}, 1000);

		return () => clearTimeout(timer);
	}, [last_tap_time, per_period, dispatch]);

	// Автоматическое восстановление энергии каждую секунду
	useEffect(() => {
		if (!restore_start || per_period >= RICE_PER_PERIOD) return;

		const timer = setInterval(() => {
			// Используем функциональное обновление для получения актуального значения
			dispatch(
				setPerPeriod((prev) => {
					const newValue = prev + 1;
					return newValue <= RICE_PER_PERIOD
						? newValue
						: RICE_PER_PERIOD;
				})
			);
		}, RICE_RESTORE_MS);

		return () => clearInterval(timer);
	}, [restore_start, per_period, dispatch]);

	return (
		<div
			className={`bg-character-bg-color fixed top-0 z-10 h-screen w-full py-[80px] ${!canTap ? "grayscale" : ""}`}
		>
			<div
				className={`pb-4 grid grid-rows-[auto_1fr] gap-4 justify-center justify-items-center items-center w-full h-full overflow-hidden`}
			>
				<ProgressBar per_period={per_period} canTap={canTap} />
				<CharacterAnimation canTap={canTap} />
			</div>
		</div>
	);
};
