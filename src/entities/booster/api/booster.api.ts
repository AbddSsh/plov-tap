import { baseApi } from "@/shared/api";

import type { TGetBoostersRequest, TGetBoostersResponse } from "./booster.dto";

export const boosterAPI = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getBoosters: build.query<TGetBoostersResponse, TGetBoostersRequest>({
			query: (params) => ({
				url: `/api/profile/boosters`,
				method: `GET`,
				params
			})
		})
	})
});

export const { useGetBoostersQuery } = boosterAPI;
