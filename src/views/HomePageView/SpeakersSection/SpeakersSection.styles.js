// vendors
import styled from 'styled-components';

// utils
import { greaterThan } from '../../../utils/mediaQuery';

// images
import speakersGraphics from '../../../images/img-speakers-graphics.png';
import speakersGraphicsMobile from '../../../images/img-speakers-graphics-mobile.png';

// styles
import colors from '../../../styles/colors';
import { fontFamilies } from '../../../styles/typography';
import breakpoints from '../../../styles/breakpoints';
import breakpointsRange from '../../../utils/breakpointsRange';

export const SectionContainer = styled.section`
  color: ${colors.bleu80};

  ${breakpointsRange(
    [{ prop: 'paddingBottom', sizes: [0, 210], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const SpeakersContent = styled.div`
  max-width: 400px;
`;

export const SpeakersTitle = styled.h2`
  margin-top: 0;

  span {
    font-family: ${fontFamilies.redaction35};
  }

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [24, 40], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const SpeakersIntro = styled.p`
  margin-bottom: 32px;
`;

export const SpeakersGraphics = styled.div`
  padding: 0;

  background-image: url(${speakersGraphicsMobile});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;

  ${breakpointsRange(
    [{ prop: 'height', sizes: [832, 1155], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ${greaterThan(768)} {
    background-image: url(${speakersGraphics});
  }
`;
