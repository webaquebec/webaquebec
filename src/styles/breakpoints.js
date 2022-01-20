/* eslint-disable prefer-destructuring */
const breakpoints = [
  576, 640, 768, 832, 896, 992, 1024, 1280, 1440, 1560, 1920,
];

// 640, 1280
// breakpoints.fonts = [];

// 768, 992, 1280
breakpoints.spacings = [breakpoints[2], breakpoints[5], breakpoints[7]];

export default breakpoints;
