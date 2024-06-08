import { tca } from "tailwind-classes-authority"
import { VariantConfiguration } from "./Label.types"

export const labelVariantsConfigurations: VariantConfiguration = {
    "slots": {
        "label": "text-red-500",
        "root": "text-blue-500"
    },
    "variants": {
        "size": {
            "default": "",
            "values": {
                xxl: {
                    "label": ["", ""]
                }
            }
        },
        "fontWeight": {
            "default": "",
            "values": {
                xxl: {
                    "label": ["", ""]
                }
            }
        }
    }, 
    "compoundVariants": [
        {
            "conditions": {
                "fontWeight": "bold"
            },
            "class": {
                "label": "",
                "root": ""
            }
        }
    ]
}

export const labelVariants = tca(labelVariantsConfigurations)
