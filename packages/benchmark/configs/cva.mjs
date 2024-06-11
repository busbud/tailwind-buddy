import { cva } from "class-variance-authority";

export const noSlotsAndCompoundNoTwMerge = {
    avatar: cva("relative flex shrink-0 overflow-hidden rounded-full", {
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
    }),
}

// export const noSlotsNoCompoundNoTwMerge = {
//     avatar: cva("relative flex shrink-0 overflow-hidden rounded-full", {
//         variants: {
//             size: {
//                 xs: "h-6 w-6",
//                 sm: "h-8 w-8",
//                 md: "h-10 w-10",
//                 lg: "h-12 w-12",
//                 xl: "h-14 w-14",
//             },
//         },
//         defaultVariants: {
//             size: "md",
//         }
//     }),
// }

export default {
    noSlotsAndCompoundNoTwMerge,
    // noSlotsNoCompoundNoTwMerge
}


// CVA do not have 
// const cvaNoMerge = {
//     avatar: cva("relative flex shrink-0 overflow-hidden rounded-full", {
//       variants: {
//         size: {
//           xs: "h-6 w-6",
//           sm: "h-8 w-8",
//           md: "h-10 w-10",
//           lg: "h-12 w-12",
//           xl: "h-14 w-14",
//         },
//       },
//       defaultVariants: {
//         size: "md",
//       },
//       compoundVariants: [
//         {
//           size: ["xs", "sm"],
//           class: "ring-1",
//         },
//         {
//           size: ["md", "lg", "xl", "2xl"],
//           class: "ring-2",
//         },
//       ],
//     }),
//     image: cva("aspect-square h-full w-full", {
//       variants: {
//         withBorder: {
//           true: "border-1.5 border-white",
//         },
//       },
//     }),
//     fallback: cva("flex h-full w-full items-center justify-center rounded-full bg-muted", {
//       variants: {
//         size: {
//           xs: "text-xs",
//           sm: "text-sm",
//           md: "text-base",
//           lg: "text-lg",
//           xl: "text-xl",
//         },
//       },
//       defaultVariants: {
//         size: "md",
//       },
//     }),
// };