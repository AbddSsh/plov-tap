// import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// interface IProfileState {
//   name: string;
//   username?: string | null;
//   referrals_count: number;
//   participated_draws_count: number;
//   completed_tasks_count: number;
//   date_of_registration: string;
// }

// const initialState: IProfileState = {
//   name: "",
//   username: null,
//   referrals_count: 0,
//   participated_draws_count: 0,
//   completed_tasks_count: 0,
//   date_of_registration: "",
// };

// export const profileSlice = createSlice({
//   name: "profile",
//   initialState,
//   reducers: {
//     setRice: (state, action: PayloadAction<number>) => {
//       state.rice_count = action.payload;
//     },
//     setPerPeriod: (state, action: PayloadAction<number>) => {
//       state.per_period = action.payload;
//     },
//     setPeriodStart: (state, action: PayloadAction<Date | null>) => {
//       state.period_start = action.payload ? action.payload.toISOString() : null;
//     },
//   },
// });

// export default profileSlice.reducer;
// export const { setRice, setPerPeriod, setPeriodStart } = profileSlice.actions;
