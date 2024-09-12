export const generateResponsiveVariants = (
  variants: string[],
  breakpoints: string[]
) => {
  const classNames: string[] = [];

  variants.forEach((variant) => {
    breakpoints.forEach((breakpoint) => {
      classNames.push(`${breakpoint}:${variant}`);
    });
  });

  return classNames;
};
