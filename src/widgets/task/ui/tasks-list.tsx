import { useTranslation } from "react-i18next";
import { TaskCard, TASKS_MOCK_DATA } from "@/entities/task";

export const TasksList = () => {
    const { t } = useTranslation("task");
    // get all tasks
    const tasks = TASKS_MOCK_DATA;

    return (
        <div className="grid grid-flow-row gap-8">
            <div className="grid grid-flow-row gap-4">
                <div className="relative mt-10 flex items-center justify-center animate-fade-in-down">
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
            <div className="grid grid-flow-row gap-4">
                {tasks?.map((task) => (
                    <TaskCard key={task?.task_id} task={task} />
                ))}
            </div>
        </div>
    );
};