import { MOCK_PROFILE_INFO } from "@/entities/profile";

import { ProfileReferral } from "@/features/profile";

import { DrawCurrent } from "@/widgets/draw";

export const HomePage = () => {
	const mock_data = MOCK_PROFILE_INFO;
	return (
		<div className="page_container">
			<div className="grid grid-flow-row gap-10">
				<DrawCurrent />
				<ProfileReferral referral_link={mock_data?.referral_link} />
			</div>
		</div>
	);
};
