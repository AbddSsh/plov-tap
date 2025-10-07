import { useEnergy } from "@/entities/rice";

import { CharacterAnimation } from "@/features/character";
import { ProgressBar } from "@/features/rice";

export const TapScreen = () => {
	const { per_period, canTap } = useEnergy();

	return (
		<div
			className={`bg-character-bg-color fixed top-0 z-10 h-screen w-full py-[160px] ${!canTap ? "grayscale" : ""}`}
		>
			<div
				className={`pb-4 grid grid-rows-[auto_1fr] gap-4 justify-center justify-items-center items-center w-full h-full`}
			>
				<ProgressBar per_period={per_period} canTap={canTap} />
				<CharacterAnimation canTap={canTap} />
			</div>
		</div>
	);
};
