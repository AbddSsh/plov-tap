// Константы для расписания розыгрышей
export const DRAW_DAY_OF_WEEK = 0; // Воскресенье (0 = воскресенье в JavaScript)
export const DRAW_HOUR = 20; // 20:00
export const DRAW_MINUTE = 0; // 20:00
export const DRAW_SECOND = 0; // 20:00

/**
 * Получает время следующего розыгрыша (воскресенье в 20:00 по ташкентскому времени)
 */
export const getNextDrawTime = (): Date => {
	const now = new Date();

	// Переводим в ташкентское время
	const tashkentTime = new Date(now.getTime());

	// Находим следующее воскресенье
	const currentDay = tashkentTime.getDay();
	const daysUntilSunday = currentDay === 0 ? 7 : 7 - currentDay;

	const nextDraw = new Date(tashkentTime);
	nextDraw.setDate(tashkentTime.getDate() + daysUntilSunday);
	nextDraw.setHours(DRAW_HOUR, DRAW_MINUTE, DRAW_SECOND, 0);

	// Если сегодня воскресенье и время еще не прошло, то розыгрыш сегодня
	if (currentDay === 0 && tashkentTime.getHours() < DRAW_HOUR) {
		nextDraw.setDate(tashkentTime.getDate());
	}

	// Переводим обратно в UTC
	return new Date(nextDraw.getTime());
};

/**
 * Вычисляет количество секунд до следующего розыгрыша
 */
export const getTimeUntilNextDraw = (): number => {
	const now = new Date();
	const nextDraw = getNextDrawTime();
	const diffInSeconds = Math.floor(
		(nextDraw.getTime() - now.getTime()) / 1000
	);

	return Math.max(0, diffInSeconds);
};
