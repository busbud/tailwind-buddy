import { TCA_VARIANT_DEFINITION, tca } from "../../src/tca";

type Slots = "root"
type Variants = {
  color: "primary" | "secondary"
}

type VariantConfiguration = TCA_VARIANT_DEFINITION<Slots, Variants>

export const simpleConfiguration: VariantConfiguration = {
    "slots": {
        "root": "text-red-100",
    },
    "variants": {
      "color": {
        "default": "primary",
        "values": {
          "primary": {
            "root": "text-red-200",
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