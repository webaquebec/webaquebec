/**
 * Avoid dividing unitless zero into CSS calc()
 * @param {string} space
 * @returns entry space value or 0px
 *
 */
export default (space) => {
  return space === '0' ? '0px' : space;
};
