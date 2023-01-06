// vendors
import React from 'react';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';
import breakpoints from '../../../styles/breakpoints';
import { billboardStyle, billboardAltStyle } from '../../../styles/global';
import {
  StyledHero,
  HeroIntro,
  linkStyleHover,
  MapPinIcon,
} from './Hero.styles';

// components
import Center from '../../../components/LayoutSections/Center';

// images
import vectorMapPin from '../../../images/vectorMapPin.svg';

const Hero = () => (
  <StyledHero>
    <Center maxWidth='var(--max-container-width)' gutters='12px' withText>
      <h2 css={billboardStyle}>
        23 au 25&nbsp;&nbsp;
        <br />
        &nbsp;&nbsp;mai&nbsp;
        <span css={billboardAltStyle}>2023</span>
      </h2>

      <Center maxWidth='850px' gutters='0' withText>
        <HeroIntro>
          le plus grand événement numérique francophone en Amérique du Nord
        </HeroIntro>
      </Center>

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
        {/* <br />
        et/ou en virtuel */}
      </p>
    </Center>
  </StyledHero>
);

export default Hero;
