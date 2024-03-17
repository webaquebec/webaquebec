const elevation = {
  none: `none`,
  small: `
    0.5px 1px 1px hsl(var(--shadow-color) / 0.5)
  `,
  medium: `
    1px 2px 2px hsl(var(--shadow-color) / 0.2),
    2px 4px 4px hsl(var(--shadow-color) / 0.2),
    3px 6px 6px hsl(var(--shadow-color) / 0.2)
  `,
  large: `
    1px 2px 2px hsl(var(--shadow-color) / 0.05),
    2px 4px 4px hsl(var(--shadow-color) / 0.05),
    4px 8px 8px hsl(var(--shadow-color) / 0.05),
    8px 16px 16px hsl(var(--shadow-color) / 0.15),
    16px 32px 32px hsl(var(--shadow-color) / 0.15)
  `,
};

export default elevation;
