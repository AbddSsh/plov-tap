import { CheckCheck } from "lucide-react";
import type { FC } from "react";
import { Link } from "react-router-dom";

import { ENUM_PATH } from "@/shared/config";

import type { TTask } from "@/entities/task";

interface ITaskCard {
	task: TTask;
}

interface ITaskCardCore {
	task: TTask;
	handleComplete: (task: TTask) => void;
}

const TaskCardCore = ({ task, handleComplete }: ITaskCardCore) => {
	return (
		<>
			<div className="flex justify-between items-center gap-4">
				<div className="flex flex-col gap-0.5">
					<p className="text-base font-semibold">{task?.title}</p>
					<p className="text-xs text-font-color font-medium">
						{task?.description}
					</p>
				</div>
				<p className="text-[40px]">{task?.icon_url}</p>
			</div>
			<p className="text-base font-semibold text-btn-color">
				+{task?.reward_rice?.toLocaleString()} 🍚
			</p>
			{task?.action && (
				<button
					onClick={() => handleComplete(task)}
					className={`text-center bg-main-color text-font-color font-semibold px-4 py-2 rounded-md shadow-2xl text-sm`}
				>
					{task?.action?.title}
				</button>
			)}
			{task?.is_completed && (
				<div className="absolute py-2 px-4 top-0 right-0 w-fit flex justify-center items-center gap-2 backdrop-blur-sm text-center text-xs bg-main-color/30 text-green-400 font-semibold">
					<CheckCheck className="size-5 text-green-400" /> Выполнено
				</div>
			)}
		</>
	);
};

export const TaskCard: FC<ITaskCard> = ({ task }) => {
	const handleComplete = (task: TTask) => {
		if (task?.is_completed) return;
		if (task?.action?.type === "button") {
			alert(`${task?.title} completed`);
		} else if (task?.action?.type === "link" && !task?.is_page) {
			window.open(task?.action?.url, "_self");
		}
	};

	if (task?.is_page) {
		return (
			<Link
				to={`${ENUM_PATH.TASKS.ROOT}/${task?.task_id}`}
				className={`relative overflow-hidden grid grid-flow-row gap-4 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.025] ${task?.is_completed ? "cursor-not-allowed grayscale-75" : "cursor-pointer"} ${task?.is_partner_task ? "bg-gradient-to-tl from-btn-color/50 to-main-color/10" : "bg-gradient-to-bl from-main-color/10 to-main-color/30"}`}
			>
				<TaskCardCore task={task} handleComplete={handleComplete} />
			</Link>
		);
	}

	return (
		<div
			className={`relative overflow-hidden grid grid-flow-row gap-4 rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.025] ${task?.is_completed ? "cursor-not-allowed grayscale-75" : "cursor-pointer"} ${task?.is_partner_task ? "bg-gradient-to-tl from-btn-color/50 to-main-color/10" : "bg-gradient-to-bl from-main-color/10 to-main-color/30"}`}
		>
			<TaskCardCore task={task} handleComplete={handleComplete} />
		</div>
	);
};
