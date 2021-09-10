// vendors
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Components
import Canvas from '../Canvas';
import Pixel from './Pixel';

// styles
import colors from '../../styles/colors';
import { canvasStyle, Noise } from './PixelGradient.styles';

const optionsByLocation = {
  home: {
    minHue: 55,
    maxHue: 317,
    colors: [
      {
        hue: colors.rose80hsl.hue,
        saturation: colors.rose80hsl.saturation,
        lightness: colors.rose80hsl.lightness,
      },
      {
        hue: colors.jaune80hsl.hue,
        saturation: colors.jaune80hsl.saturation,
        lightness: colors.jaune80hsl.lightness,
      },
      {
        hue: colors.turquoise80hsl.hue,
        saturation: colors.turquoise80hsl.saturation,
        lightness: colors.turquoise80hsl.lightness,
      },
      {
        hue: colors.jaune80hsl.hue,
        saturation: colors.jaune80hsl.saturation,
        lightness: colors.jaune80hsl.lightness,
      },
    ],
  },
  programmation: {
    minHue: 55,
    maxHue: 266,
    colors: [
      {
        hue: colors.ciel80hsl.hue,
        saturation: colors.ciel80hsl.saturation,
        lightness: colors.ciel80hsl.lightness,
      },
      {
        hue: colors.jaune80hsl.hue,
        saturation: colors.jaune80hsl.saturation,
        lightness: colors.jaune80hsl.lightness,
      },
      {
        hue: colors.mauve80hsl.hue,
        saturation: colors.mauve80hsl.saturation,
        lightness: colors.mauve80hsl.lightness,
      },
      {
        hue: colors.jaune80hsl.hue,
        saturation: colors.jaune80hsl.saturation,
        lightness: colors.jaune80hsl.lightness,
      },
    ],
  },
  faq: {
    minHue: 217,
    maxHue: 266,
    colors: [
      {
        hue: colors.ciel80hsl.hue,
        saturation: colors.ciel80hsl.saturation,
        lightness: colors.ciel80hsl.lightness,
      },
      {
        hue: colors.mauve80hsl.hue,
        saturation: colors.mauve80hsl.saturation,
        lightness: colors.mauve80hsl.lightness,
      },
      {
        hue: colors.turquoise80hsl.hue,
        saturation: colors.turquoise80hsl.saturation,
        lightness: colors.turquoise80hsl.lightness,
      },
      {
        hue: colors.mauve80hsl.hue,
        saturation: colors.mauve80hsl.saturation,
        lightness: colors.mauve80hsl.lightness,
      },
    ],
  },
};

const PixelGradient = ({ location }) => {
  const [pixels, setPixels] = useState([]);

  useEffect(() => {
    const getOptionsByLocation = (pathname) => {
      if (pathname === undefined || pathname === '/')
        return optionsByLocation.home;

      const arr = pathname.split('/').filter((current) => current);
      const first = arr[0];

      return optionsByLocation[first];
    };

    const current =
      getOptionsByLocation(location.pathname) || optionsByLocation.home;

    const speed = 1;

    const newPixels = [
      new Pixel(0, 0, {
        h: current.colors[0].hue,
        s: current.colors[0].saturation,
        l: current.colors[0].lightness,
        minHue: current.minHue,
        maxHue: current.maxHue,
        speed,
      }),
      new Pixel(1, 0, {
        h: current.colors[1].hue,
        s: current.colors[1].saturation,
        l: current.colors[1].lightness,
        minHue: current.minHue,
        maxHue: current.maxHue,
        speed,
      }),
      new Pixel(0, 1, {
        h: current.colors[2].hue,
        s: current.colors[2].saturation,
        l: current.colors[2].lightness,
        minHue: current.minHue,
        maxHue: current.maxHue,
        speed,
      }),
      new Pixel(1, 1, {
        h: current.colors[3].hue,
        s: current.colors[3].saturation,
        l: current.colors[3].lightness,
        minHue: current.minHue,
        maxHue: current.maxHue,
        speed,
      }),
    ];

    setPixels(newPixels);
  }, [location]);

  const draw = (ctx) => {
    pixels.forEach((pixel) => {
      pixel.update();
      pixel.render(ctx);
    });
  };

  return (
    <>
      <Canvas draw={draw} width='2' height='2' css={canvasStyle} />

      <Noise />
    </>
  );
};

PixelGradient.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

PixelGradient.defaultProps = {
  location: {
    pathname: undefined,
  },
};

export default PixelGradient;