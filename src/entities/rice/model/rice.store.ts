import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IRiceState {
	rice_count: number;
	per_period: number;
	period_start: string | null;
	restore_start: string | null;
	last_tap_time: string | null;
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
		setPerPeriod: (state, action: PayloadAction<number>) => {
			state.per_period = action.payload;
		},
		setPeriodStart: (state, action: PayloadAction<string | null>) => {
			state.period_start = action.payload;
		},
		setRestoreStart: (state, action: PayloadAction<string | null>) => {
			state.restore_start = action.payload;
		},
		setLastTapTime: (state, action: PayloadAction<string | null>) => {
			state.last_tap_time = action.payload;
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
