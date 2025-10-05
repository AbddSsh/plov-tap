import type { TTask } from "../types/task.types";

export type TGetAllTasksRequest = {
	user_id: number;
	type: "periodic" | "onetime";
};
export type TGetAllTasksResponse = {
	tasks: TTask[];
};
