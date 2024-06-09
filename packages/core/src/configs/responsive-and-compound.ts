import { ResponsiveVariants, TCA_VARIANT_DEFINITION, tca } from "@/tca";

type Slots = "root"

export type Screens = "sm" | "md" | "lg" | "xl" | "xxl"

interface Props {
  disabled?: boolean
}

type Variants = {
  size: ResponsiveVariants<"small" | "large" | "extralarge">
}

type VariantConfiguration = TCA_VARIANT_DEFINITION<Slots, Variants, Props>

export const simpleConfiguration: VariantConfiguration = {
    "slots": {
        "root": /** @tw */ "text-red-100",
    },
    "variants": {
      "size": {
        "default": "small",
        "values": {
          "small": {
            "root": /** @tw */ "text-xl",
          },
          "large": /** @tw */ "text-4xl",
          "extralarge": /** @tw */ "text-5xl leading-tight",
        }
      }
    },
    "compoundVariants": [
      {
        "conditions": {
          "size": "extralarge",
        },
        "class": /** @tw */ "bg-red-500 text-blue-500"
      },
      {
        "conditions": {
          disabled: true,
          size: "small"
        },
        class: /** @tw */ "bg-gray-500 border-red-500"
      }
    ]
}

export const responsiveAndCompoundComponent = tca(simpleConfiguration)
export const responsiveAndCompoundComponentWithoutTwMerge = tca(simpleConfiguration, {
  "tailwindMergeDisabled": true
})