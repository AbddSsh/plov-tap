import { ENUM_BOOSTER, type IBooster } from "../types";

export const MOCK_BOOSTERS: IBooster[] = [
	{
		booster_type: ENUM_BOOSTER.MULTI_TAP,
		booster_level: 1,
		upgrade_price: 3000,
		icon_url: "👆"
	},
	{
		booster_type: ENUM_BOOSTER.ENERGY_LIMIT,
		booster_level: 2,
		upgrade_price: 6000,
		icon_url: "🔋"
	},

	{
		booster_type: ENUM_BOOSTER.ENERGY_TIME,
		booster_level: 3,
		upgrade_price: 9000,
		icon_url: "⚡️"
	},
	{
		booster_type: ENUM_BOOSTER.HELPER_PERSON,
		booster_level: 1,
		upgrade_price: 12000,
		icon_url: "👷‍♂️"
	}
];
