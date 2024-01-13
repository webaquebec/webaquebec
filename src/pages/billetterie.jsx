// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import Center from '../components/LayoutSections/Center';
import SectionContainer from '../components/SectionContainer';
import SEO from '../components/SEO';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// views
import Prices from '../views/TicketsView/Prices';
import CallToAction from '../views/TicketsView/CallToAction';
import TermsAndConditions from '../views/TicketsView/TermsAndConditions/TermsAndConditions';

// styles
import breakpoints from '../styles/breakpoints';
import { titleStyle, introStyle } from '../styles/global';
import Stack from '../components/LayoutSections/Stack';

const TicketsTitle = styled.h1`
  margin-bottom: 0;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [60, 150], bases: [16, 20] }],
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

const Container = styled(SectionContainer)`
  padding-bottom: 0;

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [98, 105] },
      { prop: 'marginBottom', sizes: [202, 242] },
    ],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};

  ::before {
    top: -60vh;

    height: 60vh;
  }

  ::after {
    bottom: -40vh;

    height: 40vh;
  }
`;

const TicketsPage = () => (
  <>
    <SEO
      title='Billetterie'
      description='Viens vivre le WAQ du 28 au 30 mai 2024. Réserve ton billet dès aujourd’hui pour participer au plus grand événement numérique francophone en Amérique du Nord.'
    />

    <Center
      maxWidth='625px'
      gutters='var(--container-gutter)'
      withText
      intrinsic
    >
      <TicketsTitle css={titleStyle}>
        bille<span>tterie</span>
      </TicketsTitle>

      <TicketsIntro css={introStyle}>
        <Stack>
          <p>
            Chaque année, des centaines de passionné.es de numérique participent
            au Web à Québec (WAQ). Que ce soit pour réseauter, découvrir les
            nouvelles tendances ou simplement vivre l&apos;ambiance unique du
            WAQ, toutes les raisons sont bonnes de te joindre à nous!
          </p>
        </Stack>
      </TicketsIntro>
    </Center>

    <Prices />

    <Container forwardedAs='div' faded>
      <CallToAction />
      <TermsAndConditions />
    </Container>
  </>
);

TicketsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default TicketsPage;
