import { tca } from "../../src/tca";
// import { TCA_VARIANT_DEFINITION, tca } from "../../src/tca";

type Slots = "root" | "children"
// type Variants = {
//   color: "primary" | "secondary"
// }

// type VariantConfiguration = TCA_VARIANT_DEFINITION<Slots, Variants>

// export const simpleConfiguration: VariantConfiguration = {
export const simpleConfiguration = tca({
    base: "text-red-100 text-red-200",
    "variants": {
      "color": {
        "primary": "bg-red-500",
        "secondary": "bg-green-500"
      }
    },
    defaultVariants: {
      color: "primary"
    }
})

export const simpleConfigurationWithSlots = tca({
  slots: {
    "root": "text-red-100 text-red-200",
    label: "text-blue-100 text-blue-200",
  },
  "variants": {
    "color": {
      "primary": {
        "label": "bg-red-500",
        "root": "bg-red-500"
      },
      "secondary": "bg-green-500"
    }
  },
  defaultVariants: {
    "color": "secondary",
  },
  "compoundVariants": [
    {
      "conditions": {
        "color": ["primary", "secondary"],
      },
      "class": "text-red-100 text-red-200"
    }
  ]
})

// export const simpleComponent = tca(simpleConfiguration)
