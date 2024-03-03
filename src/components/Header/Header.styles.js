// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../utils/breakpointsRange';

// styles
import breakpoints from '../../styles/breakpoints';
import colors from '../../styles/colors';

export const LogoWrapper = styled.div`
  z-index: 1051;

  grid-row: 1;
  grid-column: 2;
`;

export const Logo = styled.img``;

export const MenuButtonWrapper = styled.div`
  grid-row: 1;
  grid-column: 3;
  justify-self: flex-end;
`;

export const BurgerButton = styled.button`
  position: relative;

  padding: 0;

  background: none;
  border: 0;
  cursor: pointer;

  appearance: none;
`;

export const BurgerImg = styled.img`
  max-width: 100%;

  ${breakpointsRange(
    [{ prop: 'height', sizes: [24, 32], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const StyledHeader = styled.header`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [24, 32], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [24, 32], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const Container = styled.div`
  position: relative;
  z-index: 1052;

  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  background-color: ${colors.peach};
  border: 2px solid ${colors.blueberry};

  ${breakpointsRange(
    [
      { prop: 'border-radius', sizes: [12, 16], bases: [16, 20] },
      { prop: 'paddingTop', sizes: [16, 24], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [16, 24], bases: [16, 20] },
      { prop: 'paddingLeft', sizes: [24, 48], bases: [16, 20] },
      { prop: 'paddingRight', sizes: [24, 48], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;
