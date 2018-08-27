export function backspace(text, x, y) {
  
  let isAtFirst = x == 0;

  if (isAtFirst && text.getLastLineIndex() == 0) {
    return { x, y };
  }

  if (isAtFirst) {
    x = text.getLastCharIndex(y - 1) + 1;
    text.shiftUp(y);
    y--;
    return { x, y };
  }

  if (!isAtFirst) {
    text.removeCharAt(x - 1, y);
    x--;
    return { x, y };
  }
}