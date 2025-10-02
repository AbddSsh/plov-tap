// относительные пути от этого файла к public/locales/en/*
// путь: src/types -> ../../public/...
import common from "../../../../public/locales/ru/common/common.json";
import footer from "../../../../public/locales/ru/common/footer.json";
import header from "../../../../public/locales/ru/common/header.json";
import home from "../../../../public/locales/ru/common/home.json";
import not_found from "../../../../public/locales/ru/common/not_found.json";
import draw from "../../../../public/locales/ru/draw/draw.json";
import profile from "../../../../public/locales/ru/profile/profile.json";
import task from "../../../../public/locales/ru/task/task.json";

import type { TNestedKeyOf } from "./i18n.types";

export type THeader = typeof header;
export type TFooter = typeof footer;
export type TNot_found = typeof not_found;
export type THome = typeof home;
export type TCommon = typeof common;
export type TDraw = typeof draw;
export type TProfile = typeof profile;
export type TTask = typeof task;

export type TResources = {
	header: THeader;
	home: THome;
	common: TCommon;
	footer: TFooter;
	not_found: TNot_found;
	draw: TDraw;
	profile: TProfile;
	task: TTask;
};

export const NS = [
	"common",
	"header",
	"home",
	"not_found",
	"footer",
	"draw",
	"profile",
	"task"
] as const;
export type TNS = (typeof NS)[number];

export type TCommonKeys = TNestedKeyOf<TCommon>;
export type THeaderKeys = TNestedKeyOf<THeader>;
export type THomeKeys = TNestedKeyOf<THome>;
export type TNot_foundKeys = TNestedKeyOf<TNot_found>;
export type TFooterKeys = TNestedKeyOf<TFooter>;
export type TDrawKeys = TNestedKeyOf<TDraw>;
export type TProfileKeys = TNestedKeyOf<TProfile>;
export type TTaskKeys = TNestedKeyOf<TTask>;
