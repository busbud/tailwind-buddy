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

  return (
    <Component
      className={root({
        size,
        fontWeight,
      }, {
        disabled: true,
        className
      })}
      {...restProps}
    >
      {children}
    </Component>
  );
};
