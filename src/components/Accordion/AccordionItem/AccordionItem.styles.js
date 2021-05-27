// vendors
import styled, { css } from 'styled-components';
import { rem } from 'polished';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// images
import IconChevron from '../../../images/IconChevron';

// components
import Box from '../../LayoutSections/Box';

// styles
import { speed } from '../../../styles/animation';
import breakpoints from '../../../styles/breakpoints';
import { fontWeights } from '../../../styles/typography';
import colors from '../../../styles/colors';

const borderStyle = css`
  border: 2px solid;
`;

export const Container = styled(Box)`
  position: relative;
  z-index: 1;

  max-height: ${({ $expanded, $maxHeight }) =>
    $expanded ? `999px` : `${$maxHeight}px`};

  overflow: hidden;

  background-color: ${colors.white};
  border-radius: 16px;

  will-change: max-height;

  ::before {
    position: absolute;
    z-index: -1;

    width: 100%;
    height: 100%;

    border-radius: 16px;

    content: '';

    ${({ $expanded }) => $expanded && borderStyle};
  }

  :focus-within ::before,
  :hover ::before {
    ${borderStyle};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: max-height ${speed.default} ease;
  }
`;

export const Heading = styled.div`
  position: relative;

  margin: 0;

  font-weight: ${fontWeights.bold};

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

  ::after {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 2px;

    content: '';
  }

  border-bottom: ${({ $expanded }) => ($expanded ? `2px solid` : `0`)};
`;

export const TitleWrapper = styled.span`
  text-align: left;
`;

export const Button = styled.button`
  position: relative;
  z-index: 1;

  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [16, 28] },
      { prop: 'paddingRight', sizes: [22, 32] },
      { prop: 'paddingBottom', sizes: [16, 28] },
      { prop: 'paddingLeft', sizes: [22, 32] },
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

export const Panel = styled.section`
  position: relative;

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [16, 28] },
      { prop: 'paddingRight', sizes: [22, 32] },
      { prop: 'paddingBottom', sizes: [16, 28] },
      { prop: 'paddingLeft', sizes: [22, 32] },
    ],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};

  overflow: hidden;

  transform: translateY(${({ $expanded }) => ($expanded ? '0px' : '-20px')});

  opacity: ${({ $expanded }) => ($expanded ? '1' : '0')};

  will-change: transform, opacity;

  @media (prefers-reduced-motion: no-preference) {
    transition-timing-function: ease;
    transition-duration: ${speed.default};
    transition-property: transform, opacity;
  }
`;

export const PanelContent = styled.div`
  color: ${colors.gris90};
  /* font-weight: ${fontWeights.regular}; */
  /* font-size: ${rem(16, 20)}; */

  > * {
    margin: 0;
  }
`;

export const Toggle = styled(IconChevron)`
  width: 100%;
  max-width: 24px;
  margin-left: 20px;

  transform: ${({ $expanded }) => ($expanded ? `rotate(180deg)` : `none`)};

  will-change: transform;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${speed.fast} ease;
  }
`;
