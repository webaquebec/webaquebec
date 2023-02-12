// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import { introStyle, magnifyStyle } from '../../../styles/global';
import { greaterThan } from '../../../utils/mediaQuery';
import colors from '../../../styles/colors';

const Container = styled.div`
  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [100, 160], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const Title = styled.h2`
  ${magnifyStyle}
  margin-top: 0;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [24, 48], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ${greaterThan(720)} {
    width: max-content;
    margin-right: auto;
    margin-left: auto;
  }
`;

const Paragraph = styled.p`
  ${introStyle}
  margin-top: 0;

  color: ${colors.gris100};

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [24, 30], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export { Container, Title, Paragraph };
