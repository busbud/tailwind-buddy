export function cleanString(str: string): string {
  // Remove comments
  const noComments = str.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");

  // Replace multiple whitespace characters (including newlines) with a single space
  const noExtraSpaces = noComments.replace(/\s+/g, " ");

  // Trim the string to remove leading and trailing spaces
  return noExtraSpaces.trim();
}
