import type { TTask } from "../types/task.types";

export const TASKS_MOCK_DATA: TTask[] = [
    {
        task_id: 1,
        title: "Подпишись на канал",
        description: "Подпишись на канал в Telegram, оставайся в курсе всех новостей",
        reward_rice: 5000,
        icon_url: "📢",
        is_completed: true,
        action: {
            title: "Подписаться",
            type: "link",
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
    },
    {
        task_id: 2,
        title: "Пригласи 3 друга",
        description: "Приглашай друзей и получай бонусные рисинки за каждых трех приглашенных друзей",
        reward_rice: 50000,
        icon_url: "👥",
        is_completed: false,
        action: {
            title: "Пригласить",
            type: "link",
            url: "/profile"
        }
    },
    {
        task_id: 3,
        title: "Ежедневный вход",
        description: "Будь активным и получай бонусы за ежедневный вход 7 дней подряд",
        reward_rice: 7000,
        icon_url: "📅",
        is_completed: false,
    },
    {
        task_id: 4,
        title: "Первые 10 000 рисинок",
        description: "Приветственный бонус ждет тебя с первыми 10 000 рисинок",
        reward_rice: 20000,
        icon_url: "🍚",
        is_completed: true,
        action: {
            type: "button",
            title: "Натапать",
        }
    },
    {
        task_id: 5,
        title: "Поделись в Story",
        description: "Поделись ботом в сторис в телеграм и получай бонусные рисинки",
        reward_rice: 25000,
        icon_url: "📱",
        is_completed: false,
        action: {
            type: "button",
            title: "Проверить",
        }
    },
]