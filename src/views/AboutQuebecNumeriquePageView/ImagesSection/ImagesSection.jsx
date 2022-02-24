// vendors
import React from 'react';
import styled from 'styled-components';

// components
import Center from '../../../components/LayoutSections/Center';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// images
import QN01 from '../../../images/about/quebec-numerique/QN01.png';
import QN02 from '../../../images/about/quebec-numerique/QN02.png';

// styles
import breakpoints from '../../../styles/breakpoints';

const ImageContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [40, 120], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const Image = styled.img`
  width: 48%;
  ${breakpointsRange(
    [{ prop: 'borderRadius', sizes: [5, 12], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const ImagesSection = () => (
  <Center maxWidth='1280px' gutters='var(--container-gutter)'>
    <ImageContainer>
      <Image src={QN01} />
      <Image src={QN02} />
    </ImageContainer>
  </Center>
);

export default ImagesSection;
