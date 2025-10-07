import { Flag, History } from "lucide-react";
import { useTranslation } from "react-i18next";

import {
	TASKS_MOCK_DATA_ONETIME,
	TASKS_MOCK_DATA_PERIODIC,
	TaskCard
} from "@/entities/task";

export const TasksList = () => {
	const { t } = useTranslation("task");
	// get all tasks
	const tasks_onetime = TASKS_MOCK_DATA_ONETIME;
	const tasks_periodic = TASKS_MOCK_DATA_PERIODIC;

	return (
		<div className="grid grid-flow-row gap-8">
			<div className="grid grid-flow-row gap-4">
				<div className="relative flex items-center justify-center animate-fade-in-down">
					<div className="text-[50px] animate-bounce">🍚</div>
					<div className="absolute -top-10 bg-gradient-to-r from-second-color to-btn-color rounded-full size-28 mx-auto opacity-10 animate-ping"></div>
				</div>
				<div className="text-center text-3xl font-bold bg-gradient-to-r from-main-color to-btn-color bg-clip-text text-transparent animate-fade-in-up">
					{t("tasks.title")}
				</div>
				<div className="mx-auto max-w-[90%] text-center text-base text-font-color font-medium animate-fade-in-up">
					{t("tasks.description")}
				</div>
			</div>
			<div className="grid grid-flow-row gap-6">
				<div className="flex items-center justify-center gap-2">
					<Flag className="size-6 text-btn-color" />
					<h3 className="text-lg font-semibold text-center text-btn-color">
						{t("tasks.onetime")}
					</h3>
				</div>
				<div className="grid grid-flow-row gap-4">
					{tasks_onetime?.map((task) => (
						<TaskCard key={task?.task_id} task={task} />
					))}
				</div>
			</div>
			<div className="grid grid-flow-row gap-6">
				<div className="flex items-center justify-center gap-2">
					<History className="size-6 text-btn-color" />
					<h3 className="text-lg font-semibold text-center text-btn-color">
						{t("tasks.periodic")}
					</h3>
				</div>
				<div className="grid grid-flow-row gap-4">
					{tasks_periodic?.map((task) => (
						<TaskCard key={task?.task_id} task={task} />
					))}
				</div>
			</div>
		</div>
	);
};
