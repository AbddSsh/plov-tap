import { DrawCurrent, DrawHistory } from "@/widgets/draw";

export const DrawsPage = () => {
	return (
		<div className="page_container">
			<div className="grid grid-flow-row gap-10">
				<DrawCurrent />
				<DrawHistory />
			</div>
		</div>
	);
};
