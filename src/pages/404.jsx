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
import {
  pixelatedStyle,
  pixelated20Style,
  pixelated50Style,
} from '../styles/global';

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
  display: flex;
  align-items: center;

  /* max-width: 540; */
  margin-top: 0;
  margin-bottom: 0;

  color: ${colors.white};
  font-weight: 400;

  line-height: 1;
  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [128, 320], bases: [16, 20] }],
    breakpoints.spacings
  )};

  backdrop-filter: opacity(0);
`;

const Info = styled.p`
  max-width: 24rem;

  color: ${colors.bleu90};
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [18, 32], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [54, 72], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const CTAButton = styled(Button)``;

const FirstFour = styled.span`
  font-size: 230px;
  ${pixelated20Style}
`;

const FirstZero = styled.span`
  font-size: 340px;
  ${pixelatedStyle}
`;

const SecondFour = styled.span`
  font-size: 230px;
  ${pixelated50Style}
`;

// markup
const NotFoundPage = () => (
  <Container>
    <div>
      <Heading>
        <FirstFour>4</FirstFour>
        <FirstZero>0</FirstZero>
        <SecondFour>4</SecondFour>
      </Heading>
    </div>

    <Info>
      Oups!
      <br />
      La page que vous recherchez semble introuvable.
    </Info>

    <CTAButton to='/' tag='link'>
      Retourner à l&apos;accueil
    </CTAButton>
  </Container>
);

export default NotFoundPage;
