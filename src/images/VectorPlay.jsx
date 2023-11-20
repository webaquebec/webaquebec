// vendors
import React from 'react';
import PropTypes from 'prop-types';

// styles
import colors from '../styles/colors';

const VectorPlay = ({ color, ...rest }) => (
  <svg
    id='b'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 52.82 70.42'
    {...rest}
  >
    <polygon points='0 0 0 70.42 52.82 35.21 0 0' fill={color} />
  </svg>
);

export default VectorPlay;

VectorPlay.propTypes = {
  color: PropTypes.string,
};

VectorPlay.defaultProps = {
  color: colors.black,
};
