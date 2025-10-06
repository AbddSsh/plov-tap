import { useEffect, useRef, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/shared/hooks";

import {
	RICE_PER_PERIOD,
	RICE_PER_SECOND,
	RICE_RESTORE_MS
} from "@/entities/rice";
import { setPerPeriod, setRestoreStart } from "@/entities/rice";

export const useEnergy = () => {
	const dispatch = useAppDispatch();
	const { per_period, restore_start, last_tap_time } = useAppSelector(
		(state) => state.rice
	);
	const [canTap, setCanTap] = useState<boolean>(per_period > 0);
	const timerRef = useRef<number | null>(null);

	// Обновляем canTap при изменении per_period
	useEffect(() => {
		setCanTap(per_period > 0);
	}, [per_period]);

	// Инициализация энергии при первом заходе
	useEffect(() => {
		if (per_period === 0 && !restore_start) {
			dispatch(setPerPeriod(RICE_PER_PERIOD));
		}
	}, [per_period, restore_start, dispatch]);

	// Восстановление энергии при монтировании
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
				dispatch(setRestoreStart(newRestoreStart.toISOString()));
			}
		}
	}, []);

	// Остановка восстановления при тапе и запуск через 1000мс после последнего тапа
	useEffect(() => {
		// Останавливаем текущий таймер восстановления
		if (timerRef.current) {
			clearInterval(timerRef.current);
			timerRef.current = null;
		}

		// Если есть last_tap_time, запускаем таймер на 1000мс
		if (last_tap_time) {
			const timer = setTimeout(() => {
				if (per_period < RICE_PER_PERIOD) {
					dispatch(setRestoreStart(new Date().toISOString()));
				}
			}, 1000);

			return () => clearTimeout(timer);
		}
	}, [last_tap_time, per_period, dispatch]);

	// Запуск таймера восстановления энергии
	useEffect(() => {
		if (!restore_start || per_period >= RICE_PER_PERIOD) {
			// Останавливаем таймер если нет restore_start или энергия полная
			if (timerRef.current) {
				clearInterval(timerRef.current);
				timerRef.current = null;
			}
			return;
		}

		// Запускаем таймер восстановления
		timerRef.current = setInterval(() => {
			dispatch((dispatch, getState) => {
				const currentPerPeriod = getState().rice.per_period;
				if (currentPerPeriod < RICE_PER_PERIOD) {
					dispatch(setPerPeriod(currentPerPeriod + RICE_PER_SECOND));
				}
			});
		}, RICE_RESTORE_MS);

		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current);
				timerRef.current = null;
			}
		};
	}, [restore_start, per_period, dispatch]);

	return { per_period, canTap };
};
