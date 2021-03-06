/**
 * convert value to range x: 0, 2 and y: 0, 2
 * @param x
 * @param y
 * @param elementWidth
 * @param elementHeight
 */
export function normalizeMouseMovement(x: number, y: number, elementWidth: number, elementHeight: number): { x: number; y: number } {
  return {
    x: x / (elementWidth / 2) ,
    y: y / (elementHeight / 2)
  };
}
