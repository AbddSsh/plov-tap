import type {
	ENUM_BOOSTER_LEVEL_TYPE,
	ENUM_BOOSTER_TYPE
} from "./booster-type.enum";

export interface IBooster {
	booster_type: ENUM_BOOSTER_TYPE;
	booster_level: ENUM_BOOSTER_LEVEL_TYPE;
	icon_url: string;
	upgrade_price: number;
}
