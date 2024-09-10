import { describe, expect, test } from "vitest";
import { responsiveAndCompoundComponent } from "../setup/responsive-and-compound";

describe("test resposive simple config", () => {
  const { root } = responsiveAndCompoundComponent;

  describe("responsive values", () => {
    test.only("with compound and responsive", () => {
      const root_full_str =
        "text-red-100 text-xl md:text-5xl md:leading-tight md:bg-red-500 md:text-blue-500";
      expect(
        root({
          size: {
            initial: "small",
            md: "extralarge",
          },
        })
      ).toBe(root_full_str);
    });

    test("with other props", () => {
      const root_full_str =
        "text-red-100 text-xl md:text-4xl bg-gray-500 border-red-500";

      expect(
        root({
          size: {
            initial: "small",
            md: "large",
          },
          disabled: true,
        })
      ).toBe(root_full_str);
    });

    test("with other props", () => {
      const root_full_str =
        "text-red-100 text-xl md:text-4xl bg-gray-500 border-red-500 border-black";

      expect(
        root({
          size: {
            initial: "small",
            md: "large",
          },
          disabled: true,
          className: /** @tw */ "border-black",
        })
      ).toBe(root_full_str);
    });
  });
});
