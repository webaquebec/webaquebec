// vendors
import React from 'react';
import PropTypes from 'prop-types';

// styles
import colors from '../../styles/colors';
import StyledSection from './SectionContainer.styles';

const SectionContainer = ({ faded, padded, bgColor, children, ...rest }) => (
  <StyledSection $bgColor={bgColor} $padded={padded} $faded={faded} {...rest}>
    {children}
  </StyledSection>
);

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  faded: PropTypes.bool,
  padded: PropTypes.bool,
  bgColor: PropTypes.string,
};

SectionContainer.defaultProps = {
  faded: false,
  padded: false,
  bgColor: colors.peach,
};

export default SectionContainer;
