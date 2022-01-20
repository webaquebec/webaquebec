// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import { h4Style, introStyle } from '../../../styles/global';
import colors from '../../../styles/colors';

export const SectionContainer = styled.div`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [32, 62], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [24, 57], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const TextContainer = styled.div`
  ${breakpointsRange(
    [{ prop: 'marginLeft', sizes: [71, 107], bases: [16, 20] }],
    breakpoints.spacings
  )};

  max-width: 426px;
`;

export const ImgContainer = styled.div`
  object-fit: contain;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Title = styled.h2`
  ${h4Style}
  color: ${colors.bleu80};
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
    [{ prop: 'marginBottom', sizes: [24, 56], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
