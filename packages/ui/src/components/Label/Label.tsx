import React from "react";

import { LabelProps, labelVariants } from "./Label.variants";

export const Label: React.FC<LabelProps> = ({
  as: Component = "span",
  className,
  children,
  fontWeight,
  size,
  disabled,
  ...restProps
}) => {
  const { slots: { root } } = labelVariants;

  return (
    <Component
      className={root({
        fontWeight,
        size,
        className,
        disabled,
      })}
      {...restProps}
    >
      {children}
    </Component>
  );
};
