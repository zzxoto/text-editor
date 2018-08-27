export function char(text, x, y, character) {
  text.addCharAt(x, y, character);

  return {
    x: x + 1,
    y: y
  };
}