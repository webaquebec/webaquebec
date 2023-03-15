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
    minLightness: colors.salmonHsl.lightness,
    colors: [
      {
        hue: colors.wildBlueHsl.hue,
        saturation: colors.wildBlueHsl.saturation,
        lightness: 100,
      },
      {
        hue: colors.wildBlueHsl.hue,
        saturation: colors.wildBlueHsl.saturation,
        lightness: colors.wildBlueHsl.lightness,
      },
      {
        hue: colors.salmonHsl.hue,
        saturation: colors.salmonHsl.saturation,
        lightness: colors.salmonHsl.lightness,
      },
      {
        hue: colors.salmonHsl.hue,
        saturation: colors.salmonHsl.saturation,
        lightness: 100,
      },
    ],
  },
  programmation: {
    minLightness: colors.turquoise20hsl.lightness,
    colors: [
      {
        hue: colors.turquoise20hsl.hue,
        saturation: colors.turquoise20hsl.saturation,
        lightness: 100,
      },
      {
        hue: colors.turquoise20hsl.hue,
        saturation: colors.turquoise20hsl.saturation,
        lightness: 80,
      },
      {
        hue: colors.mauve30Hsl.hue,
        saturation: colors.mauve30Hsl.saturation,
        lightness: colors.mauve30Hsl.lightness,
      },
      {
        hue: colors.mauve30Hsl.hue,
        saturation: colors.mauve30Hsl.saturation,
        lightness: 100,
      },
    ],
  },
  blogue: {
    minLightness: colors.turquoise20hsl.lightness,
    colors: [
      {
        hue: colors.jaune30hsl.hue,
        saturation: colors.jaune30hsl.saturation,
        lightness: 100,
      },
      {
        hue: colors.jaune30hsl.hue,
        saturation: colors.jaune30hsl.saturation,
        lightness: 80,
      },
      {
        hue: colors.turquoise20hsl.hue,
        saturation: colors.turquoise20hsl.saturation,
        lightness: colors.turquoise20hsl.lightness,
      },
      {
        hue: colors.wildBlueHsl.hue,
        saturation: colors.wildBlueHsl.saturation,
        lightness: 100,
      },
    ],
  },
  faq: {
    minLightness: colors.mauve30Hsl.lightness,
    colors: [
      {
        hue: colors.mauve30Hsl.hue,
        saturation: colors.mauve30Hsl.saturation,
        lightness: 100,
      },
      {
        hue: colors.turquoise20hsl.hue,
        saturation: colors.turquoise20hsl.saturation,
        lightness: colors.turquoise20hsl.lightness,
      },
      {
        hue: colors.jaune30hsl.hue,
        saturation: colors.jaune30hsl.saturation,
        lightness: 90,
      },
      {
        hue: colors.jaune30hsl.hue,
        saturation: colors.jaune30hsl.saturation,
        lightness: 100,
      },
    ],
  },
  billetterie: {
    minLightness: colors.ciel20hsl.lightness,
    colors: [
      {
        hue: colors.ciel20hsl.hue,
        saturation: colors.ciel20hsl.saturation,
        lightness: 100,
      },
      {
        hue: colors.ciel20hsl.hue,
        saturation: colors.ciel20hsl.saturation,
        lightness: colors.ciel20hsl.lightness,
      },
      {
        hue: colors.salmonHsl.hue,
        saturation: colors.salmonHsl.saturation,
        lightness: 90,
      },
      {
        hue: colors.salmonHsl.hue,
        saturation: colors.salmonHsl.saturation,
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
    minLightness: colors.mauve30Hsl.lightness,
    colors: [
      {
        hue: colors.mauve30Hsl.hue,
        saturation: colors.mauve30Hsl.saturation,
        lightness: 100,
      },
      {
        hue: colors.rose20hsl.hue,
        saturation: colors.rose20hsl.saturation,
        lightness: colors.rose20hsl.lightness,
      },
      {
        hue: colors.turquoise20hsl.hue,
        saturation: colors.turquoise20hsl.saturation,
        lightness: 90,
      },
      {
        hue: colors.turquoise20hsl.hue,
        saturation: colors.turquoise20hsl.saturation,
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
