import React from "react";

import { PropsWithChildren } from "react";
import { LabelProps } from "./Label.types";
import { labelVariants } from "./Label.variants";

export const Label: React.FC<PropsWithChildren<LabelProps>> = ({
  as: Component = "span",
  className,
  children,
  fontWeight = "regular",
  size = "md",
  ...restProps
}) => {
  const { root } = labelVariants();

  console.log(root({
    "fontWeight": fontWeight,
    "size": size,
  }, {
    "className": "",
    "disabled": false
  }))

  return (
    <Component
      className=""
      {...restProps}
    >
      {children}
    </Component>
  );
};
