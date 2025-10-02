import * as React from "react";

import type { ENUM_PATH } from "./routes.config";
import { type ENUM_AUTH_TYPE, type ENUM_LAYOUT_TYPE } from "./routes.enum";

export interface IRouting {
	path: string;
	component: React.ComponentType;
	auth: ENUM_AUTH_TYPE;
	layout: ENUM_LAYOUT_TYPE;
}

export type TDrawsPath = (typeof ENUM_PATH.DRAWS)[keyof typeof ENUM_PATH.DRAWS];
