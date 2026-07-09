import { describe, expect, it, vi } from "vitest";
import { setupCompose } from "../../src/tailwind-buddy";
import {
  buttonVariants,
  mergeClasses as consumerMerge,
  screens,
} from "../setup/v2-compat";

describe("v2 compat: setupCompose", () => {
  it("exposes slot functions at the top level (v2 destructuring)", () => {
    // `const { root } = buttonVariants` — v2 access pattern.
    expect(typeof buttonVariants.root).toBe("function");
    expect(typeof buttonVariants.label).toBe("function");
    expect(typeof buttonVariants.icon).toBe("function");
  });

  it("exposes definition() with defaultVariants for introspection", () => {
    const def = buttonVariants.definition();
    expect(def.defaultVariants.appearance).toBe("default");
    expect(def.defaultVariants.size).toBe("md");
    expect(def.defaultVariants.variant).toBe("contained");
    expect(def.screens).toEqual(screens);
  });

  it("applies default variants", () => {
    const root = buttonVariants.root();
    // base + size:md (p-3) + variant:contained + appearance:default
    expect(root).toContain("inline-flex");
    expect(root).toContain("p-3"); // size md
  });

  it("applies `class:` (singular) compound variants — the v3 silent-break fix", () => {
    // On unpatched v3, `class:` compounds are silently ignored (cv.classes is
    // undefined). This guards against that regression.
    const root = buttonVariants.root({
      appearance: "primary",
      variant: "contained",
      isDisabled: false,
      isDisabledFocusable: false,
    });
    expect(root).toContain("hover:bg-blue-600");

    const icon = buttonVariants.icon({
      appearance: "primary",
      variant: "contained",
      isDisabled: false,
      isDisabledFocusable: false,
    });
    expect(icon).toContain("group-hover:text-blue-200");
  });

  it("also accepts `classes:` (plural) compound variants", () => {
    const root = buttonVariants.root({
      appearance: "destructive",
      variant: "contained",
      isDisabled: false,
      isDisabledFocusable: false,
    });
    expect(root).toContain("hover:bg-red-600");
  });

  it("applies disabled compound via class:", () => {
    const root = buttonVariants.root({
      variant: "contained",
      isDisabled: true,
    });
    expect(root).toContain("bg-gray-300");
    expect(root).toContain("text-gray-400");
  });

  it("supports responsive variants", () => {
    const root = buttonVariants.root({
      size: { initial: "sm", lg: "lg" },
    });
    // initial -> p-2 (sm), lg breakpoint -> lg:p-4 (lg)
    expect(root).toContain("p-2");
    expect(root).toContain("lg:p-4");
  });

  it("merges custom className", () => {
    const root = buttonVariants.root({ className: "custom-class" });
    expect(root).toContain("custom-class");
  });

  it("options is present for generateSafeList", () => {
    expect(buttonVariants.options).toBeDefined();
    expect(buttonVariants.options.slots).toBeDefined();
  });

  it("mergeClasses resolves conflicting utilities (tailwind-merge behaviour)", () => {
    // base `p-1` overridden by size:lg `p-4` — mergeClasses keeps the last.
    const compose2 = setupCompose(["md", "lg"] as const, consumerMerge);
    const variants = compose2({
      slots: { root: "p-1" },
      variants: { size: { sm: { root: "p-2" }, lg: { root: "p-4" } } },
      defaultVariants: { size: "sm" },
    })();
    const root = variants.root({ size: "lg" });
    expect(root).toContain("p-4");
    expect(root).not.toContain("p-1");
    expect(root).not.toContain("p-2");
  });

  it("invokes mergeClasses on a cache miss and serves cache hits (perf parity)", () => {
    const spy = vi.fn((s: string) => consumerMerge(s));
    const compose2 = setupCompose(["md"] as const, spy);
    const variants = compose2({
      slots: { root: "p-1" },
      variants: { size: { sm: { root: "p-2" }, lg: { root: "p-4" } } },
      defaultVariants: { size: "sm" },
    })();

    // cache miss: mergeClasses runs exactly once and resolves the conflict.
    const first = variants.root({ size: "lg" });
    expect(spy).toHaveBeenCalledTimes(1);
    expect(first).toContain("p-4");

    // cache hit: mergeClasses must NOT run again.
    const second = variants.root({ size: "lg" });
    expect(spy).toHaveBeenCalledTimes(1);
    expect(second).toBe(first);
  });

  it("treats undefined props as absent (no 'undefined' class leak)", () => {
    const root = buttonVariants.root({
      appearance: undefined,
    });
    expect(root).not.toContain("undefined");
    // The runtime also drops null values defensively (see `isRecord`/cleanedProps
    // guard), even though the typed bag does not permit null for `isDisabled`.
    const loose = buttonVariants.root({
      isDisabled: null,
    } as Record<string, unknown>);
    expect(loose).not.toContain("null");
  });

  it("does not treat object-valued non-variant props as breakpoints", () => {
    // Regression: an object-valued prop that is NOT a declared variant (e.g. a
    // `style`/`sx` object) had its keys leaked into `usedBreakpoints`, so a
    // matching compound emitted garbage `<key>:`-prefixed classes.
    const compose2 = setupCompose(["sm", "lg"] as const);
    const variants = compose2({
      slots: { root: "block" },
      variants: { intent: { primary: { root: "text-blue-500" } } },
      compoundVariants: [
        { conditions: { intent: "primary" }, class: { root: "font-bold" } },
      ],
      defaultVariants: { intent: "primary" },
    })<{ style?: Record<string, unknown> }>();

    const root = variants.root({ style: { color: "red" } });
    // compound applies unprefixed…
    expect(root).toContain("font-bold");
    // …but the non-variant object's key must NOT become a breakpoint prefix.
    expect(root).not.toContain("color:font-bold");
    expect(root).not.toContain("color:");
  });
});
