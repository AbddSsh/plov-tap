import type { IDrawCurrent, IDrawHistory, IDrawHistoryInfo } from "../types";

export type TGetCurrentDrawRequest = void;
export type TGetCurrentDrawResponse = IDrawCurrent;

export type TGetDrawsHistoryRequest = void;
export type TGetDrawsHistoryResponse = IDrawHistory[];

export type TGetDrawInfoRequest = {
	draw_id: string;
};
export type TGetDrawInfoResponse = IDrawHistoryInfo;
