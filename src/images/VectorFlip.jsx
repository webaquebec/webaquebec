// vendors
import React from 'react';
import PropTypes from 'prop-types';
import colors from '../styles/colors';

const VectorFlip = ({ color, ...rest }) => (
  <svg
    viewBox='0 0 162 198'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    {...rest}
  >
    <g>
      <path
        fill={color}
        d='M153,180h-9v-18h18v9C162,176,158,180,153,180z M126,180h-18v-18h18V180z M162,144h-18v-18h18V144z M162,108h-18V90h18V108
     z M162,72h-18V54h18V72z M162,36h-18V18h9c5,0,9,4,9,9V36z M126,36h-18V18h18V36z'
      />
      <rect x='72' width='18' height='198' fill={color} />
      <path
        d='M54,180H9c-5,0-9-4-9-9V27c0-5,4-9,9-9h45v18H18v126h36V180z'
        fill={color}
      />
    </g>
  </svg>
);

export default VectorFlip;

VectorFlip.propTypes = {
  color: PropTypes.string,
};

VectorFlip.defaultProps = {
  color: colors.black,
};
