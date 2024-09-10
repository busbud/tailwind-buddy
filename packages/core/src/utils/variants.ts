export function extractValueFromVariantSlot<S>(value: any, slot: keyof S) {
  if (Array.isArray(value)) return value;
  return Array.isArray(value[slot]) ? value[slot] : [];
}
