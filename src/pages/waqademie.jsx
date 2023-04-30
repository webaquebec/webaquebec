// vendors
import React from 'react';
import styled from 'styled-components';

// components
import SEO from '../components/SEO';
import SectionContainer from '../components/SectionContainer';

// views
import Prices from '../views/WAQademyView/Prices';
import Questions from '../views/WAQademyView/Questions';
import Title from '../views/WAQademyView/Title';
import CallToAction from '../views/WAQademyView/CallToAction/CallToAction';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// styles
import breakpoints from '../styles/breakpoints';
import Stack from '../components/LayoutSections/Stack';

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
    top: -20vh;

    height: 20vh;
  }

  ::after {
    bottom: -20vh;

    height: 20vh;
  }
`;

const WAQademyPage = () => (
  <>
    <SEO
      title='WAQadémie'
      description='Des formations pour les créateur·trices du Web, guidées par les principes fondateurs du WAQ.'
    />

    <Title />

    <Container faded>
      <Stack space='94px'>
        <Questions />

        <Prices />
      </Stack>

      <CallToAction />
    </Container>
  </>
);

export default WAQademyPage;
