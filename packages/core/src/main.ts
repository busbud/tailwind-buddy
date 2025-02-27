export { generateSafeList } from "./utils/tailwind-utils";
export { compose } from "./tailwind-buddy";

export type VariantProps<
  T extends Record<string, readonly string[]>,
  Screens extends readonly string[] = ["sm", "md", "lg", "xl", "2xl"]
> = {
  [K in keyof T]?:
    | T[K][number]
    | ({
        initial: T[K][number];
      }
    & {
        [S in Screens[number]]?: T[K][number];
      }
    )
};