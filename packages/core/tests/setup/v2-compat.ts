import { setupCompose, VariantsProps } from "../../src/tailwind-buddy";

/**
 * Mirrors a v2 consumer's `tailwind-buddy-interface.ts`:
 * a `setupCompose` factory bound to custom screens and a class-merging function.
 */

export type Screens = "sm" | "md" | "lg" | "xl";
export const screens: Screens[] = ["sm", "md", "lg", "xl"];

/** Minimal tailwind-merge stand-in: last conflicting utility wins. */
export const mergeClasses = (input: string): string => {
  const tokens = input.split(" ").filter(Boolean);
  const seen = new Map<string, string>();
  for (const token of tokens) {
    // group key = the utility prefix (e.g. "p" for "p-1", "p-2")
    const match = token.match(/^([a-z]+)-/);
    const key = match ? match[1] : token;
    seen.set(key, token);
  }
  return [...seen.values()].join(" ");
};

export const compose = setupCompose<Screens>(screens, mergeClasses);

/* -------------------------------------------------------------------------- */
/* A representative component built exactly like a v2 consumer's variant file:*/
/* - curried `<ButtonBaseProps>()`                                             */
/* - `class:` (singular) compound variants                                    */
/* - `responsiveVariants`                                                      */
/* - `VariantsProps<typeof x>` inferred (no manual variant re-declaration)     */
/* -------------------------------------------------------------------------- */

export interface ButtonBaseProps {
  isDisabled?: boolean;
  isDisabledFocusable?: boolean;
  enableGroupHover?: boolean;
}

export const buttonVariants = compose({
  slots: {
    root: "inline-flex items-center justify-center",
    label: "font-bold",
    icon: "shrink-0",
  },
  variants: {
    appearance: {
      default: {},
      primary: {
        root: "bg-blue-500",
        icon: "text-white",
      },
      destructive: {
        root: "bg-red-500",
      },
    },
    size: {
      xs: { root: "p-1", label: "text-xs" },
      sm: { root: "p-2", label: "text-sm" },
      md: { root: "p-3", label: "text-base" },
      lg: { root: "p-4", label: "text-lg" },
    },
    variant: {
      contained: "",
      text: "",
    },
  },
  compoundVariants: [
    // v2 `class:` (singular) spelling — must still apply.
    {
      conditions: {
        appearance: "primary",
        variant: "contained",
        isDisabled: false,
        isDisabledFocusable: false,
      },
      class: {
        root: "hover:bg-blue-600",
        icon: "group-hover:text-blue-200",
      },
    },
    {
      conditions: { variant: "contained", isDisabled: true },
      class: {
        root: "bg-gray-300 text-gray-400",
        icon: "text-gray-400",
      },
    },
    // v3 `classes:` (plural) spelling must also work.
    {
      conditions: { appearance: "destructive", variant: "contained" },
      classes: {
        root: "hover:bg-red-600",
      },
    },
  ],
  defaultVariants: {
    appearance: "default",
    size: "md",
    variant: "contained",
  },
  responsiveVariants: ["size"],
})<ButtonBaseProps>();

export type ButtonProps = VariantsProps<typeof buttonVariants> & ButtonBaseProps;
