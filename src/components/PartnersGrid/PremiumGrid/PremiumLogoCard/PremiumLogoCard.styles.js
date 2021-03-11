// vendors
import styled from 'styled-components';
import colors from '../../../../styles/colors';

// utils
import { lessThan } from '../../../../utils/mediaQuery';

// components
import Cover from '../../../LayoutSections/Cover';

// styles
import breakpoints from '../../../../styles/breakpoints';

export const selfBreakpoints = [breakpoints[0], breakpoints[2], breakpoints[6]];

export const Wrapper = styled(Cover)`
  padding-right: 49px;
  padding-left: 49px;

  ${lessThan(selfBreakpoints[1])} {
    min-height: ${130 - 2 * 2}px;

    padding-right: 25px;
    padding-left: 25px;
  }
`;

export const Content = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 100px;

  filter: brightness(0) invert(1);

  ${lessThan(selfBreakpoints[1])} {
    max-height: 70px;
  }
`;

export const Link = styled.a`
  flex-grow: 1;

  color: ${colors.bleu};

  background-color: ${({ $accentBgColor }) => $accentBgColor};
  border: 4px solid;
  border-radius: inherit;

  :focus,
  :hover {
    background-color: ${colors.white};
    outline: 0;

    img {
      filter: none;
    }
  }

  ${lessThan(selfBreakpoints[1])} {
    border-width: 2px;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 100;

  display: flex;

  border-radius: 16px;

  ${lessThan(selfBreakpoints[1])} {
    max-height: 130px;
  }
`;
