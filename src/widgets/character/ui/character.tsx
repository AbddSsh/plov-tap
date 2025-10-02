import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const Character = () => {
    const { t } = useTranslation("home");
    // Константы вынесу в энтити константы
    const MAX_TAPS = 10;

    // Стейты
    // ртк квери + апи
    const [riceCount, setRiceCount] = useState(0);
    const [tapsUsed, setTapsUsed] = useState(0);
    const [tapAnimations, setTapAnimations] = useState<Array<{ id: number; x: number; y: number }>>([]);
    const [isRicePulsing, setIsRicePulsing] = useState(false);
    
    const videoRef = useRef<HTMLVideoElement>(null);
    const animationIdCounter = useRef(0);

    // Проверка доступности тапов
    // нужен слайс тапа + персист для локал стора
    const canTap = tapsUsed < MAX_TAPS;

    // Обработчик тапа
    const handleTap = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!canTap) return;

        // Увеличиваем счетчики
        setRiceCount(prev => prev + 1);
        setTapsUsed(prev => prev + 1);

        // Запускаем анимацию пульса
        setIsRicePulsing(true);
        setTimeout(() => setIsRicePulsing(false), 100);

        // Перезапуск видео
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(err => console.log('Video play error:', err));
        }

        // Получаем координаты клика
        const x = e.clientX;
        const y = e.clientY;

        // Добавляем анимацию +1 рисинки
        const newAnimation = {
            id: animationIdCounter.current++,
            x,
            y
        };
        setTapAnimations(prev => [...prev, newAnimation]);

        // Удаляем анимацию через 1 секунду
        setTimeout(() => {
            setTapAnimations(prev => prev.filter(anim => anim.id !== newAnimation.id));
        }, 1000);
    };

    // Процент использованных тапов
    const progressPercent = (tapsUsed / MAX_TAPS) * 100;

    return (
        <div className={`bg-character-bg-color fixed top-0 z-10 h-screen w-full py-[80px] ${!canTap ? 'grayscale' : ''}`}>
        <div className={`pb-4 grid grid-flow-row gap-4 justify-center justify-items-center items-center w-full h-full overflow-hidden`}>
            {/* Счетчик рисинок */}
            <div className="z-10 text-center w-fit">
                <div className={`text-font-color text-2xl font-bold flex items-center gap-2 ${isRicePulsing ? 'animate-rice-pulse' : ''}`}>
                    <span>🍚</span>
                    <span>{riceCount.toLocaleString()}</span>
                </div>
            </div>

            {/* Прогресс бар */}
            <div className="z-10 min-w-[80vw]">
                <div className={`flex justify-between mb-2 text-xs uppercase font-semibold ${!canTap ? 'text-gray-500' : 'text-[var(--main-color)]'}`}>
                    <span>{tapsUsed} / {MAX_TAPS}</span>
                    <span>{!canTap ? t("rice.progress_bar.title_negative") : t("rice.progress_bar.title_positive")}</span>
                </div>
                <div className="w-full h-3 bg-font-color/10 rounded-[10px] overflow-hidden shadow-inner">
                    <div 
                        className="h-full rounded-[10px] transition-all duration-300 shadow-[0_0_10px_var(--main-color)]"
                        style={{
                            width: `${progressPercent}%`,
                            background: 'linear-gradient(90deg, var(--main-color), var(--second-color))'
                        }}
                    ></div>
                </div>
            </div>

            {/* Видео персонажа */}
            <div 
                onClick={handleTap}
                className={`${canTap ? 'cursor-pointer' : 'cursor-not-allowed'} w-[90vw]`}
            >
                <video
                    ref={videoRef}
                    src="/character/plov-tap.mp4"
                    className="rounded-[20px] pointer-events-none"
                    muted
                    playsInline
                />
            </div>

            {/* Анимации +1 рисинка */}
            {tapAnimations.map(anim => (
                <div
                    key={anim.id}
                    className="absolute z-[10] pointer-events-none flex items-center gap-1 text-2xl font-bold animate-float-up"
                    style={{
                        left: `${anim.x}px`,
                        top: `${anim.y}px`,
                        transform: 'translate(-50%, -50%)',
                        color: 'var(--btn-color)',
                        textShadow: '0px 1.5px 8px var(--btn-color)'
                    }}
                >
                    <span className="text-3xl">🍚</span>
                    <span>+1</span>
                </div>
            ))}

            {/* CSS анимации */}
            <style>{`
                @keyframes float-up {
                    0% {
                        opacity: 1;
                        transform: translate(-50%, -50%) translateY(0);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(-50%, -50%) translateY(-100px);
                    }
                }

                @keyframes rice-pulse {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.15);
                    }
                    100% {
                        transform: scale(1);
                    }
                }

                .animate-float-up {
                    animation: float-up 1s ease-out forwards;
                }

                .animate-rice-pulse {
                    animation: rice-pulse 100ms ease-in-out;
                }
            `}</style>
        </div>
        </div>
    );
};