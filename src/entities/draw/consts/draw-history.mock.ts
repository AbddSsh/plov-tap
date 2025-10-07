import type { IDrawHistory, IDrawHistoryInfo } from "@/entities/draw";

export const DRAWS_HISTORY_MOCK: IDrawHistory[] = [
	{
		draw_id: "dssdf23efsd32",
		date: "24 ноября 2024",
		winner: "@winner_user",
		winner_url: "https://example.com",
		prize: "AirPods Pro",
		participants: 234
	},
	{
		draw_id: "dss23df23efsd",
		date: "17 ноября 2024",
		winner: "@lucky_guy",
		winner_url: "https://example.com",
		prize: "iPad Air",
		participants: 189
	},
	{
		draw_id: "dssdsdf2345efsd",
		date: "10 ноября 2024",
		winner: "@plov_lover",
		winner_url: "https://example.com",
		prize: "MacBook Air",
		participants: 312
	},
	{
		draw_id: "ds43fssdfrf33efsd",
		date: "3 ноября 2024",
		winner: "@coffee_lover",
		winner_url: "https://example.com",
		prize: "iPhone 15 Pro",
		participants: 298
	},
	{
		draw_id: "dsf3sdf23efsd",
		date: "26 октября 2024",
		winner: "@bookworm",
		winner_url: "https://example.com",
		prize: "AirPods Max",
		participants: 156
	},
	{
		draw_id: "dsefsdf23efsd",
		date: "19 октября 2024",
		winner: "@music_enthusiast",
		winner_url: "https://example.com",
		prize: "MacBook Pro",
		participants: 245
	},
	{
		draw_id: "dssdf3f23efsd",
		date: "12 октября 2024",
		winner: "@fashion_fan",
		winner_url: "https://example.com",
		prize: "iPad Pro",
		participants: 192
	},
	{
		draw_id: "dssfesdf23efsd",
		date: "5 октября 2024",
		winner: "@art_lover",
		winner_url: "https://example.com",
		prize: "Apple Watch",
		participants: 275
	},
	{
		draw_id: "dssfwedf23efsd",
		date: "28 сентября 2024",
		winner: "@foodie",
		winner_url: "https://example.com",
		prize: "Apple TV",
		participants: 167
	},
	{
		draw_id: "d1fssdf23efsd",
		date: "21 сентября 2024",
		winner: "@tech_geek",
		winner_url: "https://example.com",
		prize: "AirPods Pro",
		participants: 229
	},
	{
		draw_id: "dsfgvsd3df23efsd",
		date: "14 сентября 2024",
		winner: "@travel_enthusiast",
		winner_url: "https://example.com",
		prize: "iPad Air",
		participants: 178
	},
	{
		draw_id: "ds3fssdf23efsd",
		date: "7 сентября 2024",
		winner: "@fashion_icon",
		winner_url: "https://example.com",
		prize: "MacBook Air",
		participants: 254
	},
	{
		draw_id: "dssngrdf23efsd",
		date: "30 августа 2024",
		winner: "@movie_buff",
		winner_url: "https://example.com",
		prize: "Apple Watch",
		participants: 185
	},
	{
		draw_id: "dsfwsdf23efsd",
		date: "23 августа 2024",
		winner: "@tech_geek",
		winner_url: "https://example.com",
		prize: "AirPods Pro",
		participants: 242
	},
	{
		draw_id: "dsgrwsv3sdf23efsd",
		date: "16 августа 2024",
		winner: "@travel_enthusiast",
		winner_url: "https://example.com",
		prize: "iPad Air",
		participants: 196
	},
	{
		draw_id: "dssdf23efsd",
		date: "9 августа 2024",
		winner: "@fashion_icon",
		winner_url: "https://example.com",
		prize: "MacBook Air",
		participants: 267
	},
	{
		draw_id: "ds23fdsfsdf23efsd",
		date: "2 августа 2024",
		winner: "@movie_buff",
		winner_url: "https://example.com",
		prize: "Apple Watch",
		participants: 172
	},
	{
		draw_id: "dssfg2df23efsd",
		date: "26 июля 2024",
		winner: "@tech_geek",
		winner_url: "https://example.com",
		prize: "AirPods Pro",
		participants: 235
	},
	{
		draw_id: "dsfsc23sdf23efsd",
		date: "19 июля 2024",
		winner: "@travel_enthusiast",
		winner_url: "https://example.com",
		prize: "iPad Air",
		participants: 189
	},
	{
		draw_id: "dssd43fsdf23efsd",
		date: "12 июля 2024",
		winner: "@fashion_icon",
		winner_url: "https://example.com",
		prize: "MacBook Air",
		participants: 251
	}
];

