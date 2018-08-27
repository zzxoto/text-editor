export function arrow(text, x, y, arrowType) {
  console.log(x);
  switch(arrowType) {
    case "arrowup":
      y -= 1;
      break;
    case "arrowdown":
      y += 1;
      break;
    case "arrowright":
      x += 1;
      break;
    case "arrowleft":
      x -= 1;
      break;
  }
  
  y = y <= text.getLastLineIndex()? y: text.getLastLineIndex();
  y = y < 0? 0: y;
  x = x <= text.getLastCharIndex(y)? x: text.getLastCharIndex(y) + 1;
  x = x < 0? 0: x;

  return {
    x,
    y
  };
}