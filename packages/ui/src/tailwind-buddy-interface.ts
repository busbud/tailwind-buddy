import { setupCompose } from "@busbud/tailwind-buddy";

export type Screens = "sm" | "md";
export const screens: Screens[] = ["sm", "md"];
export const compose = setupCompose<Screens>(screens);
