import { cleanString } from "./utils/strings";
import type { MergedProps } from "./types/props";
import type {
  CompoundVariant,
  DefaultVariants,
  ResponsiveVariants,
  VariantValue,
  Variants,
} from "./types/variants";
import type { Slots } from "./types/slots";

/* -------------------------------------------------------------------------- */
/* Internal helpers                                                           */
/* -------------------------------------------------------------------------- */

const uniquifyClasses = (classes: string[]): string =>
  [...new Set(classes.filter(Boolean))].join(" ");

/** Type guard: narrows `unknown` to a string-keyed record (no unsafe cast). */
const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

/**
 * Extracts the classes for a single slot from a variant/compound value, which
 * may be a string, an array of strings, or a per-slot map.
 */
const flattenVariant = (variant: unknown, slotKey: string): string[] => {
  if (typeof variant === "string") return [variant];
  if (Array.isArray(variant)) {
    return variant.filter((v): v is string => typeof v === "string");
  }
  if (isRecord(variant)) {
    const slotValue = variant[slotKey];
    if (typeof slotValue === "string") return [slotValue];
    if (Array.isArray(slotValue)) {
      return slotValue.filter((v): v is string => typeof v === "string");
    }
  }
  return [];
};

/** No-op class merger used by the v3 `compose` entry point. */
const identityMerge = (input: string): string => input;

/**
 * Runtime shape every config is normalised to before the shared core runs.
 * Kept intentionally loose: the strong typing is layered on by the public
 * `compose` / `setupCompose` generics, not here. `slots` allows `string | string[]`
 * so the v2 `Slots` type (which permits arrays) satisfies this constraint.
 */
interface ComposeConfigRuntime {
  slots: Record<string, string | string[]>;
  variants?: Record<string, Record<string, unknown>>;
  compoundVariants?: ReadonlyArray<{
    conditions: Record<string, unknown>;
    classes: unknown;
  }>;
  defaultVariants?: Record<string, unknown>;
}

/**
 * Normalises compound variants so the shared core only ever reads `classes`.
 * Accepts both the v2 `class` spelling and the v3 `classes` spelling, and
 * preserves the precise `conditions` / class-value types for the caller.
 */
const normalizeCompoundVariants = <ClassValue, Conditions>(
  compounds?: ReadonlyArray<{
    conditions: Conditions;
    class?: ClassValue;
    classes?: ClassValue;
  }>
): { conditions: Conditions; classes: ClassValue }[] =>
  (compounds ?? []).map((cv) => ({
    conditions: cv.conditions,
    // One of `class` / `classes` is guaranteed present by the public types.
    classes: (cv.classes ?? cv.class) as ClassValue,
  }));

/* -------------------------------------------------------------------------- */
/* Shared core                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Builds the cached slot functions from a normalised config. This is the single
 * runtime implementation shared by both `compose` (v3) and `setupCompose` (v2),
 * so the hot path (cache lookup after the first call) is identical for both.
 *
 * `PropsType` carries the strongly-typed props bag so the returned slot
 * functions are typed precisely without any value casts at the call site.
 */
const createSlotsCore = <
  SlotNames extends string,
  PropsType extends Record<string, unknown>,
  Config extends ComposeConfigRuntime
