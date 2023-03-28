const black = '#000000';
const white = '#ffffff';
const red = '#E0302A';
const earlyDawn = '#FFF7E9';
const darkEarlyDawn = '#E4DDD1';
const cherry = '#BD002D';
const apricot = '#FFAE73';
const mauve = '#9958ED';
const blush = '#ED9694';

const bleu10 = '#EBECFF';
const bleu20 = '#D1D5FF';
const bleu30 = '#858EFF';
const bleu40 = '#3847FF';
const bleu60 = '#0012EB';
const bleu80 = '#000CA0';
const bleu90 = '#00086B';
const bleu100 = '#00034D';

const turquoise10 = '#ECFEFA';
const turquoise20 = '#D4FCF5';
const turquoise30 = '#BCFAEF';
const turquoise40 = '#8DF7E3';
const turquoise60 = '#5DF3D7';
const turquoise80 = '#2FF0CC';
const turquoise90 = '#0EC3A1';
const turquoise100 = '#097C66';

const jaune10 = '#FEFDEB';
const jaune20 = '#FEFBDC';
const jaune30 = '#FDF9C4';
const jaune40 = '#FCF6AB';
const jaune60 = '#FBF17A';
const jaune80 = '#F9EB46';
const jaune90 = '#D4C407';
const jaune100 = '#A39705';

const rose10 = '#FFEBF9';
const rose20 = '#FFD6F4';
const rose30 = '#FFBDED';
const rose40 = '#FFA3E6';
const rose60 = '#FF8ADF';
const rose80 = '#FF58D1';
const rose90 = '#F000AE';
const rose100 = '#BD0089';

const mauve10 = '#F4EDFD';
const mauve20 = '#E6D6FB';
const mauve30 = '#D5BAF8';
const mauve40 = '#C49EF5';
const mauve60 = '#B687F2';
const mauve80 = '#9958ED';
const mauve90 = '#7018E2';
const mauve100 = '#4E119D';

const ciel10 = '#EBF7FF';
const ciel20 = '#CCEAFF';
const ciel30 = '#99D6FF';
const ciel40 = '#66C1FF';
const ciel60 = '#33ADFF';
const ciel80 = '#0098FF';
const ciel90 = '#006AB2';
const ciel100 = '#003D66';

const gris10 = '#F7F7F7';
const gris20 = '#F0F0F0';
const gris30 = '#EBEBEB';
const gris40 = '#D1D1D1';
const gris60 = '#ABABAB';
const gris80 = '#858585';
const gris90 = '#5E5E5E';
const gris100 = '#383838';

// #000CA0
const bleu80hsl = {
  hue: 236,
  saturation: 100,
  lightness: 31,
};
// #2FF0CC
const turquoise80hsl = {
  hue: 169,
  saturation: 87,
  lightness: 56,
};
// #F9EB46
const jaune80hsl = {
  hue: 55,
  saturation: 94,
  lightness: 63,
};
// #FF58D1
const rose80hsl = {
  hue: 317,
  saturation: 100,
  lightness: 67,
};
// #9958ED
const mauve80hsl = {
  hue: 266,
  saturation: 81,
  lightness: 64,
};
// #0098FF
const ciel80hsl = {
  hue: 204,
  saturation: 100,
  lightness: 50,
};

const colors = {
  black,
  white,
  red,
  earlyDawn,
  darkEarlyDawn,
  cherry,
  apricot,
  mauve,
  blush,

  bleu10,
  bleu20,
  bleu30,
  bleu40,
  bleu60,
  bleu80,
  bleu80hsl,
  bleu90,
  bleu100,

  turquoise10,
  turquoise20,
  turquoise30,
  turquoise40,
  turquoise60,
  turquoise80,
  turquoise80hsl,
  turquoise90,
  turquoise100,

  jaune10,
  jaune20,
  jaune30,
  jaune40,
  jaune60,
  jaune80,
  jaune80hsl,
  jaune90,
  jaune100,

  rose10,
  rose20,
  rose30,
  rose40,
  rose60,
  rose80,
  rose80hsl,
  rose90,
  rose100,

  mauve10,
  mauve20,
  mauve30,
  mauve40,
  mauve60,
  mauve80,
  mauve80hsl,
  mauve90,
  mauve100,

  ciel10,
  ciel20,
  ciel30,
  ciel40,
  ciel60,
  ciel80,
  ciel80hsl,
  ciel90,
  ciel100,

  gris10,
  gris20,
  gris30,
  gris40,
  gris60,
  gris80,
  gris90,
  gris100,
};

const alias = {
  text: colors.gris90,
  bleu: colors.bleu100,
  turquoise: colors.turquoise80,
  jaune: colors.jaune80,
  rose: colors.rose80,
  mauve: colors.mauve80,
  ciel: colors.ciel80,
  gris: colors.gris30,
  earlyDawn: colors.earlyDawn,
};

export default { ...colors, ...alias };
