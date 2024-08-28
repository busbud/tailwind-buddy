export const buildArrayWithResponsivesFromDefault = (
  obj: Record<string, any>
): any[] => {
  const acc: any[] = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined || value === null) continue;
    else if (typeof value === "object") {
      if (typeof value["initial"] === "undefined") {
        throw new Error(
          `initial value is missing for the variant ${key} ${value}`
        );
      } else {
        acc.push([key, value]);
      }
    } else {
      acc.push([key, { initial: value }]);
    }
  }
  return acc;
};
