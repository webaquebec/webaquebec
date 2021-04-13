/**
 * Computes a CSS calc function that betweens a value from
 * A to B over A-viewport-width to B-viewport-width.
 * Requires a media query to cap the value at B.
 */
export default (from, to, fromWidth, toWidth) => {
  const slope = (to - from) / (toWidth - fromWidth);
  const base = to - slope * fromWidth - from;

  return `calc(1rem + ${100 * slope}vw - ${base}px)`;
};
