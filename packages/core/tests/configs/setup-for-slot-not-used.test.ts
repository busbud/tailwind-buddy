import { describe, expect, test } from "vitest";
import { buttonVariants } from "../setup/setup-for-slot-not-used";

describe("test when slot is not defined but others are in variant", () => {
  const { icon, root, label } = buttonVariants;

  test("should not have error and do not have extra string", () => {
    const expected = "bg-red-500 bg-purple-300";
    expect(
      icon({
        appearance: "primary",
        size: {
          initial: "xs",
          lg: "md",
        },
      })
    ).toBe(expected);
  });

  test("default root", () => {
    const expected = "bg-red-100 bg-purple-100 bg-orange-100";
    expect(root()).toBe(expected);
  });

  test("default label", () => {
    const expected = "bg-red-300 bg-purple-100 bg-orange-300";
    expect(label()).toBe(expected);
  });
});
