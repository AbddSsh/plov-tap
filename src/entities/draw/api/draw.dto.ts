import type { IDrawCurrent, IDrawHistory } from "../types";

export type TGetCurrentDrawRequest = void;
export type TGetCurrentDrawResponse = IDrawCurrent;

export type TGetDrawsHistoryRequest = void;
export type TGetDrawsHistoryResponse = IDrawHistory[];
