import {
	ArrowBigDownDash,
	Loader,
	ScreenShareOff,
	Smartphone
} from "lucide-react";
import type { FC } from "react";
import { useEffect, useState } from "react";

export const withTelegram = (Component: React.FC) => {
	const WithTelegramWrapper: FC = (props) => {
		const tg = window?.Telegram?.WebApp;
		const [isMobile, setIsMobile] = useState<boolean | null>(null);
		const is_dev = import.meta.env.VITE_IS_DEV;

		useEffect(() => {
			if (tg) {
				const platform = tg.platform;
				const mobilePlatforms = ["android", "ios"];
				const isMobilePlatform = mobilePlatforms.includes(platform);

				setIsMobile(isMobilePlatform);

				if (isMobilePlatform) {
					tg.expand();
					tg.enableClosingConfirmation();
					tg.ready();
				}
			} else {
				// Если Telegram WebApp не доступен (браузер), считаем не мобильным
				setIsMobile(false);
			}
		}, []);

		// Показываем загрузку пока проверяем платформу
		if (isMobile === null && !is_dev) {
			return (
				<div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
					<Loader className="animate-spin size-10 text-main-color" />
				</div>
			);
		}

		// Если не мобильная платформа - показываем блокировку
		if (!isMobile && !is_dev) {
			return (
				<div className="fixed inset-0 z-50 bg-black text-white flex items-center justify-center">
					<div className="grid grid-rows-3 gap-6">
						<div className="flex items-center justify-center">
							<ScreenShareOff className="size-20 stroke-[1px] text-red-500" />
						</div>
						<div className="flex items-center justify-center animate-bounce mt-4">
							<ArrowBigDownDash className="size-10 stroke-[1px] text-main-color" />
						</div>
						<div className="flex items-center justify-center animate-pulse">
							<Smartphone className="size-28 stroke-[1px] text-green-500" />
						</div>
					</div>
				</div>
			);
		}

		// Если мобильная платформа - показываем приложение
		return (
			<>
				<Component {...props} />
			</>
		);
	};

	return WithTelegramWrapper;
};
