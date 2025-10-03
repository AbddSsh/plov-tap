import {
	type TypedUseSelectorHook,
	useDispatch,
	useSelector
} from "react-redux";

// eslint-disable-next-line boundaries/element-types
import type { TAppDispatch } from "@/app/providers/store/store.config";
// eslint-disable-next-line boundaries/element-types
import type { TRootState } from "@/app/providers/store/store.config";

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
