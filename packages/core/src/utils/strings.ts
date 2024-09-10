function clean(str: string): string {
  // Remove comments
  const noComments = str.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");

  // Replace multiple whitespace characters (including newlines) with a single space
  const noExtraSpaces = noComments.replace(/\s+/g, " ");

  // Trim the string to remove leading and trailing spaces
  return noExtraSpaces.trim();
}

export function cleanString(str: string | string[]): string {
  if (Array.isArray(str)) {
    return str.map((s) => clean(s)).join(" ");
  }
  return clean(str);
}
