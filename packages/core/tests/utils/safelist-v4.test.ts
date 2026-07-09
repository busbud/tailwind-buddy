import { describe, expect, test } from "vitest";
import { generateSafeList } from "../../src/utils/tailwind-utils";
import { tailwindV4Component } from "../setup/tailwind-v4";

/**
 * generateSafeList produces the class list consumers feed to Tailwind's
 * safelist (the v3 `safelist` config array, or a v4 `@source inline(...)`
 * rule). It must stay byte-correct across the v3 -> v4 bump, including for v4
 * class shapes (CSS-var arbitrary syntax, renamed utilities, important
 * modifier, arbitrary properties). This test locks that output.
 */
describe("generateSafeList v4 class shapes", () => {
  test("emits breakpoint-prefixed v4 classes byte-for-byte", () => {
    const expected = [
      // intent: hover:bg-blue-500, focus:ring-3
      "sm:hover:bg-blue-500",
      "md:hover:bg-blue-500",
      "sm:focus:ring-3",
      "md:focus:ring-3",
      // tone: bg-(--brand), !font-bold, [mask-type:luminance]
      "sm:bg-(--brand)",
      "md:bg-(--brand)",
      "sm:!font-bold",
      "md:!font-bold",
      "sm:[mask-type:luminance]",
      "md:[mask-type:luminance]",
    ];

    expect(generateSafeList([tailwindV4Component], ["sm", "md"])).toStrictEqual(
      expected
    );
  });
});
