import { describe, expect, test } from "vitest";
import { labelVariants } from "../setup/specific";

describe("test simple config", () => {
  const { root, definition } = labelVariants;

  describe("specific tests", () => {
    test("simple conditions", () => {
      const root_full_str = [
        "inline-flex",
        "text-size-56",
        "bg-color-scheme-literal-blue-500",
        "opacity-50",
        "bg-color-scheme-literal-red-500",
      ].join(" ");
      expect(
        root({
          size: "xxs",
          fontWeight: "regular",
          className: "bg-color-scheme-literal-red-500",
          disabled: true,
        })
      ).toBe(root_full_str);
    });

    test("simple conditions but testing boolean", () => {
      const root_full_str = [
        "inline-flex",
        "text-size-56",
        "bg-color-scheme-literal-blue-500",
        "bg-color-scheme-literal-red-500",
      ].join(" ");
      expect(
        root({
          size: "xxs",
          fontWeight: "regular",
          className: "bg-color-scheme-literal-red-500",
          disabled: false,
        })
      ).toBe(root_full_str);
    });

    test("making sure array condition works", () => {
      const root_full_str = [
        "inline-flex",
        "font-weight-bold",
        "text-size-56",
        "bg-color-scheme-literal-blue-500",
        "opacity-100",
        "bg-color-scheme-literal-red-500",
      ].join(" ");
      expect(
        root({
          size: "xxs",
          fontWeight: "bold",
          className: "bg-color-scheme-literal-red-500",
          disabled: false,
        })
      ).toBe(root_full_str);
    });

    test.skip("start working with responsive props but no array condition", () => {
      const root_full_str = [
        "inline-flex",
        "font-weight-bold",
        "text-size-62",
        "md:text-size-150",
        "bg-color-scheme-literal-green-500",
        "opacity-100",
        "md:opacity-100",
        "bg-color-scheme-literal-red-500",
      ].join(" ");
      expect(
        root({
          backgroundColor: "green",
          size: {
            initial: "xs",
            md: "xxl",
          },
          fontWeight: "bold",
          className: "bg-color-scheme-literal-red-500",
        })
      ).toBe(root_full_str);
    });

    test.skip("start working with responsive props and array condition", () => {
      const root_full_str = [
        "inline-flex",
        "font-weight-bold",
        "md:font-weight-extra-bold",
        "text-size-150",
        "bg-color-scheme-literal-green-500",
        "opacity-100",
        "md:opacity-100",
        "bg-color-scheme-literal-red-500",
      ].join(" ");
      expect(
        root({
          backgroundColor: "green",
          size: "xxl",
          fontWeight: {
            initial: "bold",
            md: "extraBold",
          },
          className: "bg-color-scheme-literal-red-500",
        })
      ).toBe(root_full_str);
    });

    test.skip("start working with two responsive props and array condition", () => {
      const root_full_str = [
        "inline-flex",
        "font-weight-bold",
        "md:font-weight-extra-bold",
        "text-size-75",
        "md:text-size-112",
        "bg-color-scheme-literal-green-500",
        "opacity-100",
        "md:opacity-100",
        "md:opacity-200",
        "bg-color-scheme-literal-red-500",
      ].join(" ");
      expect(
        root({
          backgroundColor: "green",
          size: {
            initial: "sm",
            md: "xl",
          },
          fontWeight: {
            initial: "bold",
            md: "extraBold",
          },
          className: "bg-color-scheme-literal-red-500",
        })
      ).toBe(root_full_str);
    });

    test.skip("start working with two responsive props and array condition", () => {
      const root_full_str = [
        "inline-flex",
        "font-weight-bold",
        "md:font-weight-extra-bold",
        "text-size-112",
        "md:text-size-75",
        "bg-color-scheme-literal-green-500",
        "opacity-50",
        "md:opacity-50",
        "opacity-100",
        "md:opacity-100",
        "opacity-200",
        "bg-color-scheme-literal-red-500",
      ].join(" ");
      expect(
        root({
          backgroundColor: "green",
          size: {
            initial: "xl",
            md: "sm",
          },
          fontWeight: {
            initial: "bold",
            md: "extraBold",
          },
          className: "bg-color-scheme-literal-red-500",
          disabled: true,
        })
      ).toBe(root_full_str);
    });
  });
});
