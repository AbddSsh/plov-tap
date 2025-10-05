import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IRiceState {
	rice_count: number;
	per_period: number;
	period_start: string | null;
	restore_start: string | null; // Время начала накопления энергии
	last_tap_time: string | null; // Время последнего тапа
}

const initialState: IRiceState = {
	rice_count: 0,
	per_period: 0,
	period_start: null,
	restore_start: null,
	last_tap_time: null
};

export const riceSlice = createSlice({
	name: "rice",
	initialState,
	reducers: {
		setRice: (state, action: PayloadAction<number>) => {
			state.rice_count = action.payload;
		},
		setPerPeriod: (
			state,
			action: PayloadAction<number | ((prev: number) => number)>
		) => {
			state.per_period =
				typeof action.payload === "function"
					? action.payload(state.per_period)
					: action.payload;
		},
		setPeriodStart: (state, action: PayloadAction<Date | null>) => {
			state.period_start = action.payload
				? action.payload.toISOString()
				: null;
		},
		setRestoreStart: (state, action: PayloadAction<Date | null>) => {
			state.restore_start = action.payload
				? action.payload.toISOString()
				: null;
		},
		setLastTapTime: (state, action: PayloadAction<Date | null>) => {
			state.last_tap_time = action.payload
				? action.payload.toISOString()
				: null;
		}
	}
});

export default riceSlice.reducer;
export const {
	setRice,
	setPerPeriod,
	setPeriodStart,
	setRestoreStart,
	setLastTapTime
} = riceSlice.actions;
