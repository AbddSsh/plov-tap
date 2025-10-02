import { baseApi } from "@/shared/api";
import type { TGetUserRiceCountRequest, TGetUserRiceCountResponse } from "./rice.dto";

export const riceAPI = baseApi.injectEndpoints({
    endpoints: (build) => ({
      getUserRiceCount: build.query<TGetUserRiceCountResponse, TGetUserRiceCountRequest>({
        query: (BodyParams) => ({
          url: `/api/user/rice_count`,
          method: `POST`,
          body: BodyParams,
        }),
      }),
    //   getUserQuery: build.query<GetUserRes, void>({
    //     query: () => ({
    //       url: `/users/me`,
    //       method: `GET`,
    //     }),
    //   }),
    }),
  });
  
  export const {
    useGetUserRiceCountQuery,
  } = riceAPI;