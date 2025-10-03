import { baseApi } from "@/shared/api";

import type {
	TGetProfileInfoRequest,
	TGetProfileInfoResponse
} from "./profile.dto";

export const drawAPI = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getProfileInfo: build.query<
			TGetProfileInfoResponse,
			TGetProfileInfoRequest
		>({
			query: (params) => ({
				url: `/api/profile/info`,
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

export const { useGetProfileInfoQuery } = drawAPI;
