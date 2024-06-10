import { TCA_VARIANT_DEFINITION, tca } from "../../src/tca";

type Slots = "root" | "children"
type Variants = {
  color: "primary" | "secondary"
}

type VariantConfiguration = TCA_VARIANT_DEFINITION<Slots, Variants>

export const simpleConfiguration: VariantConfiguration = {
    "slots": {
        "root": "text-red-100",
        "children": "text-blue-100"
    },
    "variants": {
      "color": {
        "default": "primary",
        "values": {
          "primary": {
            "root": "text-red-200",
            "children": "text-blue-200"
          },
          "secondary": "text-green-500"
        }
      }
    }
}

export const simpleComponent = tca(simpleConfiguration)
export const simpleComponentWithoutTwMerge = tca(simpleConfiguration, {
  "tailwindMergeDisabled": true,
})