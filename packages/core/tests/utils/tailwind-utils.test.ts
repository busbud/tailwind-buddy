import { describe, expect, test } from "vitest";
import { generateSafeList } from "../../src/utils/tailwind-utils";
import { simpleResponsiveComponent } from "../setup/simple-responsive";
import { simpleCompoundComponent } from "../setup/simple-compound";
describe("safelist", () => {
  test("without compounds", () => {
    const str = [
      "sm:text-xl",
      "md:text-xl",
      "sm:text-4xl",
      "md:text-4xl",
      "sm:text-5xl",
      "md:text-5xl",
      "sm:leading-tight",
      "md:leading-tight",
      "sm:bg-orange-500",
      "md:bg-orange-500",
    ];

    const generate_str = generateSafeList([simpleResponsiveComponent]);
    expect(generate_str).toStrictEqual(str);
  });

  test("with compounds", () => {
    const str = [
      "sm:text-red-200",
      "md:text-red-200",
      "sm:text-blue-200",
      "md:text-blue-200",
      "sm:text-green-100",
      "md:text-green-100",
      "sm:text-green-200",
      "md:text-green-200",
    ];
    const generate_str = generateSafeList([simpleCompoundComponent]);
    expect(generate_str).toStrictEqual(str);
  });
});
