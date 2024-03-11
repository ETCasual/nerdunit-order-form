export function getComplementColor(hexColor: string): string {
  // Remove '#' if present
  hexColor = hexColor.replace("#", "");

  // Convert hex to RGB
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Calculate complement color
  const complementR = (255 - r).toString(16).padStart(2, "0");
  const complementG = (255 - g).toString(16).padStart(2, "0");
  const complementB = (255 - b).toString(16).padStart(2, "0");

  return `#${complementR}${complementG}${complementB}`;
}

// Example usage
const hexColor = "#FF0000"; // Red
const complementColor = getComplementColor(hexColor);
console.log(`Complement color for ${hexColor} is ${complementColor}`);
