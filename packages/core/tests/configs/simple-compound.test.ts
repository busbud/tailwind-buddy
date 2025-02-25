import { describe, expect, test } from "vitest";
import { simpleCompoundComponent } from "../setup/simple-compound";

describe("test simple compounds wit no responsive", () => {
  const { slots: { root, children } } = simpleCompoundComponent;

  describe("with compound variants and default", () => {
    test("root", () => {
      const full_str = "text-red-100 text-red-200 text-red-300 text-purple-200";
      expect(root({ disabled: true })).toBe(full_str);
    });

    test("children", () => {
      const full_str = "text-blue-100 text-red-200 text-purple-200";
      expect(children({ disabled: true })).toBe(full_str);
    });

    test("root with secondary color", () => {
      const full_str =
        "text-red-100 text-green-100 text-red-300 text-purple-200";
      expect(
        root({
          color: "secondary",
          disabled: true,
        })
      ).toBe(full_str);
    });

    test("children with secondary color", () => {
      const full_str =
        "text-blue-100 text-green-100 text-purple-200";
      expect(
        children({
          color: "secondary",
          disabled: true,
        })
      ).toBe(full_str);
    });
  });
});
