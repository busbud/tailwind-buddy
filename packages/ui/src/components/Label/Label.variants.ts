import { tca } from "tailwind-classes-authority"
import { VariantConfiguration } from "./Label.types"

export const labelVariantsConfigurations: VariantConfiguration = {
    "slots": {
        "root": "text-blue-500"
    },
    "variants": {
        "size": {
            "default": "xxl",
            "values": {
                "small": "text-blue-500",
                "large": "text-red-500"
            }
        },
        "fontWeight": {
            "default": "",
            "values": {
                xxl: {
                    "root": "text-blue-500"
                }
            }
        }
    }, 
    "compoundVariants": [
        {
            "conditions": {
                "fontWeight": "bold"
            },
            "class": "text-blue-500"
        }
    ]
}


export const labelVariants = tca(labelVariantsConfigurations)