export const DRAW_HISTORY_INFO_MOCK: IDrawHistoryInfo = {
	draw_id: "dssdf23efsd",
	date: "24 ноября 2024",
	winner: {
		user_id: "123456789",
		username: "@winner_user",
		profile_url: "https://t.me/winner_user",
		ticket_id: "TKT-001-234"
	},
	prize: {
		prize_name: "AirPods Pro",
		prize_img_url:
			"https://crdms.images.consumerreports.org/f_auto,w_600/prod/products/cr/models/411891-noise-canceling-headphones-apple-airpods-pro-2nd-generation-with-magsafe-case-usb-c-10036575.png"
	},
	participants: 234,
	participants_list: [
		{
			user_id: "123456789",
			username: "@winner_user",
			profile_url: "https://t.me/winner_user",
			ticket_id: "TKT-001-234"
		},
		{
			user_id: "987654321",
			username: "@lucky_guy",
			profile_url: "https://t.me/lucky_guy",
			ticket_id: "TKT-002-156"
		},
		{
			user_id: "456789123",
			username: "@plov_lover",
			profile_url: "https://t.me/plov_lover",
			ticket_id: "TKT-003-089"
		},
		{
			user_id: "789123456",
			username: "@coffee_master",
			profile_url: "https://t.me/coffee_master",
			ticket_id: "TKT-004-201"
		},
		{
			user_id: "321654987",
			username: "@bookworm",
			profile_url: "https://t.me/bookworm",
			ticket_id: "TKT-005-178"
		},
		{
			user_id: "654987321",
			username: "@music_enthusiast",
			profile_url: "https://t.me/music_enthusiast",
			ticket_id: "TKT-006-092"
		},
		{
			user_id: "147258369",
			username: "@fashion_fan",
			profile_url: "https://t.me/fashion_fan",
			ticket_id: "TKT-007-134"
		},
		{
			user_id: "369258147",
			username: "@art_lover",
			profile_url: "https://t.me/art_lover",
			ticket_id: "TKT-008-067"
		},
		{
			user_id: "258147369",
			username: "@foodie",
			profile_url: "https://t.me/foodie",
			ticket_id: "TKT-009-145"
		},
		{
			user_id: "741852963",
			username: "@tech_geek",
			profile_url: "https://t.me/tech_geek",
			ticket_id: "TKT-010-223"
		},
		{
			user_id: "963852741",
			username: "@travel_enthusiast",
			profile_url: "https://t.me/travel_enthusiast",
			ticket_id: "TKT-011-156"
		},
		{
			user_id: "852741963",
			username: "@fashion_icon",
			profile_url: "https://t.me/fashion_icon",
			ticket_id: "TKT-012-189"
		},
		{
			user_id: "159753486",
			username: "@movie_buff",
			profile_url: "https://t.me/movie_buff",
			ticket_id: "TKT-013-077"
		},
		{
			user_id: "486159753",
			username: "@gaming_pro",
			profile_url: "https://t.me/gaming_pro",
			ticket_id: "TKT-014-198"
		},
		{
			user_id: "753486159",
			username: "@fitness_guru",
			profile_url: "https://t.me/fitness_guru",
			ticket_id: "TKT-015-112"
		},
		{
			user_id: "951753486",
			username: "@nature_lover",
			profile_url: "https://t.me/nature_lover",
			ticket_id: "TKT-016-203"
		},
		{
			user_id: "486951753",
			username: "@crypto_trader",
			profile_url: "https://t.me/crypto_trader",
			ticket_id: "TKT-017-045"
		},
		{
			user_id: "753951486",
			username: "@photography_pro",
			profile_url: "https://t.me/photography_pro",
			ticket_id: "TKT-018-167"
		},
		{
			user_id: "159486753",
			username: "@cooking_chef",
			profile_url: "https://t.me/cooking_chef",
			ticket_id: "TKT-019-134"
		},
		{
			user_id: "486753159",
			username: "@dance_queen",
			profile_url: "https://t.me/dance_queen",
			ticket_id: "TKT-020-089"
		},
		{
			user_id: "753159486",
			username: "@study_hard",
			profile_url: "https://t.me/study_hard",
			ticket_id: "TKT-021-256"
		},
		{
			user_id: "951486753",
			username: "@work_from_home",
			profile_url: "https://t.me/work_from_home",
			ticket_id: "TKT-022-178"
		},
		{
			user_id: "486753951",
			username: "@night_owl",
			profile_url: "https://t.me/night_owl",
			ticket_id: "TKT-023-123"
		},
		{
			user_id: "753951486",
			username: "@early_bird",
			profile_url: "https://t.me/early_bird",
			ticket_id: "TKT-024-234"
		}
	],
	media_files: [
		{
			file_id: "media_001",
			file_type: "image",
			file_url:
				"data:image/jpeg;base64,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"
		},
		{
			file_id: "media_002",
			file_type: "video",
			file_url:
				"https://videocdn.cdnpk.net/videos/e56271f3-ff40-5b6a-b99e-8792335100f9/horizontal/previews/clear/large.mp4?token=exp=1759833400~hmac=f4bb7cd57c3fbab0fb60702d505c2005bdd47fac8d23b80e410dc8aca0e37770"
		},
		{
			file_id: "media_003",
			file_type: "image",
			file_url:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvoIJD4ly73P2lyorHG6mWCHT06Kj0qmBAlw&s"
		},
		{
			file_id: "media_004",
			file_type: "video",
			file_url:
				"https://videocdn.cdnpk.net/videos/e56271f3-ff40-5b6a-b99e-8792335100f9/horizontal/previews/clear/large.mp4?token=exp=1759833400~hmac=f4bb7cd57c3fbab0fb60702d505c2005bdd47fac8d23b80e410dc8aca0e37770"
		},
		{
			file_id: "media_005",
			file_type: "image",
			file_url:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_21yflSJ_R11tiPXWIcfYCcm2w96btC0bqw&s"
		}
	]
};
