// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../utils/breakpointsRange';

// images
import IconChevron from '../../images/IconChevron';

// components
import Box from '../LayoutSections/Box';
import Button from '../Button';

// styles
import { speed } from '../../styles/animation';
import breakpoints from '../../styles/breakpoints';
import { fontWeights } from '../../styles/typography';
import colors from '../../styles/colors';

export const Container = styled(Box)`
  position: relative;
  z-index: 1;

  background-color: transparent;
  border: 0;
`;

export const expandedStyle = css`
  border-radius: 16px 16px 0 0;
`;

export const DropdownButtonWrapper = styled.div`
  position: relative;
  z-index: 1;

  margin: 0;

  font-weight: ${fontWeights.bold};

  background-color: ${colors.white};

  border: 3px solid ${colors.bleu80};
  border-radius: 16px;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 18], bases: [16, 20] },
      {
        prop: 'lineHeight',
        sizes: [24, 24],
        bases: [16, 18],
        unit: '',
      },
    ],
    breakpoints.spacings
  )};

  /* Apply expanded style when expanded props defined */
  ${({ $expanded }) => $expanded && expandedStyle}
`;

export const TitleWrapper = styled.span`
  text-align: left;
`;

export const DropdownButton = styled.button`
  position: relative;
  z-index: 1;

  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [24, 24] },
      { prop: 'paddingBottom', sizes: [24, 24] },
      { prop: 'paddingLeft', sizes: [20, 20] },
      { prop: 'paddingRight', sizes: [20, 20] },
    ],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};

  border: 0;

  outline: 0;
  cursor: pointer;

  appearance: none;

  :focus ${TitleWrapper} {
    outline: 1px dotted;
  }
`;

export const DropdownMenu = styled.section`
  position: absolute;
  top: 100%;
  left: 0;

  z-index: -1;

  width: 100%;
  overflow: hidden;

  background-color: ${colors.white};
  border: 3px solid ${colors.bleu80};
  border-top: 0;
  border-radius: 0 0 16px 16px;

  transform: translateY(${({ $expanded }) => ($expanded ? '0px' : '-40px')});

  opacity: ${({ $expanded }) => ($expanded ? '1' : '0')};

  will-change: transform, opacity;

  @media (prefers-reduced-motion: no-preference) {
    transition-timing-function: ease;
    transition-duration: ${speed.default};
    transition-property: transform, opacity;
  }
`;

export const LinkButton = styled(Button)`
  width: 100%;

  border: 0;
  border-radius: 0;

  ${breakpointsRange(
    [{ prop: 'padding', sizes: [24, 24] }],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};
`;

export const Toggle = styled(IconChevron)`
  width: 100%;
  max-width: 20px;
  margin-left: 14px;

  color: ${colors.bleu80};

  transform: ${({ $expanded }) => ($expanded ? `rotate(180deg)` : `none`)};

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${speed.fast} ease;
  }
`;