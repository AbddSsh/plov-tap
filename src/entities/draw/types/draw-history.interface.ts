export interface IDrawHistory {
	draw_id: string;
	date: string;
	winner: string;
	winner_url: string;
	prize: string;
	participants: number;
}

export interface IDrawHistoryInfo {
	draw_id: string;
	date: string;
	winner: {
		user_id: string;
		username?: string;
		profile_url?: string;
		ticket_id: string;
	};
	prize: {
		prize_name: string;
		prize_img_url: string;
	};
	participants: number;
	participants_list: IParticipant[];
	media_files: IMediaFile[];
}

export interface IParticipant {
	user_id: string;
	username?: string;
	profile_url?: string;
	ticket_id: string;
}

export interface IMediaFile {
	file_id: string;
	file_type: "image" | "video";
	file_url: string;
}
