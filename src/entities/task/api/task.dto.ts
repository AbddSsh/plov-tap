import type { TTask } from "../types/task.types";

export type TGetAllTasksRequest = {
    user_id: number;
}
export type TGetAllTasksResponse = {
    tasks: TTask[];
}