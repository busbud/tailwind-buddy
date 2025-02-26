import { describe, expect, test } from "vitest";
import { simpleResponsiveComponent } from "../setup/simple-responsive";

describe("test resposive simple config", () => {
  const { slots } = simpleResponsiveComponent;
  describe("responsive values", () => {
    test("root", () => {
      const root_full_str =
        "text-red-100 text-xl md:text-5xl md:leading-tight md:bg-orange-500 text-blue-200";
      expect(
        slots.root({
          size: {
            initial: "small",
            md: "extralarge",
          },
          color: "secondary",
        })
      ).toBe(root_full_str);
    });
  });
});
