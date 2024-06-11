import { tv } from "tailwind-variants"
import { twMergeConfig } from "./twMerge.config.mjs"

const noSlots = {
  base: "relative flex shrink-0 overflow-hidden rounded-full",
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

export const noSlotsAndCompoundNoTwMerge = {
    avatar: tv(noSlots, {
        twMerge: false,
    }),
};

export const noSlotsNoCompound = {
  avatar: tv(noSlots, {
    twMergeConfig
  }),
};

export default {
  noSlotsAndCompoundNoTwMerge,
  noSlotsNoCompound
}
// // without slots & no tw-merge enabled
// const noSlotsNoTwMerge = {
//     avatar: tv(
//       {
//         base: "relative flex shrink-0 overflow-hidden rounded-full",
//         variants: {
//           size: {
//             xs: "h-6 w-6",
//             sm: "h-8 w-8",
//             md: "h-10 w-10",
//             lg: "h-12 w-12",
//             xl: "h-14 w-14",
//           },
//         },
//         defaultVariants: {
//           size: "md",
//         },
//         compoundVariants: [
//           {
//             size: ["xs", "sm"],
//             class: "ring-1",
//           },
//           {
//             size: ["md", "lg", "xl", "2xl"],
//             class: "ring-2",
//           },
//         ],
//       },
//       {
//         twMerge: false,
//       },
//     ),
//     image: tv(
//       {
//         base: "aspect-square h-full w-full",
//         variants: {
//           withBorder: {
//             true: "border-1.5 border-white",
//           },
//         },
//       },
//       {
//         twMerge: false,
//       },
//     ),
//     fallback: tv(
//       {
//         base: "flex h-full w-full items-center justify-center rounded-full bg-muted",
//         variants: {
//           size: {
//             xs: "text-xs",
//             sm: "text-sm",
//             md: "text-base",
//             lg: "text-lg",
//             xl: "text-xl",
//           },
//         },
//         defaultVariants: {
//           size: "md",
//         },
//       },
//       {
//         twMerge: false,
//       },
//     ),
// };
  
//   // without slots & custom tw-merge config
// const noSlotsWithCustomConfig = {
//     avatar: tv(
//         {
//         base: "relative flex shrink-0 overflow-hidden rounded-full",
//         variants: {
//             size: {
//             xs: "h-unit-6 w-unit-6",
//             sm: "h-unit-8 w-unit-8",
//             md: "h-unit-10 w-unit-10",
//             lg: "h-unit-12 w-unit-12",
//             xl: "h-unit-14 w-unit-14",
//             },
//         },
//         defaultVariants: {
//             size: "md",
//         },
//         compoundVariants: [
//             {
//             size: ["xs", "sm"],
//             class: "ring-1",
//             },
//             {
//             size: ["md", "lg", "xl", "2xl"],
//             class: "ring-2",
//             },
//         ],
//         },
//         {
//         twMergeConfig,
//         },
//     ),
//     image: tv({
//         base: "aspect-square h-full w-full",
//         variants: {
//         withBorder: {
//             true: "border-1.5 border-white",
//         },
//         },
//     }),
//     fallback: tv(
//         {
//         base: "flex h-full w-full items-center justify-center rounded-full bg-muted",
//         variants: {
//             size: {
//             sm: "text-small",
//             md: "text-medium",
//             lg: "text-large",
//             },
//         },
//         defaultVariants: {
//             size: "md",
//         },
//         },
//         {
//         twMergeConfig,
//         },
//     ),
// };


// // with slots no custom tw-merge config
// export const avatar = (twMerge = true) =>
//     tv(
//       {
//         slots: {
//           base: "relative flex shrink-0 overflow-hidden rounded-full",
//           image: "aspect-square h-full w-full",
//           fallback: "flex h-full w-full items-center justify-center rounded-full bg-muted",
//         },
//         variants: {
//           withBorder: {
//             true: {
//               image: "border-1.5 border-white",
//             },
//           },
//           size: {
//             xs: {
//               base: "h-6 w-6",
//               fallback: "text-xs",
//             },
//             sm: {
//               base: "h-8 w-8",
//               fallback: "text-sm",
//             },
//             md: {
//               base: "h-10 w-10",
//               fallback: "text-base",
//             },
//             lg: {
//               base: "h-12 w-12",
//               fallback: "text-large",
//             },
//             xl: {
//               base: "h-14 w-14",
//               fallback: "text-xl",
//             },
//           },
//         },
//         defaultVariants: {
//           size: "md",
//           withBorder: false,
//         },
//         compoundVariants: [
//           {
//             size: ["xs", "sm"],
//             class: "ring-1",
//           },
//           {
//             size: ["md", "lg", "xl", "2xl"],
//             class: "ring-2",
//           },
//         ],
//       },
//       {
//         twMerge,
//       },
//     );
  
//   // with slots & custom tw-merge config
//   export const avatarWithCustomConfig = tv(
//     {
//       slots: {
//         base: "relative flex shrink-0 overflow-hidden rounded-full",
//         image: "aspect-square h-full w-full",
//         fallback: "flex h-full w-full items-center justify-center rounded-full bg-muted",
//       },
//       variants: {
//         withBorder: {
//           true: {
//             image: "border-1.5 border-white",
//           },
//         },
//         size: {
//           sm: {
//             base: "h-unit-8 w-unit-8",
//             fallback: "text-small",
//           },
//           md: {
//             base: "h-unit-10 w-unit-10",
//             fallback: "text-medium",
//           },
//           lg: {
//             base: "h-unit-12 w-unit-12",
//             fallback: "text-large",
//           },
//         },
//       },
//       defaultVariants: {
//         size: "md",
//         withBorder: false,
//       },
//       compoundVariants: [
//         {
//           size: ["sm"],
//           class: "ring-1",
//         },
//         {
//           size: ["md", "lg"],
//           class: "ring-2",
//         },
//       ],
//     },
//     {
//       twMergeConfig,
//     },
//   );
