import { cva } from "class-variance-authority";

const options = {
    variants: {
        size: {
            xs: "h-6 w-6",
            sm: "h-8 w-8",
            md: "h-10 w-10",
            lg: "h-12 w-12",
            xl: "h-14 w-14",
        },
    },
    defaultVariants: {
        size: "md",
    },
    compoundVariants: [
        {
            size: ["xs", "sm"],
            class: "ring-1",
        },
        {
            size: ["md", "lg", "xl", "2xl"],
            class: "ring-2",
        },
    ],
}

export const noSlotsAndCompoundNoTwMergeNoResponsive = {
    avatar: cva("relative flex shrink-0 overflow-hidden rounded-full", options),
}