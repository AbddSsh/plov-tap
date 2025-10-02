// eslint-disable-next-line boundaries/element-types
import type { TAppDispatch, TRootState } from "@/app/providers/store/store.config";
import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
