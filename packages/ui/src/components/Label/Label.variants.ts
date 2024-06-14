import { tca } from "tailwind-classes-authority"
import { LabelBaseProps } from "./Label.types"
import type { VariantsProps } from "tailwind-classes-authority"

export const labelVariants = tca({
    "slots": {
        "root": /** @tw */ "text-blue-500"
    },
    "variants": {
        "size": {
            "small": /** @tw */ "text-xs",
            "large": /** @tw */ "text-7xl"
        },
        "fontWeight": {
            xxl: {
                "root": /** @tw */ "font-extrabold"
            }
        }
    },
    "defaultVariants": {
        "size": "small",
        "fontWeight": "xxl"
    },
    compoundVariants: [
        {
            "conditions": {
                "disabled": true,
            },
            class: /** @tw */ "bg-red-500",
        }
    ],
    "responsiveVariants": ["fontWeight"]
})<LabelBaseProps>()

export type LabelProps = VariantsProps<typeof labelVariants>