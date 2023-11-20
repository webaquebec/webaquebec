// vendors
import React from 'react';
import PropTypes from 'prop-types';

// styles
import colors from '../styles/colors';

const VectorKeyboard = ({ color, ...rest }) => (
  <svg id='b' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 14' {...rest}>
    <path
      fill={color}
      d='m18,2v10H2V2h16m0-2H2C.9,0,0,.9,0,2v10c0,1.1.89,2,1.99,2h16c1.1,0,2-.9,2-2V2c0-1.1-.9-2-2-2Zm-9,3h2v2h-2v-2Zm0,3h2v2h-2v-2Zm-3-3h2v2h-2v-2Zm0,3h2v2h-2v-2Zm-3,0h2v2h-2v-2Zm0-3h2v2h-2v-2Zm3,6h8v2H6v-2Zm6-3h2v2h-2v-2Zm0-3h2v2h-2v-2Zm3,3h2v2h-2v-2Zm0-3h2v2h-2v-2Z'
    />
  </svg>
);

export default VectorKeyboard;

VectorKeyboard.propTypes = {
  color: PropTypes.string,
};

VectorKeyboard.defaultProps = {
  color: colors.black,
};
