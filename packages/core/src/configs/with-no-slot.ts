import { tca } from "tailwind-classes-authority"

export const labelVariantsConfigurations = {
    slots: {
        "root": "text-red-500"
    },
    "variants": {
        fontWeight: {
            default: "regular",
            values: {
                regular: "font-regular",
                bold: "font-bold",
                extraBold: "font-extrabold",
            }
        },
        size: {
            default: "md",
            values: {
                xxl: ["text-9xl", "leading-10", "tracking-tight"],
                xl: "text-2xl leading-8",
                lg: "text-lg leading-6",
                md: "text-md leading-4",
                sm: "text-sm leading-4",
                xs: {
                    root: "text-xs uppercase leading-4 tracking-wider"
                },
                xxs: "text-xs uppercase leading-4 tracking-wider"
            }
        }
    },
    // compoundVariants: [
    //     {
    //         conditions: {
    //             fontWeight: "bold",
    //             size: "xxl"
    //         },
    //         class: "bg-blue-500"
    //     }
    // ]
}

export const labelVariants = tca(labelVariantsConfigurations)
