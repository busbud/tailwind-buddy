// import React from "react";

// import { PropsWithChildren } from "react";
// import { LabelProps, labelVariants } from "./Label.variants";

// export const Label: React.FC<PropsWithChildren<LabelProps>> = ({
//   as: Component = "span",
//   className,
//   children,
//   fontWeight,
//   size,
//   disabled,
//   ...restProps
// }) => {
//   const { root } = labelVariants;

//   return (
//     <Component
//       className={root({
//         fontWeight: {
//           initial: "xxl",
//           md: "xxl",
//         },
//         size,
//         className,
//         disabled,
//       })}
//       {...restProps}
//     >
//       {children}
//     </Component>
//   );
// };
