// vendors
import React from 'react';
import Marquee from 'react-fast-marquee';
import { hideVisually } from 'polished';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';
import breakpoints from '../../../styles/breakpoints';
import zIndexes from '../../../styles/zIndexes';
import {
  StyledHero,
  MarqueeWrapper,
  Dates,
  StarSeparator,
  // MapPin,
  // AddressFirstLine,
  // CallToAction,
  linkStyleHover,
  MapPinIcon,
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
      <h2 css={hideVisually}>24 au 26 mai 2022</h2>

      <MarqueeWrapper>
        <Marquee gradient={false} speed={75}>
          <StarSeparator src={vectorStarSeparator} role='presentation' alt='' />
          <Dates>24 au 26 mai 2022</Dates>
          <StarSeparator src={vectorStarSeparator} role='presentation' alt='' />
          <Dates>24 au 26 mai 2022</Dates>
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
        <a
          href='https://www.google.com/maps/place/84+Rue+Dalhousie,+Québec,+QC+G1K+8M5/@46.8165604,-71.2004492,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb895e7bbc6a0fb:0x1ca117d2a8f16a27!8m2!3d46.8165604!4d-71.2004492'
          target='_blank'
          rel='noopener noreferrer'
        >
          <MapPinIcon src={vectorMapPin} alt='Au Terminal — Port de Québec' />
        </a>

        <p
          css={`
            color: ${colors.bleu};
            font-weight: ${fontWeights.semiBold};

            ${breakpointsRange(
              [{ prop: 'fontSize', sizes: [18, 24], bases: [16, 20] }],
              breakpoints.spacings
            )};
          `}
        >
          <a
            href='https://www.google.com/maps/place/84+Rue+Dalhousie,+Québec,+QC+G1K+8M5/@46.8165604,-71.2004492,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb895e7bbc6a0fb:0x1ca117d2a8f16a27!8m2!3d46.8165604!4d-71.2004492'
            target='_blank'
            rel='noopener noreferrer'
            css={linkStyleHover}
          >
            Au Terminal — Port de Québec
          </a>
          <br />
          et/ou en virtuel
        </p>
      </Center>

      {/* <Center maxWidth='var(--max-container-width)' gutters='50px' withText>
        <MapPin src={vectorMapPin} role='presentation' alt='' />
        <AddressFirstLine>Dans le confort de chez soi</AddressFirstLine>
        <CallToAction
          to='https://waq21.app.swapcard.com/'
          tag='href'
          rel='noopener noreferrer'
          target='_blank'
        >
          accéder à l&apos;événement
        </CallToAction>
      </Center> */}
    </StyledHero>
  );
};

export default Hero;
