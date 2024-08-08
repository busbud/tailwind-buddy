import { describe, expect, test } from "vitest";
import { fooVariants } from "../setup/complex-string-for-doc";

describe.only("test simple config", () => {
  const { root } = fooVariants;

  test("should be a oneline string", () => {
    const expected =
      "hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3";
    expect(root()).toBe(expected);
  });
});
