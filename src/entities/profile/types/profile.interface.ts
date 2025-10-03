export interface IProfile {
	name: string;
	username?: string | null;
	user_id: number;
	profile_url: string;
	referrals_count: number;
	participated_draws_count: number;
	completed_tasks_count: number;
	date_of_registration: string;
	referral_link: string;
}
