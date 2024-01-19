// vendors
import React from 'react';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import { fontWeights } from '../../../styles/typography';
import breakpoints from '../../../styles/breakpoints';
import {
  billboardStyle,
  billboardAltStyle,
  linkStyle,
} from '../../../styles/global';
import {
  StyledHero,
  HeroIntro,
  // linkStyleHover,
  Address,
  MapPinIcon,
  // CTAWrapper,
} from './Hero.styles';

// components
import Center from '../../../components/LayoutSections/Center';
// import Button from '../../../components/Button';

// images
import vectorMapPin from '../../../images/vectorMapPin.svg';

const Hero = () => (
  <StyledHero>
    <Center maxWidth='var(--max-container-width)' gutters='12px' withText>
      <h2 css={billboardStyle}>
        28 au 30&nbsp;&nbsp;
        <br />
        &nbsp;&nbsp;mai&nbsp;
        <span css={billboardAltStyle}>2024</span>
      </h2>

      <Center maxWidth='850px' gutters='0' withText>
        <HeroIntro>
          l’événement numérique local de calibre international
        </HeroIntro>
      </Center>

      <Address>
        <a
          href='https://www.google.com/maps/place/84+Rue+Dalhousie,+Québec,+QC+G1K+8M5/@46.8165604,-71.2004492,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb895e7bbc6a0fb:0x1ca117d2a8f16a27!8m2!3d46.8165604!4d-71.2004492'
          target='_blank'
          rel='noopener noreferrer'
        >
          <MapPinIcon src={vectorMapPin} alt='Au Terminal — Port de Québec' />
        </a>

        <p
          css={`
            ${breakpointsRange(
              [{ prop: 'fontSize', sizes: [17, 20], bases: [16, 20] }],
              breakpoints.spacings
            )};
          `}
        >
          <a
            href='https://www.google.com/maps/place/84+Rue+Dalhousie,+Québec,+QC+G1K+8M5/@46.8165604,-71.2004492,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb895e7bbc6a0fb:0x1ca117d2a8f16a27!8m2!3d46.8165604!4d-71.2004492'
            target='_blank'
            rel='noopener noreferrer'
            css={`
              ${linkStyle};

              font-weight: ${fontWeights.semiBold};
            `}
          >
            Au Terminal — Port de Québec
          </a>
        </p>
      </Address>

      {/* <CTAWrapper>
        <Button to='/billetterie' tag='link' animated>
          Réserver ma place
        </Button>
      </CTAWrapper> */}
    </Center>
  </StyledHero>
);

export default Hero;
