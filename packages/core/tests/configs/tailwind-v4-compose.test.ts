import { describe, expect, test } from "vitest";
import { tailwindV4Component } from "../setup/tailwind-v4";

/**
 * Characterization tests locking the class strings tailwind-buddy emits for
 * Tailwind v4-relevant shapes. tailwind-buddy is a pure string composer (it
 * imports zero tailwindcss at runtime), so these outputs must be identical
 * under both v3 and v4. They are the guardrail for the `^3 || ^4` peer bump.
 */
describe("tailwind v4 compose output", () => {
  const { slots: { root } } = tailwindV4Component;

  test("passes v4 utilities through byte-for-byte (no rewrite/validation)", () => {
    // ring-3, shadow-sm, rounded-sm, bg-(--brand), !font-bold, arbitrary prop
    // are all emitted verbatim — tailwind-buddy does not check them against a
    // fixed v3 utility list, so v4-renamed/new utilities just pass through.
    expect(root({})).toBe(
      "shadow-sm rounded-sm hover:bg-blue-500 focus:ring-3 bg-(--brand) !font-bold [mask-type:luminance]"
    );
  });

  test("prepends breakpoint outermost on stacked variants (v4 order)", () => {
    // The responsive variant wraps a class that already has a state variant.
    // tailwind-buddy prepends the breakpoint to the LEFT of the whole class,
    // yielding `md:hover:...` (breakpoint-outermost). This is the form both
    // v3 and v4 expect; v4's left-to-right stacked-variant reading does not
    // change this emitted string.
    expect(
      root({ intent: { initial: "stateful", md: "stateful" } })
    ).toBe(
      "shadow-sm rounded-sm hover:bg-blue-500 focus:ring-3 md:hover:bg-blue-500 md:focus:ring-3 bg-(--brand) !font-bold [mask-type:luminance]"
    );
  });

  test("prepends breakpoint to v4 css-var / important / arbitrary-property classes", () => {
    expect(
      root({ tone: { initial: "brand", sm: "brand" } })
    ).toBe(
      "shadow-sm rounded-sm hover:bg-blue-500 focus:ring-3 bg-(--brand) !font-bold [mask-type:luminance] sm:bg-(--brand) sm:!font-bold sm:[mask-type:luminance]"
    );
  });
});
