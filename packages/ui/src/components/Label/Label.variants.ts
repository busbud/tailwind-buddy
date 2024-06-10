import { tca } from "tailwind-classes-authority"
import { VariantConfiguration } from "./Label.types"

export const labelVariantsConfigurations: VariantConfiguration = {
    "slots": {
        "root": /** @tw */ "text-blue-500"
    },
    "variants": {
        "size": {
            "default": "small",
            "values": {
                "small": /** @tw */ "text-sm",
                "large": /** @tw */ "text-7xl"
            }
        },
        "fontWeight": {
            "default": "xxl",
            "values": {
                xxl: {
                    "root": /** @tw */ "font-extrabold"
                }
            }
        }
    }
}


export const labelVariants = tca(labelVariantsConfigurations)