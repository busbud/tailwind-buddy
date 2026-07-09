import { describe, expect, test } from "vitest";
import { falsyCompoundComponent } from "../setup/falsy-compound";

describe("compound variants gated on falsy conditions", () => {
  const {
    slots: { root },
  } = falsyCompoundComponent;

  test("applies a compound gated on `false` when the prop is explicitly false", () => {
    expect(root({ disabled: false })).toBe("base enabled");
  });

  test("applies the `true` compound when the prop is true", () => {
    expect(root({ disabled: true })).toBe("base disabled");
  });
});
