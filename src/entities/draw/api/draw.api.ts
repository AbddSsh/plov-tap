import { baseApi } from "@/shared/api";

import type {
	TGetCurrentDrawRequest,
	TGetCurrentDrawResponse,
	TGetDrawsHistoryRequest,
	TGetDrawsHistoryResponse
} from "./draw.dto";

export const drawAPI = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getCurrentDraw: build.query<
			TGetCurrentDrawResponse,
			TGetCurrentDrawRequest
		>({
			query: () => ({
				url: `/api/draw/current`,
				method: `GET`
			})
		}),
		getDrawsHistory: build.query<
			TGetDrawsHistoryResponse,
			TGetDrawsHistoryRequest
		>({
			query: () => ({
				url: `/api/draw/history`,
				method: `GET`
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

export const { useGetCurrentDrawQuery, useGetDrawsHistoryQuery } = drawAPI;
