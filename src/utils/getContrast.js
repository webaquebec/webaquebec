/*!
 * Get the contrasting color for any hex color
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * Derived from work by Brian Suda, https://24ways.org/2010/calculating-color-contrast/
 * @param  {String} A hexcolor value
 * @return {String} The contrasting color (black or white)
 */
export default (value) => {
  let hexColor = value;
  // If a leading # is provided, remove it
  if (hexColor.slice(0, 1) === '#') {
    hexColor = hexColor.slice(1);
  }

  // If a three-character hexcode, make six-character
  if (hexColor.length === 3) {
    hexColor = hexColor
      .split('')
      .map((hex) => hex + hex)
      .join('');
  }

  // Convert to RGB value
  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2, 2), 16);
  const b = parseInt(hexColor.substr(4, 2), 16);

  // Get YIQ ratio
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Check contrast
  return yiq >= 128 ? '#000' : '#fff';
};
