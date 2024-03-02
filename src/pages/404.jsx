import * as React from 'react';
import styled from 'styled-components';

// components
import Button from '../components/Button';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// styles
import colors from '../styles/colors';
import breakpoints from '../styles/breakpoints';
import { fontWeights } from '../styles/typography';
import { pixelated35Style } from '../styles/global';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32px;

  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [56, 94], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [156, 194], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  text-align: center;
`;

const Heading = styled.h1`
  /* max-width: 540; */
  margin-top: 0;
  margin-bottom: 0;

  color: ${colors.black};

  line-height: 1;
  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [128, 320], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ${pixelated35Style};

  backdrop-filter: opacity(0);
`;

const Info = styled.p`
  color: ${colors.blueberry90};
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [18, 32], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [24, 32], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const CTAButton = styled(Button)``;

// markup
const NotFoundPage = () => (
  <Container>
    <div
      css={`
        mix-blend-mode: overlay;
      `}
    >
      <Heading>404</Heading>
    </div>

    <Info>
      Oups!{' '}
      <span role='img' aria-label='Pensive emoji'>
        😬
      </span>{' '}
      La page que vous recherchez semble introuvable.
    </Info>

    <CTAButton to='/' tag='link'>
      Retourner à l&apos;accueil
    </CTAButton>
  </Container>
);

export default NotFoundPage;
