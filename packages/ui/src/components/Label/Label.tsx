import React from "react";

import { PropsWithChildren } from "react";
import { LabelProps } from "./Label.types";
import { labelVariants } from "./Label.variants";

export const Label: React.FC<PropsWithChildren<LabelProps>> = ({
  as: Component = "span",
  className,
  children,
  fontWeight = "regular",
  size = "large",
  ...restProps
}) => {
  const { root } = labelVariants();

  return (
    <Component
      className={root({
        "fontWeight": fontWeight,
        "size": size,
      }, {
        "className": "",
        "disabled": false
      })}
      {...restProps}
    >
      {children}
    </Component>
  );
};
