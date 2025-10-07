import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
	hideBackButton,
	isBackButtonAvailable,
	removeBackButtonHandler,
	setBackButtonHandler,
	showBackButton
} from "@/shared/lib";

interface IUseBackButtonOptions {
	show?: boolean;
	backPath?: string;
	onBack?: () => void;
}

/**
 * Хук для управления кнопкой "Back" в Telegram WebApp
 */
export const useBackButton = (options: IUseBackButtonOptions = {}) => {
	const { show = false, backPath, onBack } = options;
	const navigate = useNavigate();

	const handleBack = useCallback(() => {
		if (onBack) {
			onBack();
		} else if (backPath) {
			navigate(backPath);
		} else {
			navigate(-1);
		}
	}, [onBack, backPath, navigate]);

	useEffect(() => {
		if (!isBackButtonAvailable()) {
			return;
		}

		if (show) {
			showBackButton();
			setBackButtonHandler(handleBack);
		} else {
			hideBackButton();
			removeBackButtonHandler(handleBack);
		}

		// Cleanup при размонтировании компонента
		return () => {
			if (isBackButtonAvailable()) {
				removeBackButtonHandler(handleBack);
			}
		};
	}, [show, handleBack]);

	return {
		showBackButton: useCallback(() => {
			if (isBackButtonAvailable()) {
				showBackButton();
				setBackButtonHandler(handleBack);
			}
		}, [handleBack]),
		hideBackButton: useCallback(() => {
			if (isBackButtonAvailable()) {
				hideBackButton();
				removeBackButtonHandler(handleBack);
			}
		}, [handleBack]),
		isAvailable: isBackButtonAvailable()
	};
};
