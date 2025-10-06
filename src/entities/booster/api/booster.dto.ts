import type { IBooster } from "../types";

export type TGetBoostersRequest = {
	user_id: number;
};
export type TGetBoostersResponse = IBooster[];
