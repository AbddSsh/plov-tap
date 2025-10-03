import { TASK_DATA, baseApi } from "@/shared/api";

import type { TGetAllTasksRequest, TGetAllTasksResponse } from "./task.dto";

export const taskAPI = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getAllTasks: build.query<TGetAllTasksResponse, TGetAllTasksRequest>({
			query: (params) => ({
				url: `/api/task/all`,
				method: `GET`,
				params
			}),
			providesTags: [TASK_DATA]
		})
		//   getUserQuery: build.query<GetUserRes, void>({
		//     query: () => ({
		//       url: `/users/me`,
		//       method: `GET`,
		//     }),
		//   }),
	})
});

export const { useGetAllTasksQuery } = taskAPI;
