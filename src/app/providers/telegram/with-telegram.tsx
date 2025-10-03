import type { FC } from "react";
import { useEffect } from "react";

export const withTelegram = (Component: React.FC) => {
	const WithTelegramWrapper: FC = (props) => {
		const tg = window?.Telegram?.WebApp;

		useEffect(() => {
			if (tg) {
				tg.expand();
				tg.enableClosingConfirmation();
				tg.ready();
			}
		}, []);

		return (
			<>
				<Component {...props} />
			</>
		);
	};

	return WithTelegramWrapper;
};
