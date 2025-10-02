import { useRef, useState, type FC } from "react";
import { setPerPeriod, setRice, setPeriodStart } from "@/entities/rice";
import { RICE_PER_PERIOD } from "@/entities/rice";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";

interface ICharacterAnimationProps {
    canTap: boolean;
}

export const CharacterAnimation:FC<ICharacterAnimationProps> = ({ canTap }) => {

    const dispatch = useAppDispatch();
    const { rice_count, per_period } = useAppSelector((state) => state.rice);

    const [tapAnimations, setTapAnimations] = useState<Array<{ id: number; x: number; y: number }>>([]);
    
    const videoRef = useRef<HTMLVideoElement>(null);
    const animationIdCounter = useRef(0);
        // Обработчик тапа
    const handleTap = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!canTap) return;
    
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

    return (
        <div>
            {/* Видео персонажа */}
            <div 
                onClick={handleTap}
                className={`${canTap ? 'cursor-pointer' : 'cursor-not-allowed'} w-[90vw]`}
            >
                <video
                    ref={videoRef}
                    src="/character/plov-tap.mp4"
                    className="rounded-[20px] pointer-events-none max-width"
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
                        color: 'var(--btn-color)',
                        textShadow: '0px 1.5px 8px var(--btn-color)'
                    }}
                >
                    <span className="text-3xl">🍚</span>
                    <span>+1</span>
                </div>
            ))}
        </div>
    );
};