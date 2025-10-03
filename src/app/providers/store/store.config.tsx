import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { baseApi } from "@/shared/api";

import { riceSlice } from "@/entities/rice";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["rice"]
};

const rootReducer = combineReducers({
	[riceSlice.name]: riceSlice.reducer,
	[baseApi.reducerPath]: baseApi.reducer
});

export const setupStore = () => {
	const store = configureStore({
		reducer: persistReducer(
			persistConfig,
			rootReducer
		) as unknown as typeof rootReducer,
		devTools: true,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [
						FLUSH,
						REHYDRATE,
						PAUSE,
						PERSIST,
						PURGE,
						REGISTER
					]
				}
			}).concat(baseApi.middleware)
	});
	setupListeners(store.dispatch);
	return store;
};
export const store = setupStore();
export const persistedStore = persistStore(store);

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = typeof store.dispatch;