>(
  config: Config,
  mergeClasses: (input: string) => string
): {
  slots: Record<SlotNames, (props?: PropsType) => string>;
  options: Config;
} => {
  const { slots, variants, compoundVariants, defaultVariants } = config;

  // Flatten variants into a nested Map<variant, value, slot, Set<classes>>.
  const flattenedVariants = new Map<
    string,
    Map<string, Map<string, Set<string>>>
  >();
  if (variants) {
    for (const [variantKey, variantValues] of Object.entries(variants)) {
      const variantMap = new Map<string, Map<string, Set<string>>>();
      for (const [valueKey, classes] of Object.entries(variantValues)) {
        const slotMap = new Map<string, Set<string>>();
        for (const slotKey of Object.keys(slots)) {
          slotMap.set(slotKey, new Set(flattenVariant(classes, slotKey)));
        }
        variantMap.set(valueKey, slotMap);
      }
      flattenedVariants.set(variantKey, variantMap);
    }
  }

  // Flatten compound variants once, keyed by slot.
  const flattenedCompoundVariants = (compoundVariants ?? []).map((cv) => ({
    conditions: cv.conditions,
    classes: new Map<string, Set<string>>(
      Object.keys(slots).map((slotKey) => [
        slotKey,
        new Set(flattenVariant(cv.classes, slotKey)),
      ])
    ),
  }));

  const variantCache = new Map<string, string>();

  const slotsResult = Object.fromEntries(
    Object.entries(slots).map(
      ([slotKey, baseClasses]): [string, (props?: PropsType) => string] => {
        const slotFunction = (props?: PropsType): string => {
          const cleanedProps: Record<string, unknown> = {};
          if (props !== undefined) {
            for (const key of Object.keys(props)) {
              const value = props[key];
              if (value !== undefined && value !== null) {
                cleanedProps[key] = value;
              }
            }
          }

          const cacheKey = JSON.stringify({ slot: slotKey, props: cleanedProps });
          if (variantCache.has(cacheKey)) {
            return variantCache.get(cacheKey) ?? "";
          }

          const classSet = new Set<string>();
          const base = Array.isArray(baseClasses)
            ? baseClasses.join(" ")
            : baseClasses;
          classSet.add(cleanString(base));

          // Defaults first, props override.
          const mergedProps: Record<string, unknown> = {
            ...defaultVariants,
            ...cleanedProps,
          };

          // Collect every breakpoint referenced by responsive props.
          const usedBreakpoints = new Set<string>(["initial"]);
          for (const value of Object.values(mergedProps)) {
            if (isRecord(value)) {
              for (const bp of Object.keys(value)) {
                usedBreakpoints.add(bp);
              }
            }
          }

          // Apply variants (including responsive overrides).
          for (const [key, value] of Object.entries(mergedProps)) {
            if (key === "className" || key === "class") continue;
            const variantMap = flattenedVariants.get(key);
            if (!variantMap) continue;

            if (isRecord(value)) {
              for (const [breakpoint, breakpointValue] of Object.entries(value)) {
                const variantClasses = variantMap
                  .get(breakpointValue as string)
                  ?.get(slotKey);
                if (!variantClasses) continue;
                for (const cls of variantClasses) {
                  if (breakpoint === "initial") {
                    classSet.add(cleanString(cls));
                  } else {
                    for (const c of cleanString(cls).split(" ")) {
                      classSet.add(`${breakpoint}:${c}`);
                    }
                  }
                }
              }
            } else {
              const variantClasses = variantMap
                .get(value as string)
                ?.get(slotKey);
              if (!variantClasses) continue;
              for (const cls of variantClasses) {
                classSet.add(cls);
              }
            }
          }

          // Apply compound variants across every used breakpoint.
          for (const { conditions, classes } of flattenedCompoundVariants) {
            for (const breakpoint of usedBreakpoints) {
              let isMatch = true;
              for (const [key, conditionValue] of Object.entries(conditions)) {
                const propValue = mergedProps[key];
                let valueToCheck: unknown;
                if (isRecord(propValue)) {
                  valueToCheck =
                    breakpoint === "initial"
                      ? propValue["initial"]
                      : (propValue[breakpoint] ?? propValue["initial"]);
                } else {
                  valueToCheck = propValue;
                }
                isMatch =
                  isMatch &&
                  (Array.isArray(conditionValue)
                    ? conditionValue.includes(valueToCheck)
                    : conditionValue === valueToCheck);
                if (!isMatch) break;
              }
              if (!isMatch) continue;

              const slotClasses = classes.get(slotKey);
              if (!slotClasses) continue;
              for (const cls of slotClasses) {
                if (breakpoint === "initial") {
                  classSet.add(cleanString(cls));
                } else {
                  for (const c of cleanString(cls).split(" ")) {
                    classSet.add(`${breakpoint}:${c}`);
                  }
                }
              }
            }
          }

          // Custom className/class overrides.
          const customClassName = cleanedProps["className"];
          if (typeof customClassName === "string") {
            for (const cls of cleanString(customClassName).split(" ")) {
              classSet.add(cls);
            }
          }
          const customClass = cleanedProps["class"];
          if (typeof customClass === "string") {
            for (const cls of cleanString(customClass).split(" ")) {
              classSet.add(cls);
            }
          }

          const result = mergeClasses(uniquifyClasses(Array.from(classSet)));
          variantCache.set(cacheKey, result);
          return result;
        };
        return [slotKey, slotFunction];
      }
    )
  );

  return {
    slots: slotsResult as Record<SlotNames, (props?: PropsType) => string>,
    options: config,
  };
};

