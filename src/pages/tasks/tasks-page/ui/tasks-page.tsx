import { ReferralProgram, TasksList } from "@/widgets/task";

export const TasksPage = () => {
	return (
	<div className="page_container">
		<div className="grid grid-flow-row gap-10">
			<TasksList />
			<ReferralProgram />
		</div>
	</div>);
};
