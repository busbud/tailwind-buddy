import { TCA_VARIANT_DEFINITION, tca } from "@/tca";

type Slots = "root" | "children"
type Variants = {
  color?: "primary" | "secondary"
}
type RegularProps = {
  disabled?: boolean
}
type VariantConfiguration = TCA_VARIANT_DEFINITION<Slots, Variants, RegularProps>

export const simpleCompoundConfiguration: VariantConfiguration = {
    "slots": {
      "root": /** @tw */ "text-red-100",
      "children": /** @tw */ "text-blue-100",
    },
    "variants": {
      "color": {
        "default": "primary",
        "values": {
          "primary": {
            "root": /** @tw */ "text-red-200",
            "children": /** @tw */ "text-blue-200",
          },
          "secondary": /** @tw */ "text-green-100"
        }
      }
    },
    compoundVariants: [
      {
        "conditions": {
          disabled: true
        },
        class: {
          "root": /** @tw */ "text-red-300"
        }
      },
      {
        "conditions": {
          disabled: true,
          color: "secondary"
        },
        class: /** @tw */ "text-green-200"
      }
    ]
}

export const simpleCompoundComponent = tca(simpleCompoundConfiguration)
export const simpleCompoundComponentWithoutTwMerge = tca(simpleCompoundConfiguration, {
  "tailwindMergeDisabled": true,
})