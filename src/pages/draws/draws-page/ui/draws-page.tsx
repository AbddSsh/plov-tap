import { DrawCurrent, DrawHistory } from "@/widgets/draw";

export const DrawsPage = () => {
	return <div className="page_container">
		<DrawCurrent />
		<DrawHistory />
	</div>;
};
