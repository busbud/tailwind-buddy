export const generateResponsive = (variants: string[], breakpoints: string[]) => {
  let classNames: string[] = [];

  variants.forEach((variant) => {
    breakpoints.forEach((breakpoint) => {
        classNames.push(`${breakpoint}:${variant}`);
    });
  });

  return classNames;
};
