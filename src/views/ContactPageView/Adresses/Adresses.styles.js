// vendors
import styled from 'styled-components';

// components
import StyledSection from '../../../components/SectionContainer/SectionContainer.styles';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { h3Style, h6Style, introStyle } from '../../../styles/global';
import { fontFamilies } from '../../../styles/typography';

export const SectionContainer = styled(StyledSection)`
  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [56, 30], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [32, 62], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const FakeMapContainer = styled.div`
  display: flex;
  justify-content: end;
  max-width: 748px;

  @media (min-width: 800px) {
    padding-left: 32px;
  }
`;

export const FakeMap = styled.div`
  ${breakpointsRange(
    [{ prop: 'height', sizes: [213, 474], bases: [1, 1], unit: 'px' }],
    breakpoints.spacings
  )};

  width: 100%;

  background-color: white;
  border-color: ${colors.bleu80};
  border-style: solid;
  border-width: 3px;
  border-radius: 16px;
`;

export const NosAdresses = styled.h2`
  ${h3Style}
  margin: 0;
  ${breakpointsRange(
    [{ prop: 'margin-bottom', sizes: [26, 30], bases: [16, 20] }],
    breakpoints.spacings
  )};

  color: ${colors.bleu80};

  @media (max-width: 800px) {
    padding-left: 33px;
    ${breakpointsRange(
      [{ prop: 'margin-left', sizes: [28, 40], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }
`;

export const AdressesSpan = styled.span`
  font-family: ${fontFamilies.redaction20};
`;

export const AdresseBlockContainer = styled.div`
  @media (max-width: 800px) {
    margin-left: 20px;
  }
`;

export const AdresseBlock = styled.div`
  margin-bottom: 24px;
`;

export const StickerHeaderSpan = styled.div`
  display: flex;
`;

export const Sticker = styled.img`
  padding-top: 2px;
  ${breakpointsRange(
    [{ prop: 'width', sizes: [28, 40], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const AdresseName = styled.h3`
  ${h6Style}
  margin: 0;
  padding-left: 14px;

  color: ${colors.bleu80};
`;

export const ContactInfo = styled.div`
  ${introStyle}
  ${breakpointsRange(
    [{ prop: 'margin-left', sizes: [42, 54], bases: [16, 20] }],
    breakpoints.spacings
  )};

  max-width: 265px;

  color: ${colors.gris100};
`;

export const Telephone = styled.a`
  color: ${colors.gris100};
  text-decoration: none;
`;
