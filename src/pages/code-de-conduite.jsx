// vendors
import React from 'react';
import styled, { css } from 'styled-components';

// components
import Stack from '../components/LayoutSections/Stack';
import SectionContainer from '../components/SectionContainer';
import SEO from '../components/SEO';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// styles
import breakpoints from '../styles/breakpoints';
import Center from '../components/LayoutSections/Center';
import { h1AltStyle } from '../styles/global';

const spaceStyle = css`
  ${breakpointsRange(
    [{ prop: '--space', sizes: [40, 80], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const Container = styled(SectionContainer)`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [98, 105], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [148, 114], bases: [16, 20] },
      { prop: 'marginTop', sizes: [68, 88], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [48, 68], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  ::before,
  ::after {
    height: 30vh;
  }

  ::before {
    top: -30vh;
  }

  ::after {
    bottom: -30vh;
  }
`;

const CodeConductPage = () => (
  <>
    <SEO title='Code de conduite' description='' />

    <Center
      maxWidth='625px'
      gutters='var(--container-gutter)'
      withText
      intrinsic
    >
      <h1 css={h1AltStyle}>Code de conduite</h1>
    </Center>

    <Container forwardedAs='div' faded padded>
      <Stack space='var(--space)' css={spaceStyle}>
        {/* TODO: */}
        {/* <Center
          maxWidth='var(--max-container-width)'
          gutters='var(--container-gutter)'
        >
        </Center> */}
      </Stack>
    </Container>
  </>
);

export default CodeConductPage;
