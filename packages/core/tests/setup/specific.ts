
import { ElementType } from "react";
import { compose } from "../../src/tailwind-buddy";

export interface LabelProps {
  as?: ElementType;
  className?: string;
  disabled?: boolean;
}

export const labelVariants = compose(
    {
      slots: {
        root: /** @tw */ "inline-flex",
        icon: /** @tw */ "shrink-0",
        container: /** @tw */ "truncate",
      },
      variants: {
        backgroundColor: {
            blue: /** @tw */ "bg-color-scheme-literal-blue-500",
            green: /** @tw */ "bg-color-scheme-literal-green-500",
        },
        fontWeight: {
          regular: /** @tw */ "",
          bold: {
            root: /** @tw */ "font-weight-bold",
          },
          extraBold: {
            root: /** @tw */ "font-weight-extra-bold",
          },
        },
        size: {
          xxl: {
            root: /** @tw */ "text-size-150",
          },
          xl: {
            root: /** @tw */ "text-size-112",
          },
          lg: {
            root: /** @tw */ "text-size-100",
          },
          md: {
            root: /** @tw */ "text-size-87",
          },
          sm: {
            root: /** @tw */ "text-size-75",
          },
          xs: {
            root: /** @tw */ "text-size-62",
          },
          xxs: {
            root: /** @tw */ "text-size-56",
          },
        },
      },
      defaultVariants: {
        "fontWeight": "regular",
        "size": "md",
        "backgroundColor": "blue",
      },
      responsiveVariants: ["fontWeight", "size", "backgroundColor"],
      compoundVariants: [
        {
            conditions: {
                disabled: true
            },
            "class": "opacity-50"
        },
        {
            conditions: {
                fontWeight: ["bold", "extraBold"],
            },
            "class": "opacity-100"
        },
        {
            conditions: {
                fontWeight: ["bold", "extraBold"],
                size: "xl"
            },
            "class": "opacity-200"
        }
      ],
    },
  )<LabelProps>();

  