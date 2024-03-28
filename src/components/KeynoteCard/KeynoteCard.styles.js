// vendors
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

// utils
import { greaterThan } from '../../utils/mediaQuery';

// styles
import colors from '../../styles/colors';
import { speed } from '../../styles/animation';
import breakpoints from '../../styles/breakpoints';
import breakpointsRange from '../../utils/breakpointsRange';
import { fontWeights } from '../../styles/typography';

export const Wrapper = styled(Link)`
  overflow: hidden;

  color: ${colors.blueberry};

  text-align: center;
  text-decoration: none;

  background-color: ${colors.peach};

  border: 3px solid ${colors.blueberry};
  border-radius: 16px;

  transition: transform ${speed.default};

  will-change: transform;

  ${breakpointsRange(
    [
      { prop: 'marginBottom', sizes: [50, 80], bases: [16, 20] },
      { prop: 'marginLeft', sizes: [0, 24], bases: [16, 20] },
      { prop: 'marginRight', sizes: [0, 24], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  :hover,
  :focus {
    color: ${colors.white};

    background-color: ${colors.blueberry};
  }

  ${greaterThan(1248)} {
    :not(:hover, :focus) {
      transform: rotate(0) !important;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const bigStyle = css`
  ${breakpointsRange(
    [
      { prop: 'width', sizes: [325, 425], bases: [16, 20] },
      { prop: 'height', sizes: [325, 425], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const SpeakerPicture = styled(Img)`
  position: relative;

  width: 100%;

  ${breakpointsRange(
    [
      { prop: 'minWidth', sizes: [216, 320], bases: [16, 20] },
      { prop: 'height', sizes: [216, 320], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  ::after {
    position: absolute;
    bottom: 0;

    display: block;
    width: 100%;
    height: 3px;

    background-color: ${colors.blueberry};

    content: '';
  }

  /* Apply big style when big props defined */
  ${({ $big }) => $big && bigStyle}
`;

export const TextWrapper = styled.div`
  ${breakpointsRange(
    [{ prop: 'padding', sizes: [16, 24], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const SpeakerName = styled.p`
  margin: 0;

  font-weight: ${fontWeights.ultrabold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [20, 24], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 33], bases: [16, 20], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const Organization = styled.p`
  margin: 0;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [14, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [18, 22], bases: [16, 20], unit: '' },
    ],
    breakpoints.spacings
  )};
`;
