import { setupCompose } from "../src/tailwind-buddy";

export type Screens = "sm" | "md";
const screens: Screens[] = ["sm", "md"];
const _compose = setupCompose<Screens>(screens);

export const compose = _compose;
