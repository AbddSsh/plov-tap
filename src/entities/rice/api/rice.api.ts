import { baseApi } from "@/shared/api";

import type {
	TGetUserRiceCountRequest,
	TGetUserRiceCountResponse
} from "./rice.dto";

export const riceAPI = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getUserRiceCount: build.query<
			TGetUserRiceCountResponse,
			TGetUserRiceCountRequest
		>({
			query: (params) => ({
				url: `/api/user/rice_count`,
				method: `GET`,
				params
			})
		})
		//   getUserQuery: build.query<GetUserRes, void>({
		//     query: () => ({
		//       url: `/users/me`,
		//       method: `GET`,
		//     }),
		//   }),
	})
});

export const { useGetUserRiceCountQuery } = riceAPI;
