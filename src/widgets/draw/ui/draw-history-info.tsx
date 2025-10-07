import { Calendar, ExternalLink, Search, Trophy, Users } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { DRAW_HISTORY_INFO_MOCK } from "@/entities/draw";

export const DrawHistoryInfo = () => {
	const { id } = useParams();
	const { t } = useTranslation("draw");
	// for api
	console.log(id);
	const draw_history_info = DRAW_HISTORY_INFO_MOCK;

	const [searchQuery, setSearchQuery] = useState("");

	const filteredParticipants = draw_history_info.participants_list?.filter(
		(participant) => {
			const query = searchQuery.toLowerCase();
			return (
				participant.user_id.toLowerCase().includes(query) ||
				participant.username?.toLowerCase().includes(query) ||
				participant.ticket_id.toLowerCase().includes(query)
			);
		}
	);

	return (
		<div className="grid grid-flow-row gap-8">
			{/* Prize Section */}
			<div className="grid grid-flow-row justify-items-center items-center gap-2">
				<p className="text-3xl font-bold bg-gradient-to-r from-main-color to-btn-color bg-clip-text text-transparent">
					{draw_history_info?.prize?.prize_name}
				</p>
				<div className="flex items-center justify-center gap-2 text-font-color font-semibold text-sm">
					<Calendar className="size-4" />
					<span>{draw_history_info?.date}</span>
				</div>
				<div>
					<img
						src={draw_history_info?.prize?.prize_img_url}
						alt={draw_history_info?.prize?.prize_name}
						className="rounded-2xl overflow-hidden"
					/>
				</div>
				<div className="inline-flex items-center gap-2 bg-second-color/20 px-4 py-2 rounded-full">
					<Users className="size-5 text-second-color" />
					<span className="font-semibold">
						{draw_history_info.participants}{" "}
						{t("draw_history.draw_history_info.participants")}
					</span>
				</div>
			</div>

			{/* Winner Section */}
			<div className="grid grid-flow-row gap-4 bg-second-color/10 rounded-3xl p-4">
				<div className="flex items-center justify-center gap-2">
					<Trophy className="size-6 text-main-color" />
					<h3 className="text-xl font-bold text-main-color">
						{t("draw_history.draw_history_info.winner")}
					</h3>
				</div>
				<div className="grid grid-flow-row items-center gap-4">
					<div className="grid grid-flow-col items-center justify-between gap-2">
						<p className="text-sm text-font-color font-semibold">
							{t("draw_history.draw_history_info.username")}
						</p>
						<p className="text-sm font-bold text-second-color truncate">
							{draw_history_info.winner?.username || "_____"}
						</p>
					</div>
					<div className="grid grid-flow-col items-center justify-between gap-2">
						<p className="text-sm text-font-color font-semibold">
							{t("draw_history.draw_history_info.user_id")}
						</p>
						<p className="text-sm font-bold text-second-color">
							{draw_history_info.winner?.user_id || "_____"}
						</p>
					</div>
					<div className="grid grid-flow-col items-center justify-between gap-2">
						<p className="text-sm text-font-color font-semibold">
							{t("draw_history.draw_history_info.ticket_id")}:
						</p>
						<p className="text-sm font-bold text-second-color">
							{draw_history_info.winner?.ticket_id || "_____"}
						</p>
					</div>
					{draw_history_info.winner?.profile_url && (
						<a
							href={draw_history_info.winner?.profile_url}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-2 px-4 py-2 bg-second-color rounded-full"
						>
							<span className="font-semibold text-font-color text-sm">
								{t("draw_history.draw_history_info.profile")}
							</span>
							<ExternalLink className="size-4" />
						</a>
					)}
				</div>
			</div>

			{/* Participants Section */}
			<div className="grid grid-flow-row items-center gap-4 bg-gradient-to-br from-second-color/10 to-second-color/30 rounded-2xl p-4">
				<div className="grid grid-flow-row items-center justify-stretch justify-items-center gap-4">
					<h3 className="text-xl font-bold text-main-color">
						{draw_history_info.participants?.toLocaleString()}{" "}
						{t("draw_history.draw_history_info.participants")}
					</h3>
					<div className="relative w-full md:w-96">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-font-color/50" />
						<input
							type="text"
							placeholder={t(
								"draw_history.draw_history_info.search"
							)}
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="text-xs w-full pl-10 pr-4 py-3 bg-second-color/20 border border-main-color/30 rounded-full text-font-color placeholder-font-color/50 focus:outline-none focus:border-main-color transition-colors"
						/>
					</div>
				</div>

				<div className="grid grid-flow-row gap-3 max-h-[50vh] overflow-y-auto px-2 -mx-2">
					{filteredParticipants?.map((participant) => (
						<div
							key={participant.user_id}
							className="grid grid-cols-[1fr_auto] gap-2 items-start justify-between bg-second-color/20 rounded-xl p-4 transition-colors"
						>
							<div className="grid grid-flow-row items-center gap-2">
								<p className="text-sm font-bold text-font-color truncate">
									{participant?.username || "_____"}
								</p>
								<span className="text-xs font-semibold text-font-color/50">
									{t(
										"draw_history.draw_history_info.user_id"
									)}
									: {participant?.user_id || "_____"}
								</span>
								<span className="text-xs font-semibold text-main-color">
									{t(
										"draw_history.draw_history_info.ticket_id"
									)}
									: {participant?.ticket_id || "_____"}
								</span>
							</div>
							{participant?.profile_url && (
								<a
									href={participant?.profile_url}
									target="_blank"
									rel="noopener noreferrer"
									className="rounded-full"
								>
									<ExternalLink className="size-5 text-main-color" />
								</a>
							)}
						</div>
					))}
				</div>
			</div>

			{/* Media Files */}
			{draw_history_info?.media_files?.length > 0 && (
				<div className="grid grid-flow-row gap-4">
					<h3 className="text-center text-xl font-bold text-main-color">
						{t("draw_history.draw_history_info.media_files")}
					</h3>
					<div className="grid grid-cols-1 gap-4">
						{draw_history_info?.media_files?.map((media) => (
							<div key={media.file_id} className="relative group">
								{media.file_type === "image" ? (
									<div className="">
										<img
											src={media.file_url}
											alt="Media"
											className="w-full rounded-xl"
										/>
									</div>
								) : (
									<div className="bg-second-color/20 rounded-xl flex items-center justify-center border-2 border-second-color/30 hover:border-second-color transition-colors cursor-pointer">
										<video
											src={media.file_url}
											className="w-full rounded-xl"
											autoPlay
											muted
											loop
											playsInline
											controls
										/>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
