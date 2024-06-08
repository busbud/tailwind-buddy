import { tca } from "tailwind-classes-authority"
import { VariantConfiguration } from "./Label.types"

export const labelVariantsConfigurations: VariantConfiguration = {
    "slots": {
        "root": "text-blue-500"
    },
    "variants": {
        "size": {
            "default": "",
            "values": {
                xxl: "text-blue-500",
            }
        },
        "fontWeight": {
            "default": "",
            "values": {
                xxl: "text-red-500"
            }
        }
    }, 
    "compoundVariants": [
        {
            "conditions": {
                "fontWeight": "bold"
            },
            "class": ""
        }
    ]
}


export const labelVariants = tca(labelVariantsConfigurations)