/* -------------------------------------------------------------------------- */
/* v3 entry point: `compose`                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Shape declared explicitly (the `ComposeType` the v3 consumer writes).
 *
 * `props` is `unknown` (not `Record<string, any>`): a consumer's concrete
 * interface (e.g. `LabelBaseProps`, which has no string index signature) does
 * not satisfy `Record<string, unknown>`, so the constraint must not require
 * one. Instead the index signature the core relies on is added at the two
 * surfaces `Def["props"]` flows into — `ComposeSlotProps` and the compound
 * `conditions` — via `& Record<string, unknown>`. There, a concrete key wins
 * over the index signature so call-site props stay precise, while undeclared
 * extras (e.g. `disabled` on a `props: {}` component) stay accepted, matching
 * the original v3 behaviour. No `any` and no consumer changes.
 */
interface Alias {
  slots: string[];
  variants: Record<string, readonly string[]>;
  props: unknown;
  screens: string[];
}

type ComposeClassValue<Def extends Alias> =
  | { [K in Def["slots"][number]]?: string }
  | string;

/** Compound variant accepted by `compose` — `class` and `classes` both work. */
type ComposeCompoundVariant<Def extends Alias> = {
  conditions: (
    | Def["props"]
    | {
        [K in keyof Def["variants"]]?: Def["variants"][K][number] | Def["variants"][K][number][];
      }
  ) &
    Record<string, unknown>;
} & (
  | { class: ComposeClassValue<Def>; classes?: undefined }
  | { classes: ComposeClassValue<Def>; class?: undefined }
);

/** Options accepted by `compose`. */
type ComposeOptions<Def extends Alias> = {
  slots: { [K in Def["slots"][number]]: string };
  variants?: {
    [K in keyof Def["variants"]]: {
      [key in Def["variants"][K][number]]: { [S in Def["slots"][number]]?: string } | string;
    };
  };
  compoundVariants?: ComposeCompoundVariant<Def>[];
  defaultVariants: { [K in keyof Def["variants"]]?: Def["variants"][K][number] };
  responsiveVariants?: (keyof Def["variants"])[];
};

/**
 * The props bag a v3 slot function accepts. An intersection (not a union) so
 * variants, component props and `className`/`class` can all be passed together.
 * `Def["props"]` is `unknown` in `Alias`; the explicit `& Record<string,
 * unknown>` here provides the string index signature the shared core relies on
 * (and which lets `props: {}` accept arbitrary extras such as `disabled`)
 * regardless of whether the consumer's `props` is a concrete interface or a
 * record type. Specific declared keys win over the index signature, so
 * call-site props stay precise. This only affects the v3 slot function params
 * — v3 `VariantProps` is derived independently from `ComposeType["variants"]`,
 * and the v2 `MergedProps` carries no such signature so `VariantsProps<typeof
 * x>` stays precise.
 */
type ComposeSlotProps<Def extends Alias> = Def["props"] & {
  [K in keyof Def["variants"]]?:
    | Def["variants"][K][number]
    | { initial: Def["variants"][K][number] }
    | { [S in Def["screens"][number]]?: Def["variants"][K][number] };
} & {
  className?: string;
  class?: string;
} & Record<string, unknown>;

/**
 * `ComposeOptions` after `class` -> `classes` normalisation. The
 * `compoundVariants` always carry `classes`, which is what the shared core (and
 * `generateSafeList`) read. This precise shape lets the core's `Config`
 * constraint hold without any cast, while `options` is still assignable to the
 * public `ComposeOptions`.
 */
type ComposeOptionsNormalized<Def extends Alias> = Omit<
  ComposeOptions<Def>,
  "compoundVariants"
> & {
  compoundVariants: {
    conditions: ComposeCompoundVariant<Def>["conditions"];
    classes: ComposeClassValue<Def>;
  }[];
};

export type ComposeResult<Def extends Alias> = {
  slots: Record<Def["slots"][number], (props?: ComposeSlotProps<Def>) => string>;
  options: ComposeOptions<Def>;
};

/**
 * v3 public entry point. Slots are exposed under `.slots` and the (normalised)
 * input is returned as `.options` for `generateSafeList`.
 */
export const compose = <Def extends Alias>(
  options: ComposeOptions<Def>
): ComposeResult<Def> => {
  const normalized: ComposeOptionsNormalized<Def> = {
    ...options,
    compoundVariants: normalizeCompoundVariants(options.compoundVariants),
  };
  const core = createSlotsCore<
    Def["slots"][number],
    ComposeSlotProps<Def>,
    ComposeOptionsNormalized<Def>
  >(normalized, identityMerge);
  return { slots: core.slots, options: core.options };
};

/* -------------------------------------------------------------------------- */
/* v2 entry point: `setupCompose`                                             */
/* -------------------------------------------------------------------------- */

