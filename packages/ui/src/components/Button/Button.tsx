import React, { ReactNode } from "react";
import { type ButtonProps, buttonVariants } from "./Button.variants";

const defaultVariants = buttonVariants.definition().defaultVariants;

export const Button: React.FC<ButtonProps> = ({
  appearance = defaultVariants.appearance,
  children,
  className,
  iconEnd: iconEndProp,
  iconStart: iconStartProp,
  size = "md",
  variant = defaultVariants.variant,
  ...restProps
}) => {
  const { root, icon, label } = buttonVariants;

  const iconContainer = (children: ReactNode) => (
    <span
      className={icon({
        appearance,
        size,
        variant,
      })}
    >
      {children}
    </span>
  );

  const iconStart = iconStartProp && iconContainer(iconStartProp);

  return (
    <button
      className={root({
        appearance,
        className,
        size,
        variant,
      })}
      {...restProps}
    >
      {iconStart}
      <span className={label({ size })}>{children}</span>
    </button>
  );
};
