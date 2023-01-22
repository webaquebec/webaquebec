// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

// components
import Center from '../../../components/LayoutSections/Center';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';

const ImageContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [64, 120], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const Image = styled(GatsbyImage)`
  width: 48%;

  ${breakpointsRange(
    [{ prop: 'borderRadius', sizes: [5, 12], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const ImagesSection = ({ images }) => (
  <Center maxWidth='1280px' gutters='var(--container-gutter)'>
    <ImageContainer>
      <Image fluid={images.first} alt='' role='presentation' />
      <Image fluid={images.second} alt='' role='presentation' />
    </ImageContainer>
  </Center>
);

ImagesSection.propTypes = {
  images: PropTypes.shape({
    first: PropTypes.shape({
      src: PropTypes.string,
      srcSet: PropTypes.string,
      srcSetWebp: PropTypes.string,
      aspecRatio: PropTypes.number,
      base64: PropTypes.string,
    }),
    second: PropTypes.shape({
      src: PropTypes.string,
      srcSet: PropTypes.string,
      srcSetWebp: PropTypes.string,
      aspecRatio: PropTypes.number,
      base64: PropTypes.string,
    }),
  }).isRequired,
};

export default ImagesSection;
