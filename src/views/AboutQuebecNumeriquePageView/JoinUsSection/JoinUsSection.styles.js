// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import { introStyle, magnifyStyle } from '../../../styles/global';

const Section = styled.div`
  ${breakpointsRange(
    [{ prop: 'paddingBottom', sizes: [164, 64], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const QuebecNumeriqueLogo = styled.img`
  max-width: 375px;
  object-fit: contain;

  ${breakpointsRange(
    [{ prop: 'marginRight', sizes: [16, 48], bases: [16, 20] }],
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
    [{ prop: 'marginBottom', sizes: [24, 30], bases: [18, 20], unit: '' }],
    breakpoints.spacings
  )};
`;

export { Section, QuebecNumeriqueLogo, Column, Title, Paragraph };
