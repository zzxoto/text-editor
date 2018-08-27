export function enter(text, x, y) {
  let temp = [],
      i = 0,
      char;

  text.addLine(y + 1);

  while (text.getLastCharIndex(y) >= x) {
    char = text.removeCharAt(x, y);
    text.addCharAt(i, y + 1, char);
    i++;
  }

  return {
    x: 0,
    y: y + 1
  }
}