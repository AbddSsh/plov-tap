import { useAppSelector } from "@/shared/hooks";

import { MOCK_PROFILE_INFO } from "@/entities/profile";

import {
	ProfileGeneral,
	ProfileReferral,
	ProfileStats
} from "@/features/profile";

export const Profile = () => {
	const mock_data = MOCK_PROFILE_INFO;
	const { rice_count } = useAppSelector((state) => state.rice);

	return (
		<div className="grid grid-flow-row gap-8 mx-auto w-[96%]">
			<ProfileGeneral profile={mock_data} rice_count={rice_count} />
			<ProfileReferral referral_link={mock_data?.referral_link} />
			<ProfileStats profile={mock_data} />
		</div>
	);
};
