import { describe, expect, it } from "vitest";
import { compose as composeV3, setupCompose } from "../../src/tailwind-buddy";
import { generateSafeList } from "../../src/utils/tailwind-utils";

const compose = setupCompose(["sm", "md"] as const, (s) => s);

/**
 * `generateSafeList` reads `.options` and internally normalises `classes`→`class`
 * via `cleanCompoundClasses`. Because `setupCompose` already normalises
 * `class`→`classes` on `.options`, a v2 `class:` compound is safelisted correctly
 * — guarding against the unpatched-v3 regression where `class:` compounds were
 * silently dropped.
 *
 * Each test builds a fresh instance because `generateSafeList` mutates the
 * `options.compoundVariants` of its argument (pre-existing v3 behaviour).
 */
const makeBadge = () =>
  compose({
    slots: { root: "inline-flex" },
    variants: {
      size: {
        sm: { root: "p-1" },
        md: { root: "p-2" },
      },
    },
    compoundVariants: [
      {
        conditions: { size: "md" },
        // v2 `class:` spelling — must end up in the safelist.
        class: { root: "ring-2" },
      },
    ],
    defaultVariants: { size: "sm" },
    responsiveVariants: ["size"],
  })();

describe("v2 compat: generateSafeList", () => {
  it("safelists responsive variant classes", () => {
    const safelist = generateSafeList([makeBadge()], ["sm", "md"]);
    expect(safelist).toContain("sm:p-1");
    expect(safelist).toContain("md:p-2");
  });

  it("safelists `class:` compound classes (regression guard)", () => {
    const safelist = generateSafeList([makeBadge()], ["sm", "md"]);
    // The compound matches responsive variant `size`, so its classes are
    // expanded across screens too.
    expect(safelist).toContain("sm:ring-2");
    expect(safelist).toContain("md:ring-2");
  });

  it("works with the v3 `compose` result shape too (mixed consumers)", () => {
    const card = composeV3<{
      slots: ["root"];
      variants: { size: ["sm", "md"] };
      props: {};
      screens: ["sm", "md"];
    }>({
      slots: { root: "block" },
      variants: { size: { sm: "p-1", md: "p-2" } },
      defaultVariants: { size: "sm" },
      responsiveVariants: ["size"],
    });
    const safelist = generateSafeList([card], ["sm", "md"]);
    expect(safelist).toContain("sm:p-1");
    expect(safelist).toContain("md:p-2");
  });
});
