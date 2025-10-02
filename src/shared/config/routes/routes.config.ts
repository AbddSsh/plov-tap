export const ENUM_PATH = {
	MAIN: "/",
	NOT_FOUND: "/*",
	PROFILE: "/profile",
	TASKS: {
		ROOT: "/tasks",
		TASK: "/tasks/:id"
	},
	DRAWS: {
		ROOT: "/draws",
		DRAW: "/draws/:id"
	}
} as const;
