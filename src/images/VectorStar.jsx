import React from 'react';
import PropTypes from 'prop-types';

const VectorStar = ({ color, filled, strokeWidth, ...rest }) => (
  <svg
    viewBox='0 0 17 17'
    fill={filled ? color : 'none'}
    xmlns='http://www.w3.org/2000/svg'
    {...rest}
  >
    <path
      stroke={!filled ? color : ''}
      strokeWidth={strokeWidth || ''}
      d='M8.01056 0.322028L9.47474 4.6597L13.2591 2.15525L11.6395 6.45034L16.1324 6.98022L12.1805 9.2202L15.2883 12.5577L10.8291 11.677L11.1015 16.2646L8.2529 12.6955L5.5462 16.3734L5.61848 11.779L1.21749 12.8333L4.17193 9.37705L0.135422 7.29353L4.60409 6.58813L2.81752 2.35976L6.69707 4.7141L8.01056 0.322028Z'
    />
  </svg>
);

VectorStar.propTypes = {
  /**
   * Color of the vector
   */
  color: PropTypes.string,
  /**
   * Whether it is filled or not
   */
  filled: PropTypes.bool,
  /**
   * Stroke width of the vector
   */
  strokeWidth: PropTypes.string,
};

VectorStar.defaultProps = {
  color: undefined,
  filled: true,
  strokeWidth: undefined,
};

export default VectorStar;
