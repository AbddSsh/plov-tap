import { useEffect, useState } from "react";

import { useAppSelector } from "@/shared/hooks";

import { RICE_PERIOD_SECONDS, RICE_PER_PERIOD } from "@/entities/rice";

import { CharacterAnimation } from "@/features/character";
import { ProgressBar } from "@/features/rice";

export const TapScreen = () => {
	const { per_period, period_start } = useAppSelector((state) => state.rice);
	const [canTap, setCanTap] = useState<boolean>(per_period < RICE_PER_PERIOD);

	// Проверяем период и обновляем canTap
	useEffect(() => {
		if (per_period >= RICE_PER_PERIOD && period_start) {
			const now = new Date();
			const periodStartDate = new Date(period_start);
			const timeDiff = Math.floor(
				(now.getTime() - periodStartDate.getTime()) / 1000
			);
			setCanTap(timeDiff >= RICE_PERIOD_SECONDS);
		} else {
			setCanTap(per_period < RICE_PER_PERIOD);
		}
	}, [per_period, period_start]);

	// Обновляем canTap каждую секунду во время активного периода
	useEffect(() => {
		if (per_period >= RICE_PER_PERIOD && period_start) {
			const timer = setInterval(() => {
				const now = new Date();
				const periodStartDate = new Date(period_start);
				const timeDiff = Math.floor(
					(now.getTime() - periodStartDate.getTime()) / 1000
				);
				setCanTap(timeDiff >= RICE_PERIOD_SECONDS);
			}, 1000);

			return () => clearInterval(timer);
		}
	}, [per_period, period_start]);

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
