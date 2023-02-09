// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';
import { greaterThan } from '../../../utils/mediaQuery';

// styles
import breakpoints from '../../../styles/breakpoints';
import { introStyle, magnifyStyle } from '../../../styles/global';

const Section = styled.div`
  ${breakpointsRange(
    [{ prop: 'paddingBottom', sizes: [94, 64], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const QuebecNumeriqueLogo = styled.img`
  max-width: 375px;
  margin: 0 auto 50px;
  object-fit: contain;

  ${greaterThan(797)} {
    margin-right: 48px;
  }

  ${breakpointsRange(
    [{ prop: 'maxWidth', sizes: [275, 375], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const Column = styled.div`
  ${breakpointsRange(
    [{ prop: 'marginLeft', sizes: [16, 48], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const Title = styled.h2`
  ${magnifyStyle}
  margin-top: 0;
  margin-bottom: 24px;
`;

const Paragraph = styled.p`
  ${introStyle}
  margin-top: 0;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [24, 30], bases: [18, 20] }],
    breakpoints.spacings
  )};
`;

export { Section, QuebecNumeriqueLogo, Column, Title, Paragraph };