type ComposeConfigInput<
  S extends Slots,
  V extends Variants<S>,
  CV extends CompoundVariant<V, S>,
  R extends ResponsiveVariants<V>,
  DV extends DefaultVariants<V, S>
> = {
  slots: S;
  variants?: V;
  compoundVariants?: CV[];
  responsiveVariants?: R;
  // Required so `.definition().defaultVariants.<key>` stays non-optional, matching v2.
  defaultVariants: DV;
};

/** Compound variant after `class` -> `classes` normalisation (v2 output shape). */
type NormalizedCompound<S extends Slots> = {
  conditions: Record<string, unknown>;
  classes: VariantValue<S>;
};

type ComposeConfigNormalized<
  S extends Slots,
  V extends Variants<S>,
  R extends ResponsiveVariants<V>,
  DV extends DefaultVariants<V, S>
> = {
  slots: S;
  variants?: V;
  compoundVariants: NormalizedCompound<S>[];
  responsiveVariants?: R;
  defaultVariants: DV;
};

type DefinitionResult<
  S extends Slots,
  V extends Variants<S>,
  R extends ResponsiveVariants<V>,
  DV extends DefaultVariants<V, S>,
  Sc extends string
> = {
  slots: S;
  variants?: V;
  compoundVariants: NormalizedCompound<S>[];
  responsiveVariants?: R;
  defaultVariants: DV;
  screens: readonly Sc[];
};

/**
 * The full return of a v2 `setupCompose(...)(config)<Props>()` call.
 *
 * Slot functions live at the top level (so `const { root } = variants` works),
 * `definition()` exposes the config for introspection / storybook iteration,
 * and `options` carries the normalised config consumed by `generateSafeList`.
 */
export type ComposeResultV2<
  S extends Slots,
  V extends Variants<S>,
  R extends ResponsiveVariants<V>,
  DV extends DefaultVariants<V, S>,
  Sc extends string,
  Props
> = {
  [Slot in keyof S & string]: (props?: MergedProps<Props, Sc, V, R>) => string;
} & {
  definition: () => DefinitionResult<S, V, R, DV, Sc>;
  options: ComposeConfigNormalized<S, V, R, DV>;
};

/**
 * Factory matching the v2 signature: binds `screens` and a `mergeClasses`
 * (e.g. tailwind-merge) function, then returns the curried composer.
 *
 * The curry mirrors v2 exactly: `setupCompose(screens, mergeClasses)` ->
 * `(config) => <Props>() => result`, so existing v2 call sites compile
 * unchanged. `defaultVariants` is required (v2 behaviour); `responsiveVariants`
 * defaults to treating every variant as scalar, and a component may omit
 * `variants` / `compoundVariants` entirely (issue #31).
 */
export const setupCompose = <Sc extends string>(
  screens: readonly Sc[],
  mergeClasses: (input: string) => string = identityMerge
) => {
  return <
    V extends Variants<S>,
    CV extends CompoundVariant<V, S>,
    DV extends DefaultVariants<V, S>,
    S extends Slots,
    R extends ResponsiveVariants<V> = ResponsiveVariants<V>
  >(
    config: ComposeConfigInput<S, V, CV, R, DV>
  ) => {
    const normalized = {
      ...config,
      compoundVariants: normalizeCompoundVariants(config.compoundVariants),
    };

    return <Props = unknown>(): ComposeResultV2<S, V, R, DV, Sc, Props> => {
      const core = createSlotsCore<
        keyof S & string,
        MergedProps<Props, Sc, V, R>,
        ComposeConfigNormalized<S, V, R, DV>
      >(normalized, mergeClasses);

      const definition = (): DefinitionResult<S, V, R, DV, Sc> => ({
        ...normalized,
        screens,
      });

      return {
        ...core.slots,
        definition,
        options: core.options,
      };
    };
  };
};

/* -------------------------------------------------------------------------- */
/* Inferred variant props (v2)                                               */
/* -------------------------------------------------------------------------- */

/**
 * Infers the props bag of a composed component from its slot functions.
 *
 * Works against the v2 `setupCompose` result (which carries slot functions plus
 * a `definition` / `options` member): `Extract` keeps only the function members,
 * so `VariantsProps<typeof buttonVariants>` yields the merged props without
 * requiring the consumer to re-declare the variant keys (resolves issue #31).
 */
export type VariantsProps<C extends Record<string, unknown>> = Parameters<
  Extract<C[keyof C], (...args: any[]) => unknown>
>[0];
