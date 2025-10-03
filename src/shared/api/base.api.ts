import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { DRAW_DATA, PROFILE_DATA, RICE_DATA, TASK_DATA } from "./tags";

export const baseApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_BASE_URL,
		credentials: "include"
	}),
	reducerPath: "api",
	endpoints: () => ({}),
	tagTypes: [RICE_DATA, DRAW_DATA, TASK_DATA, PROFILE_DATA]
});
