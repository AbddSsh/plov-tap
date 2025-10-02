import type { FC } from "react";
import { Link } from "react-router-dom";
import type { TTask } from "@/entities/task";
import { ENUM_PATH } from "@/shared/config";

interface ITaskCard {
    task: TTask;
}

export const TaskCard:FC<ITaskCard> = ({ task }) => {

    const handleComplete = () => {
        alert(`${task?.title} completed`);
    }

    return (
        <Link to={`${ENUM_PATH.TASKS.ROOT}/${task?.task_id}`} className="grid grid-flow-row gap-4 bg-gradient-to-bl from-main-color/10 to-main-color/30 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.025]">
            <div className="flex justify-between items-center gap-4">
                <div className="flex flex-col gap-0.5">
                    <p className="text-base font-semibold">{task?.title}</p>
                    <p className="text-xs text-font-color font-medium">{task?.description}</p>
                </div>
                <p className="text-[40px]">{task?.icon_url}</p>
            </div>
            <p className="text-base font-semibold text-btn-color">+
                {task?.reward_rice?.toLocaleString()} 🍚</p>
            {task?.action && (
                <button onClick={(e) => {e.preventDefault(); handleComplete()}} className="bg-main-color text-font-color font-semibold px-4 py-2 rounded-md shadow-2xl text-sm">
                    {task?.action?.title}
                </button>
            )}
        </Link>
    );
};