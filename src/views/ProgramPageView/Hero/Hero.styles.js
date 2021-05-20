// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import colors from '../../../styles/colors';
import breakpoints from '../../../styles/breakpoints';
// import { fontFamilies, fontWeights } from '../../../styles/typography';

export const DateList = styled.ul`
  position: relative;
  z-index: 1;

  display: flex;
  justify-content: space-between;

  margin: 0;
  padding: 0;

  overflow-x: auto;

  list-style: none;

  scroll-snap-type: x mandatory;
`;

export const DateListItem = styled.li`
  scroll-snap-align: center;

  text-align: center;

  @media screen and (max-width: 40em) {
    flex: 0 0 calc(45% - 32px);
  }

  @media screen and (max-width: 30em) {
    flex: 0 0 calc(80% - 32px);
  }
`;

export const dateTabStyle = css`
  height: 100%;
  min-height: 70px;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [18, 18], bases: [16, 20] }],
    breakpoints.spacings
  )};

  background-color: ${colors.white};
  border-radius: 16px;

  > * {
    flex-grow: 1;
  }

  @media screen and (max-width: 40em) {
    width: calc(100% - 32px);
  }
`;

/* &.active,
  :focus,
  :hover:not(:disabled) {
    color: ${colors.white};

    font-weight: ${fontWeights.bold};
    font-family: ${fontFamilies.redaction35};

    background-color: ${colors.bleu80};
    border-color: ${colors.bleu80};
  } */
