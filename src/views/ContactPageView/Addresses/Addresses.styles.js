// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { h3Style, h6Style, introStyle } from '../../../styles/global';
import { fontFamilies } from '../../../styles/typography';

export const SectionContainer = styled.section`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [56, 30], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [32, 62], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const MapContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: end;
  width: 100%;
  max-width: 748px;
  min-height: 250px;
  overflow: hidden;

  background-color: white;
  border: 3px solid ${colors.blueberry10};
  border-radius: 16px;

  canvas {
    border-radius: 16px;
  }

  .mapboxgl-ctrl-bottom-right {
    right: 14px;
  }
`;

export const OurAddresses = styled.h2`
  ${h3Style}

  margin: 0;
  ${breakpointsRange(
    [{ prop: 'margin-bottom', sizes: [26, 30], bases: [16, 20] }],
    breakpoints.spacings
  )};

  color: ${colors.blueberry10};

  font-family: ${fontFamilies.redaction10};

  @media (max-width: 800px) {
    ${breakpointsRange(
      [{ prop: 'margin-left', sizes: [42, 54], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }
`;

// export const AddressesSpan = styled.span`
//   font-family: ${fontFamilies.redaction10};
// `;

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

export const AddressName = styled.h3`
  ${h6Style}
  margin: 0;
  padding-left: 14px;

  color: ${colors.blueberry10};
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
