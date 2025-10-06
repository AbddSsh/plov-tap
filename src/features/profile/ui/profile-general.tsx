import { UserCog } from "lucide-react";
import { Link } from "react-router-dom";

import { ENUM_PATH } from "@/shared/config";

import type { IProfile } from "@/entities/profile";

interface IProfileGeneral {
	profile: IProfile;
	rice_count: number;
}

export const ProfileGeneral = ({ profile, rice_count }: IProfileGeneral) => {
	return (
		<div className="grid grid-flow-row gap-4 animate-fade-in-down">
			<div className="grid grid-flow-row gap-4 justify-items-center items-center">
				<div className="flex items-center justify-center rounded-full bg-main-color p-2 mx-auto size-20">
					<UserCog className="size-10 text-font-color" />
				</div>
				<div className="grid grid-flow-row justify-items-center items-center gap-1">
					<p className="font-bold bg-gradient-to-r from-main-color to-btn-color bg-clip-text text-transparent text-xl truncate">
						{profile?.name}
					</p>
					<p className="text-sm text-font-color truncate font-medium">
						id: {profile?.user_id}
					</p>
					<Link
						to={profile?.profile_url}
						className="text-sm text-second-color underline truncate font-bold"
					>
						@{profile?.username}
					</Link>
				</div>
			</div>
			<Link
				to={ENUM_PATH.CHARACTER}
				className="py-2 px-6 rounded-xl bg-gradient-to-r from-main-color to-btn-color text-center font-bold text-base text-font-color truncate mx-auto w-[90%]"
			>
				<span>
					<span className="animate-pulse">
						🍚 {rice_count.toLocaleString()}
					</span>
				</span>
			</Link>
		</div>
	);
};
