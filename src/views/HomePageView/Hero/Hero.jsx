// vendors
import React from 'react';
import GatsbyImage from 'gatsby-image';

// utils
import { graphql, useStaticQuery } from 'gatsby';
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import { fontWeights } from '../../../styles/typography';
import breakpoints from '../../../styles/breakpoints';
import { billboardStyle, linkStyle } from '../../../styles/global';
import {
  StyledHero,
  HeroTitle,
  TextureWrapper,
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
import sticker2024 from '../../../images/stickers/2024.svg';

const Hero = () => {
  const data = useStaticQuery(
    graphql`
      query {
        plasticTexture: file(relativePath: { eq: "textures/plasticWrap.png" }) {
          childImageSharp {
            fixed(width: 600) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  return (
    <StyledHero>
      <Center maxWidth='var(--max-container-width)' gutters='12px' withText>
        <HeroTitle css={billboardStyle}>
          28
          <br />
          au 30
          <br />
          mai
          <img src={sticker2024} alt='2024' />
        </HeroTitle>

        <TextureWrapper>
          <GatsbyImage
            fixed={data.plasticTexture?.childImageSharp?.fixed}
            alt=''
            role='presentation'
          />
        </TextureWrapper>

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
};

export default Hero;
