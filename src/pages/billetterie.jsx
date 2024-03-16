// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

// components
import { graphql, useStaticQuery } from 'gatsby';
import Center from '../components/LayoutSections/Center';
import SEO from '../components/SEO';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// views
import Prices from '../views/TicketsView/Prices';
// import CallToAction from '../views/TicketsView/CallToAction';
import TermsAndConditions from '../views/TicketsView/TermsAndConditions/TermsAndConditions';

// styles
import breakpoints from '../styles/breakpoints';
import { h1AltStyle, introStyle } from '../styles/global';
import Stack from '../components/LayoutSections/Stack';

const TicketsTitle = styled.h1`
  margin-bottom: 0;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [60, 110], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const TextureWrapper = styled.div`
  position: absolute;
  left: 0;
  z-index: -1;

  max-width: 100%;
  max-height: 100%;
  overflow: hidden;

  ${breakpointsRange(
    [{ prop: 'top', sizes: [0, 150], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const TicketsIntro = styled.div`
  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [16, 16] },
      { prop: 'marginBottom', sizes: [50, 80] },
    ],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};
`;

const TicketsPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        bubbleTexture: file(relativePath: { eq: "textures/bubbleWrap.png" }) {
          childImageSharp {
            fixed(width: 800) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  return (
    <>
      <SEO
        title='Billetterie'
        description='Viens vivre le WAQ du 28 au 30 mai 2024. Réserve ton billet dès aujourd’hui pour participer au plus grand événement numérique francophone en Amérique du Nord.'
      />

      <Center
        maxWidth='800px'
        gutters='var(--container-gutter)'
        withText
        intrinsic
      >
        <TicketsTitle css={h1AltStyle}>billetterie</TicketsTitle>

        <TextureWrapper>
          <GatsbyImage
            fixed={data.bubbleTexture?.childImageSharp?.fixed}
            alt=''
            role='presentation'
          />
        </TextureWrapper>

        <TicketsIntro css={introStyle}>
          <Stack>
            <p>
              Chaque année, des centaines de passionné.es de numérique
              participent au Web à Québec (WAQ). Que ce soit pour réseauter,
              découvrir les nouvelles tendances ou simplement vivre
              l&apos;ambiance unique du WAQ, toutes les raisons sont bonnes de
              te joindre à nous!
            </p>
          </Stack>
        </TicketsIntro>
      </Center>

      <Prices />

      {/* <CallToAction /> */}
      <TermsAndConditions />
    </>
  );
};

TicketsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default TicketsPage;
