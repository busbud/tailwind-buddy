import { retrieveVariantsClasses } from "./variants";
import { retrieveCompoundClasses } from "./compounds";
import { TCA_CONFIG, TCA_VARIANT_DEFINITION, VARIANT } from "@/tca";

export const createSlotFunction = <Slots extends string, Variants, Props extends Record<string, any> = {}>(variantDefinition: TCA_VARIANT_DEFINITION<Slots, Variants, Props>, twMerge: (str: string) => string, slot: string, variants: Record<keyof Variants, VARIANT<Slots>>, tcaConfig: TCA_CONFIG) => 
    (variantsProps: Variants, otherProps: Props & { className?: string }) => {
        const className = otherProps.className || ""
        const slotDefaultClasses = variantDefinition.slots[slot as Slots] ? [variantDefinition.slots[slot as Slots]] : []
        const [defaultProps, slotVariantsClasses] = retrieveVariantsClasses(variants, variantsProps, slot)
        let compoundClasses: any[] = []
        const withDefaultProps = {
            ...defaultProps,
            ...variantsProps
        }

        if (variantDefinition.compoundVariants.length > 0) {
            compoundClasses = retrieveCompoundClasses(variantDefinition.compoundVariants, withDefaultProps, otherProps, slot)
        }
        const str = [
            ...slotDefaultClasses,
            ...Object.values(slotVariantsClasses),
            ...compoundClasses,
            className
        ].join(" ").trim()

        if (tcaConfig.tailwindMergeDisabled) {
            return str
        }
        return twMerge(str)
    }