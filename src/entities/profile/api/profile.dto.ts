import type { IProfile } from "../types";

export type TGetProfileInfoRequest = {
	user_id: number;
};
export type TGetProfileInfoResponse = IProfile;
