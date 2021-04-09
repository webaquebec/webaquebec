// vendors
import React from 'react';
import Marquee from 'react-fast-marquee';

// styles
import { easing } from '../../../styles/animation';
import zIndexes from '../../../styles/zIndexes';
import {
  StyledHeroSection,
  MarqueeWrapper,
  Dates,
  StarSeparator,
  MapPin,
  AddressFirstLine,
  AddressSecondLine,
  StickerImg,
} from './HeroSection.styles';

// components
import Center from '../../../components/LayoutSections/Center';
import LazyAnimation from '../../../components/LazyAnimation';

// images
import vectorStarSeparator from '../../../images/vectorStarSeparator.svg';
import vectorMapPin from '../../../images/vectorMapPin.svg';
import vectorStickerFlameMonitor from '../../../images/stickers/vectorStickerFlameMonitor.svg';
import vectorStickerRainbowDoor from '../../../images/stickers/vectorStickerRainbowDoor.svg';

const HeroSection = () => {
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
    <StyledHeroSection>
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
            <LazyAnimation
              key={sticker.src}
              transition={{
                threshold: 1,
                duration: '400ms',
                delay: `${(index + 1) * 250}ms`,
                easing: easing.outCustom,
                scale: { initial: '0', final: '1' },
                rotate: {
                  initial: sticker.transform.rotate.initial,
                  final: sticker.transform.rotate.final,
                },
              }}
              css={`
                position: absolute;
                top: ${sticker.position.top || ''};
                right: ${sticker.position.right || ''};
                bottom: ${sticker.position.bottom || ''};
                left: ${sticker.position.left || ''};
                z-index: ${sticker.zIndex || ''};
              `}
            >
              <StickerImg
                src={sticker.src}
                role='presentation'
                alt=''
                $minWidth={sticker.size.minWidth}
                $maxWidth={sticker.size.maxWidth}
              />
            </LazyAnimation>
          ))}
        </Center>
      </MarqueeWrapper>

      <Center maxWidth='var(--max-container-width)' gutters='50px' withText>
        <MapPin src={vectorMapPin} role='presentation' alt='' />
        <AddressFirstLine>au coeur de la Ville de Québec</AddressFirstLine>
        <AddressSecondLine>et/ou en ligne (à suivre...)</AddressSecondLine>
      </Center>
    </StyledHeroSection>
  );
};

export default HeroSection;
