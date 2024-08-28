export function extractValueFromVariantSlot(value: any, slot: string) {
  if (typeof value === "string") return value.replace(/\s+/g, " ").trim();
  else if (value?.[slot] && typeof value[slot] === "string")
    return value[slot].replace(/\s+/g, " ").trim();
  return undefined;
}
