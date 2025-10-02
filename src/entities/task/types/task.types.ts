export type TTask = {
    task_id: number;
    title: string;
    description: string;
    reward_rice: number;
    icon_url: string;
    is_completed: boolean;
    action?: {
        title: string;
        type: "button" | "link";
        url?: string;
    }
}