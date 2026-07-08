/**
 * Type-level proof that the v2 compat surface matches a v2 consumer's usage.
 * This file is type-checked via `pnpm typecheck:tests` (not executed at runtime).
 *
 * v2 `setupCompose` infers variant *keys* from the `variants` object literal so
 * consumers never re-declare them (resolves issue #31). As in v2, the inferred
 * variant *values* are intentionally loose (`string | number`) — that is the
 * behaviour existing v2 consumers were built against, so preserving it means zero migration.
 */
import { expectTypeOf } from "vitest";
import type { ButtonProps } from "../setup/v2-compat";
import { buttonVariants } from "../setup/v2-compat";

// 1. Slot functions are exposed at the top level (v2 destructuring pattern).
const { root, label, icon } = buttonVariants;
expectTypeOf(root).toEqualTypeOf<(props?: ButtonProps) => string>();
expectTypeOf(label).toEqualTypeOf<(props?: ButtonProps) => string>();
expectTypeOf(icon).toEqualTypeOf<(props?: ButtonProps) => string>();

// 2. `definition()` exposes defaults & variants for introspection (storybook).
const defaultVariants = buttonVariants.definition().defaultVariants;
// Non-optional (required) so `.appearance` / `.size` / `.variant` need no null guard.
expectTypeOf(defaultVariants).not.toBeUndefined();
expectTypeOf(defaultVariants).toHaveProperty("appearance");
expectTypeOf(defaultVariants).toHaveProperty("size");
expectTypeOf(defaultVariants).toHaveProperty("variant");

const variants = buttonVariants.definition().variants;
expectTypeOf(variants).toMatchTypeOf<Record<string, unknown> | undefined>();

// 3. `options` is present for `generateSafeList`.
expectTypeOf(buttonVariants.options).toMatchTypeOf<Record<string, unknown>>();

// 4. `VariantsProps<typeof buttonVariants>` is inferred WITHOUT re-declaring the
//    variant keys (issue #31): the bag carries every declared variant key plus
//    the base props, all optional.
expectTypeOf<ButtonProps>().toMatchTypeOf<{
  appearance?: string | number;
  size?:
    | string
    | number
    | { initial: string | number }
    | { sm?: string | number }
    | { md?: string | number }
    | { lg?: string | number }
    | { xl?: string | number };
  variant?: string | number;
  isDisabled?: boolean;
  isDisabledFocusable?: boolean;
  enableGroupHover?: boolean;
  className?: string;
  class?: string;
}>();

// 5. The base props flow through (intersection).
expectTypeOf<ButtonProps>().toMatchTypeOf<{ isDisabled?: boolean }>();

// 6. `size` is responsive (listed in responsiveVariants) — accepts an object.
expectTypeOf<ButtonProps["size"]>().toMatchTypeOf<
  | string
  | number
  | { initial: string | number }
  | undefined
>();

// 7. Slot calls accept the inferred bag.
expectTypeOf(root).toBeCallableWith({
  appearance: "primary",
  size: { initial: "md", lg: "lg" },
  variant: "contained",
  isDisabled: false,
  className: "extra",
});
