// vendors
import styled from 'styled-components';

// utils
import GatsbyImage from 'gatsby-image';
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import { h4Style, introStyle } from '../../../styles/global';
import colors from '../../../styles/colors';
import { greaterThan } from '../../../utils/mediaQuery';
import { fontFamilies } from '../../../styles/typography';

export const SectionContainer = styled.section`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [32, 62], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [24, 57], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;
export const TextContainer = styled.div`
  display: flex;

  ${greaterThan(811)} {
    justify-content: flex-end;
  }
`;

export const TextWrapper = styled.div`
  /* ${breakpointsRange(
    [{ prop: 'marginLeft', sizes: [71, 107], bases: [16, 20] }],
    breakpoints.spacings
  )}; */

  ${greaterThan(811)} {
    max-width: 426px;
  }
`;

export const ImgContainer = styled.div`
  object-fit: contain;
`;

export const Img = styled(GatsbyImage)`
  width: 100%;

  ${breakpointsRange(
    [{ prop: 'borderRadius', sizes: [16, 16], bases: [16, 20] }],
    breakpoints.spacings
  )};

  border: 3px solid ${colors.blueberry};
`;

export const Title = styled.h2`
  ${h4Style}

  color: ${colors.blueberry10};
  font-family: ${fontFamilies.redaction10};

  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [24, 70], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [8, 16], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const Text = styled.p`
  ${introStyle}

  margin-top: 0;

  color: ${colors.gris100};

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [24, 24], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
