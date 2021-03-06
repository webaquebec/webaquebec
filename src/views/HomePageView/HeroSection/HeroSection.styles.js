// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { fontFamilies, fontWeights } from '../../../styles/typography';

export const StyledHeroSection = styled.header`
  position: relative;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [86, 130], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [128, 173], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const Dates = styled.p`
  color: ${colors.bleu80};
  font-weight: ${fontWeights.bold};
  font-family: ${fontFamilies.redaction35};
  white-space: nowrap;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [32, 94], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [32, 94], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [64, 164], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const StarSeparator = styled.img`
  ${breakpointsRange(
    [{ prop: 'marginLeft', sizes: [12, 64], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ${breakpointsRange(
    [{ prop: 'marginRight', sizes: [12, 64], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ${breakpointsRange(
    [{ prop: 'width', sizes: [24, 50], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const MapPin = styled.img`
  ${breakpointsRange(
    [{ prop: 'width', sizes: [25, 35], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const AddressFirstLine = styled.p`
  margin-top: 12px;
  margin-bottom: 0;

  color: ${colors.gris30};
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [14, 20], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const AddressSecondLine = styled.p`
  margin: 0;

  color: ${colors.gris30};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [12, 16], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
