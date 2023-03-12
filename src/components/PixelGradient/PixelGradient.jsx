// vendors
import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Components
import Canvas from '../Canvas';
import Pixel from './Pixel';

// styles
import colors from '../../styles/colors';
import { canvasStyle } from './PixelGradient.styles';

const optionsByLocation = {
  home: {
    minLightness: colors.jaune80hsl.lightness,
    colors: [
      {
        hue: colors.bleu80hsl.hue,
        saturation: colors.bleu80hsl.saturation,
        lightness: 100,
      },
      {
        hue: colors.bleu80hsl.hue,
        saturation: colors.bleu80hsl.saturation,
        lightness: colors.bleu80hsl.lightness,
      },
      {
        hue: colors.rose80hsl.hue,
        saturation: colors.rose80hsl.saturation,
        lightness: colors.rose80hsl.lightness,
      },
      {
        hue: colors.rose80hsl.hue,
        saturation: colors.rose80hsl.saturation,
        lightness: 100,
      },
    ],
  },
  programmation: {
    minLightness: colors.turquoise80hsl.lightness,
    colors: [
      {
        hue: colors.turquoise80hsl.hue,
        saturation: colors.turquoise80hsl.saturation,
        lightness: 100,
      },
      {
        hue: colors.turquoise80hsl.hue,
        saturation: colors.turquoise80hsl.saturation,
        lightness: 80,
      },
      {
        hue: colors.turquoise80hsl.hue,
        saturation: colors.turquoise80hsl.saturation,
        lightness: colors.turquoise80hsl.lightness,
      },
      {
        hue: colors.turquoise80hsl.hue,
        saturation: colors.turquoise80hsl.saturation,
        lightness: 100,
      },
    ],
  },
  blogue: {
    minLightness: colors.rose80hsl.lightness,
    colors: [
      {
        hue: colors.rose80hsl.hue,
        saturation: colors.rose80hsl.saturation,
        lightness: 100,
      },
      {
        hue: colors.rose80hsl.hue,
        saturation: colors.rose80hsl.saturation,
        lightness: 80,
      },
      {
        hue: colors.rose80hsl.hue,
        saturation: colors.rose80hsl.saturation,
        lightness: colors.rose80hsl.lightness,
      },
      {
        hue: colors.rose80hsl.hue,
        saturation: colors.rose80hsl.saturation,
        lightness: 100,
      },
    ],
  },
  faq: {
    minLightness: colors.rose80hsl.lightness,
    colors: [
      {
        hue: colors.rose80hsl.hue,
        saturation: colors.rose80hsl.saturation,
        lightness: 100,
      },
      {
        hue: colors.rose80hsl.hue,
        saturation: colors.rose80hsl.saturation,
        lightness: colors.rose80hsl.lightness,
      },
      {
        hue: colors.rose80hsl.hue,
        saturation: colors.rose80hsl.saturation,
        lightness: 90,
      },
      {
        hue: colors.rose80hsl.hue,
        saturation: colors.rose80hsl.saturation,
        lightness: 100,
      },
    ],
  },
  billetterie: {
    minLightness: colors.ciel80hsl.lightness,
    colors: [
      {
        hue: colors.ciel80hsl.hue,
        saturation: colors.ciel80hsl.saturation,
        lightness: 100,
      },
      {
        hue: colors.ciel80hsl.hue,
        saturation: colors.ciel80hsl.saturation,
        lightness: colors.ciel80hsl.lightness,
      },
      {
        hue: colors.ciel80hsl.hue,
        saturation: colors.ciel80hsl.saturation,
        lightness: 90,
      },
      {
        hue: colors.ciel80hsl.hue,
        saturation: colors.ciel80hsl.saturation,
        lightness: 100,
      },
    ],
  },
  partenaires: {
    minLightness: colors.mauve80hsl.lightness,
    colors: [
      {
        hue: colors.mauve80hsl.hue,
        saturation: colors.mauve80hsl.saturation,
        lightness: 100,
      },
      {
        hue: colors.mauve80hsl.hue,
        saturation: colors.mauve80hsl.saturation,
        lightness: colors.mauve80hsl.lightness,
      },
      {
        hue: colors.mauve80hsl.hue,
        saturation: colors.mauve80hsl.saturation,
        lightness: 90,
      },
      {
        hue: colors.mauve80hsl.hue,
        saturation: colors.mauve80hsl.saturation,
        lightness: 100,
      },
    ],
  },
  'a-propos': {
    minLightness: colors.rose80hsl.lightness,
    colors: [
      {
        hue: colors.rose80hsl.hue,
        saturation: colors.rose80hsl.saturation,
        lightness: 100,
      },
      {
        hue: colors.rose80hsl.hue,
        saturation: colors.rose80hsl.saturation,
        lightness: colors.rose80hsl.lightness,
      },
      {
        hue: colors.rose80hsl.hue,
        saturation: colors.rose80hsl.saturation,
        lightness: 90,
      },
      {
        hue: colors.rose80hsl.hue,
        saturation: colors.rose80hsl.saturation,
        lightness: 100,
      },
    ],
  },
  waqademie: {
    minLightness: 80,
    colors: [
      {
        hue: colors.mauve80hsl.hue,
        saturation: colors.mauve80hsl.saturation,
        lightness: 100,
      },
      {
        hue: colors.mauve80hsl.hue,
        saturation: colors.mauve80hsl.saturation,
        lightness: colors.mauve80hsl.lightness,
      },
      {
        hue: colors.mauve80hsl.hue,
        saturation: colors.mauve80hsl.saturation,
        lightness: 85,
      },
      {
        hue: colors.mauve80hsl.hue,
        saturation: colors.mauve80hsl.saturation,
        lightness: 100,
      },
    ],
  },
};

const PixelGradient = ({ pathname }) => {
  const [pixels, setPixels] = useState([]);

  useEffect(() => {
    const getOptionsByLocation = () => {
      if (pathname === undefined || pathname === '/')
        return optionsByLocation.home;

      return optionsByLocation[pathname];
    };

    const current = getOptionsByLocation() || optionsByLocation.home;

    const speed = 0.2;

    const newPixels = [
      new Pixel(0, 0, {
        h: current.colors[0].hue,
        s: current.colors[0].saturation,
        l: current.colors[0].lightness,
        minLightness: current.minLightness,
        speed,
      }),
      new Pixel(1, 0, {
        h: current.colors[1].hue,
        s: current.colors[1].saturation,
        l: current.colors[1].lightness,
        minLightness: current.minLightness,
        speed,
      }),
      new Pixel(0, 1, {
        h: current.colors[2].hue,
        s: current.colors[2].saturation,
        l: current.colors[2].lightness,
        minLightness: current.minLightness,
        speed,
      }),
      new Pixel(1, 1, {
        h: current.colors[3].hue,
        s: current.colors[3].saturation,
        l: current.colors[3].lightness,
        minLightness: current.minLightness,
        speed,
      }),
    ];

    setPixels(newPixels);
  }, [pathname]);

  const draw = (ctx) => {
    pixels.forEach((pixel) => {
      pixel.update();
      pixel.render(ctx);
    });
  };

  return (
    <>
      <Canvas draw={draw} width='2' height='3' css={canvasStyle} />

      {/* <Noise /> */}
    </>
  );
};

PixelGradient.propTypes = {
  pathname: PropTypes.string,
};

PixelGradient.defaultProps = {
  pathname: undefined,
};

export default memo(PixelGradient);
