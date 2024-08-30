import { describe, expect, test } from "vitest";
import { processStrings } from "./strings";

const variant_complex = {
  slots: {
    root: `
        1
        
        ${/* Some comment here */ ""}
        2 ${/* And some comment here */ ""}
        3

      `,
  },
  variants: {
    size: {
      xs: {
        root: `
        4
        
        ${/* Some comment here */ ""}
        5
        6 ${/* And some comment here */ ""}
        8
      `,
      },
      md: `
        9
        
        ${/* Some comment here */ ""}
        10
        11 ${/* And some comment here */ ""}
        12
      `,
    },
    test: {
      awesome: `
        13
        
        ${/* Some comment here */ ""}
        14
        15 ${/* And some comment here */ ""}
        16
      `,
    },
  },
  defaultVariants: {
    size: "md",
    test: "awesome",
  },
  compoundVariants: [
    {
      conditions: {
        size: "xs",
      },
      class: `
        17
        
        ${/* Some comment here */ ""}
        18
        19 ${/* And some comment here */ ""}
        20
      `,
    },
    {
      conditions: {
        size: "md",
      },
      class: {
        root: `
        21
        
        ${/* Some comment here */ ""}
        22
        23 ${/* And some comment here */ ""}
        24
      `,
      },
    },
  ],
};

const expected_complex = {
  slots: {
    root: "1 2 3",
  },
  variants: {
    size: {
      xs: {
        root: "4 5 6 8",
      },
      md: "9 10 11 12",
    },
    test: {
      awesome: "13 14 15 16",
    },
  },
  defaultVariants: {
    size: "md",
    test: "awesome",
  },
  compoundVariants: [
    {
      conditions: {
        size: "xs",
      },
      class: "17 18 19 20",
    },
    {
      conditions: {
        size: "md",
      },
      class: {
        root: "21 22 23 24",
      },
    },
  ],
};

describe("strings", () => {
  test("should clean a string", () => {
    // @ts-expect-error
    const finalObg = processStrings(variant_complex);
    expect(finalObg).toStrictEqual(expected_complex);
  });
});
