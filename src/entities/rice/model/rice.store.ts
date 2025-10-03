import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IRiceState {
	rice_count: number;
	per_period: number;
	period_start: string | null;
}

const initialState: IRiceState = {
	rice_count: 0,
	per_period: 0,
	period_start: null
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
		setPeriodStart: (state, action: PayloadAction<Date | null>) => {
			state.period_start = action.payload
				? action.payload.toISOString()
				: null;
		}
	}
});

export default riceSlice.reducer;
export const { setRice, setPerPeriod, setPeriodStart } = riceSlice.actions;
