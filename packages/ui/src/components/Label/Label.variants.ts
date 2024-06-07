// import { tv } from "tailwind-variants";
import { tca } from "tailwind-classes-authority"

export const labelVariants = tca({
    slots: {
        "root": "bg-black"
    },
    "variants": {
        fontWeight: {
            default: "font-regular",
            values: {
                regular: "font-regular",
                bold: "font-bold",
                extraBold: "font-extrabold"
            }
        },
        size: {
            default: "md",
            values: {
                xxl: ["text-4xl", "leading-10", "tracking-tight"],
                xl: "text-2xl leading-8",
                lg: "text-lg leading-6",
                md: "text-md leading-4",
                sm: "text-sm leading-4",
                xs: "text-xs uppercase leading-4 tracking-wider",
                xxs: "text-xs uppercase leading-4 tracking-wider"
            }
        
        }
    }
})
// export const labelVariants = tv(
//   {
//     slots: {
//       root: "inline-flex max-w-full items-center gap-x-2",
//       icon: "shrink-0",
//       container: "truncate",
//     },
//     variants: {
//       /** Sets the label font weight. */
//       fontWeight: {
//         regular: { root: "font-regular" },
//         bold: { root: "font-bold" },
//         extraBold: { root: "font-extrabold" },
//       },
//       /** Sets the label size. */
//       size: {
//         xxl: { root: ["text-4xl", "leading-10", "tracking-tight"] },
//         xl: { root: "text-2xl leading-8" },
//         lg: { root: "text-lg leading-6" },
//         md: { root: "text-md leading-4" },
//         sm: { root: "text-sm leading-4" },
//         xs: {
//           root: "text-xs uppercase leading-4 tracking-wider",
//         },
//         xxs: {
//           root: "text-xs uppercase leading-4 tracking-wider",
//         },
//       },
//     },
//   },
//   {
//     responsiveVariants: true,
//   },
// );
