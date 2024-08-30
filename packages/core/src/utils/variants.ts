export function extractValueFromVariantSlot<S>(value: any, slot: keyof S) {
  if (typeof value === "string") return value.replace(/\s+/g, " ").trim();
  else if (value?.[slot] && typeof value[slot] === "string")
    return value[slot].replace(/\s+/g, " ").trim();
  return undefined;
}
