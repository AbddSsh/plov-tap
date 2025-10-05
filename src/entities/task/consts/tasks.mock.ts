import type { TTask } from "../types/task.types";

export const TASKS_MOCK_DATA_ONETIME: TTask[] = [
	{
		task_id: 1,
		title: "Подпишись на канал",
		description:
			"Подпишись на канал в Telegram, оставайся в курсе всех новостей",
		reward_rice: 5000,
		icon_url: "📢",
		is_completed: true,
		action: {
			title: "Подписаться",
			type: "link",
			url: "https://t.me/abddssh"
		},
		is_page: false,
		is_partner_task: false
	},
	{
		task_id: 123123,
		title: "Бесплатная карта AloqaBank",
		description:
			"Открой бесплатно карту UZCARD/HUMO в AloqaBank. Переводи до 100 000 000 сум в месяц без комиссий!",
		reward_rice: 50000,
		icon_url: "💳",
		is_completed: false,
		action: {
			title: "Открыть карту",
			type: "link",
			url: "/tasks/123123"
		},
		is_page: true,
		is_partner_task: true
	},
	{
		task_id: 4,
		title: "Первые 10 000 рисинок",
		description: "Приветственный бонус ждет тебя с первыми 10 000 рисинок",
		reward_rice: 20000,
		icon_url: "🍚",
		is_completed: true,
		action: {
			title: "Начать",
			type: "link",
			url: "/"
		},
		is_page: false,
		is_partner_task: false
	},
	{
		task_id: 5,
		title: "Поделись в Story",
		description:
			"Поделись ботом в сторис в телеграм и получай бонусные рисинки",
		reward_rice: 25000,
		icon_url: "📱",
		is_completed: false,
		action: {
			type: "button",
			title: "Проверить"
		},
		is_page: false,
		is_partner_task: false
	}
];

export const TASKS_MOCK_DATA_PERIODIC: TTask[] = [
	{
		task_id: 2,
		title: "Пригласи 3 друга",
		description:
			"Приглашай друзей и получай бонусные рисинки за каждых трех приглашенных друзей",
		reward_rice: 50000,
		icon_url: "👥",
		is_completed: false,
		action: {
			title: "Пригласить",
			type: "link",
			url: "https://t.me/share/url?url=https://t.me/plov_tapper_bot?start=ref_12345"
			// url: "https://t.me/share/url?url=https://t.me/plov_tapper_bot?start=ref_12345&text=GOOOOOOOOOOO"
		},
		is_page: false,
		is_partner_task: false
	},
	{
		task_id: 3,
		title: "Ежедневный вход",
		description: "Будь активным и получай бонусы за ежедневный вход",
		reward_rice: 2000,
		icon_url: "📅",
		is_completed: false,
		is_page: false,
		is_partner_task: false
	},
	{
		task_id: 4,
		title: "Активный 7 дней подряд",
		description:
			"Будь активным и получай бонусы за ежедневный вход 7 дней подряд",
		reward_rice: 10000,
		icon_url: "📅",
		is_completed: false,
		is_page: false,
		is_partner_task: false
	}
];
