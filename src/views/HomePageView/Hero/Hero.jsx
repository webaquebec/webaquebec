// vendors
import React from 'react';
import Marquee from 'react-fast-marquee';
import { hideVisually } from 'polished';

// styles
import zIndexes from '../../../styles/zIndexes';
import {
  StyledHero,
  MarqueeWrapper,
  Dates,
  StarSeparator,
  MapPin,
  AddressFirstLine,
} from './Hero.styles';

// components
import Center from '../../../components/LayoutSections/Center';
import Sticker from '../../../components/Sticker';

// images
import vectorStarSeparator from '../../../images/vectorStarSeparator.svg';
import vectorMapPin from '../../../images/vectorMapPin.svg';
import vectorStickerFlameMonitor from '../../../images/stickers/vectorStickerFlameMonitor.svg';
import vectorStickerRainbowDoor from '../../../images/stickers/vectorStickerRainbowDoor.svg';

const Hero = () => {
  const stickers = [
    {
      src: vectorStickerRainbowDoor,
      size: {
        minWidth: 140,
        maxWidth: 319,
      },
      position: {
        top: '-18%',
        left: '22px',
      },
      transform: {
        rotate: {
          initial: '12deg',
          final: '0deg',
        },
      },
      zIndex: '-1',
    },
    {
      src: vectorStickerFlameMonitor,
      size: {
        minWidth: 102,
        maxWidth: 254,
      },
      position: {
        bottom: '-20%',
        right: '5px',
      },
      transform: {
        rotate: {
          initial: '-11deg',
          final: '0deg',
        },
      },
      zIndex: zIndexes.fixed,
    },
  ];

  return (
    <StyledHero>
      <h2 css={hideVisually}>15 au 17 juin 2021</h2>

      <MarqueeWrapper>
        <Marquee gradient={false} speed={75}>
          <StarSeparator src={vectorStarSeparator} role='presentation' alt='' />
          <Dates>15 au 17 juin 2021</Dates>
          <StarSeparator src={vectorStarSeparator} role='presentation' alt='' />
          <Dates>15 au 17 juin 2021</Dates>
        </Marquee>

        <Center
          maxWidth='var(--max-container-width)'
          gutters='50px'
          withText
          css={`
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          `}
        >
          {stickers.map((sticker, index) => (
            <Sticker key={sticker.src} sticker={sticker} index={index} />
          ))}
        </Center>
      </MarqueeWrapper>

      <Center maxWidth='var(--max-container-width)' gutters='50px' withText>
        <MapPin src={vectorMapPin} role='presentation' alt='' />
        <AddressFirstLine>Dans le confort de chez soi</AddressFirstLine>
      </Center>
    </StyledHero>
  );
};

export default Hero;
