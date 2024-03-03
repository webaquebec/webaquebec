const black = '#000000';
const white = '#ffffff';
const cherry = '#BD002D';
const apricot = '#FFAE73';
const mauve = '#9958ED';
const rose = '#FF8ADF';
const lipstick = '#BD0089';
const blush = '#ED9694';
const turquoise = '#2FF0CC';

const peach95 = '#FFF7E9';
const peach80 = '#E4D3B4';

const blueberry95 = '#F2F2F2';
const blueberry90 = '#E1E2EA';
const blueberry80 = '#C2C6D6';
const blueberry70 = '#A4A9C1';
const blueberry60 = '#868CAC';
const blueberry50 = '#686F97';
const blueberry40 = '#535979';
const blueberry30 = '#3E435B';
const blueberry20 = '#2A2D3D';
const blueberry10 = '#0B1237';

const watermelon90 = '#FCD1D7';
const watermelon80 = '#F5A3AA';
const watermelon50 = '#ED5B68';
const watermelon35 = '#A1121E';

const kiwi80 = '#DCF8A1';
const kiwi50 = '#B1EE2F';
const kiwi35 = '#71A00D';
const kiwi25 = '#5A7F0A';

const pineapple80 = '#FDEDB6';
const pineapple50 = '#FFC701';
const pineapple35 = '#B88400';
const pineapple25 = '#804F00';

const plum90 = '#ECDEEC';
const plum80 = '#D9BEDA';
const plum50 = '#A360A6';
const plum35 = '#714171';

const gris10 = '#F7F7F7';
const gris20 = '#F0F0F0';
const gris30 = '#EBEBEB';
const gris40 = '#D1D1D1';
const gris60 = '#ABABAB';
const gris80 = '#858585';
const gris90 = '#5E5E5E';
const gris100 = '#383838';

// #000CA0
const blueberry80hsl = {
  hue: 236,
  saturation: 100,
  lightness: 31,
};
// #F9EB46
const jaune80hsl = {
  hue: 55,
  saturation: 94,
  lightness: 63,
};
// #9958ED
const mauve80hsl = {
  hue: 266,
  saturation: 81,
  lightness: 64,
};
// #BD002D
const cherryHsl = {
  hue: 346,
  saturation: 100,
  lightness: 37,
};
// #ED9694
const blushHsl = {
  hue: 1,
  saturation: 71,
  lightness: 75,
};

const colors = {
  black,
  white,
  cherry,
  apricot,
  mauve,
  rose,
  lipstick,
  blush,
  turquoise,

  peach95,
  peach80,

  blueberry95,
  blueberry90,
  blueberry80,
  blueberry70,
  blueberry60,
  blueberry50,
  blueberry40,
  blueberry30,
  blueberry20,
  blueberry10,

  watermelon90,
  watermelon80,
  watermelon50,
  watermelon35,

  kiwi80,
  kiwi50,
  kiwi35,
  kiwi25,

  pineapple80,
  pineapple50,
  pineapple35,
  pineapple25,

  plum90,
  plum80,
  plum50,
  plum35,

  gris10,
  gris20,
  gris30,
  gris40,
  gris60,
  gris80,
  gris90,
  gris100,

  blueberry80hsl,
  jaune80hsl,
  mauve80hsl,
  cherryHsl,
  blushHsl,
};

const alias = {
  text: colors.blueberry10,
  peach: colors.peach95,
  blueberry: colors.blueberry10,
  watermelon: colors.watermelon50,
  kiwi: colors.kiwi50,
  pineapple: colors.pineapple50,
  plum: colors.plum50,
  gris: colors.gris30,
};

export default { ...colors, ...alias };
