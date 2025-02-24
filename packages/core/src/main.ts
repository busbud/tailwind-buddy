export { generateSafeList } from "./utils/tailwind-utils";
export { compose } from "./tailwind-buddy";
export type VariantProps<T extends Record<string, string[]>> = {
    [K in keyof T]: T[K][number];
};