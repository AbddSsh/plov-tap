import { type FC, useRef, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/shared/hooks";

import { setPerPeriod, setPeriodStart, setRice } from "@/entities/rice";
import { RICE_PER_PERIOD } from "@/entities/rice";

interface ICharacterAnimationProps {
	canTap: boolean;
}

export const CharacterAnimation: FC<ICharacterAnimationProps> = ({
	canTap
}) => {
	const dispatch = useAppDispatch();
	const { rice_count, per_period } = useAppSelector((state) => state.rice);

	const [tapAnimations, setTapAnimations] = useState<
		Array<{ id: number; x: number; y: number }>
	>([]);

	const videoRef = useRef<HTMLVideoElement>(null);
	const animationIdCounter = useRef(0);

	// Обработчик мультитапа (для touch)
	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		if (!canTap) return;

		// Обрабатываем все активные тачи одновременно
		Array.from(e.touches).forEach((touch) => {
			processTap(touch.clientX, touch.clientY);
		});
	};

	// Общая функция обработки тапа
	const processTap = (x: number, y: number) => {
		// Увеличиваем счетчики
		const newPerPeriod = per_period + 1;
		dispatch(setRice(rice_count! + 1));
		dispatch(setPerPeriod(newPerPeriod));

		// Если достигли лимита, сохраняем время начала периода
		if (newPerPeriod >= RICE_PER_PERIOD) {
			dispatch(setPeriodStart(new Date()));
		}

		// Перезапуск видео
		if (videoRef.current) {
			videoRef.current.currentTime = 0;
			videoRef.current
				.play()
				.catch((err) => console.log("Video play error:", err));
		}

		// Добавляем анимацию +1 рисинки
		const newAnimation = {
			id: animationIdCounter.current++,
			x,
			y
		};
		setTapAnimations((prev) => [...prev, newAnimation]);

		// Удаляем анимацию через 1 секунду
		setTimeout(() => {
			setTapAnimations((prev) =>
				prev.filter((anim) => anim.id !== newAnimation.id)
			);
		}, 1000);
	};

	const [isVideoReady, setIsVideoReady] = useState(false);

	return (
		<div>
			{/* Видео персонажа */}
			<div
				onTouchStart={handleTouchStart}
				className={`${canTap ? "cursor-pointer" : "cursor-not-allowed"} w-[90vw]`}
			>
				{!isVideoReady && (
					<img
						src="/character/plov-tap-preview-light.jpg"
						className="rounded-[20px] w-[90vw]"
						alt="Character placeholder"
					/>
				)}
				<video
					ref={videoRef}
					src="/character/plov-tap-light.mp4"
					preload="auto"
					muted
					playsInline
					onCanPlayThrough={() => setIsVideoReady(true)}
					className={`rounded-[20px] pointer-events-none w-[90vw] ${!isVideoReady ? "hidden" : ""}`}
				/>
			</div>

			{/* Анимации +1 рисинка */}
			{tapAnimations.map((anim) => (
				<div
					key={anim.id}
					className="absolute z-[10] pointer-events-none flex items-center gap-1 text-2xl font-bold animate-float-up"
					style={{
						left: `${anim.x}px`,
						top: `${anim.y}px`,
						color: "var(--btn-color)",
						textShadow: "0px 1.5px 8px var(--btn-color)"
					}}
				>
					<span className="text-3xl">🍚</span>
					<span>+1</span>
				</div>
			))}
		</div>
	);
};
