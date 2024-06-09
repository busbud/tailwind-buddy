import { ResponsiveVariants, TCA_VARIANT_DEFINITION, tca } from "@/tca";

type Slots = "root"

export type Screens = "sm" | "md" | "lg" | "xl" | "xxl"

type Variants = {
  size: ResponsiveVariants<"small" | "large" | "extralarge">
}

type VariantConfiguration = TCA_VARIANT_DEFINITION<Slots, Variants>

export const simpleConfiguration: VariantConfiguration = {
    "slots": {
        "root": /** @tw */ "text-red-100",
    },
    "variants": {
      "size": {
        "default": "primary",
        "values": {
          "small": {
            "root": /** @tw */ "text-xl",
          },
          "large": /** @tw */ "text-4xl",
          "extralarge": /** @tw */ "text-5xl leading-tight",
        }
      }
    }
}

export const simpleResponsiveComponent = tca(simpleConfiguration)
export const simpleResponsiveComponentWithoutTwMerge = tca(simpleConfiguration, {
  "tailwindMergeDisabled": true
})