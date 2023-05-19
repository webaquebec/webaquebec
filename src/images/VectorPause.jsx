// vendors
import React from 'react';
import PropTypes from 'prop-types';

// styles
import colors from '../styles/colors';

const VectorPause = ({ color, ...rest }) => (
  <svg
    version='1.1'
    viewBox='0 0 54.8 63.8'
    xmlns='http://www.w3.org/2000/svg'
    {...rest}
  >
    <g>
      <rect y='0.1' width='18.8' height='63.7' fill={color} />
      <rect x='36' width='18.8' height='63.8' fill={color} />
    </g>
  </svg>
);

export default VectorPause;

VectorPause.propTypes = {
  color: PropTypes.string,
};

VectorPause.defaultProps = {
  color: colors.black,
};
