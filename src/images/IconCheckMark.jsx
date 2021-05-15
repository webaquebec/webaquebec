// vendors
import React from 'react';

// styles
import colors from '../styles/colors';

const IconCheckmark = (props) => (
  <svg
    viewBox='0 0 10 7'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M2 3.62617L4.12475 5.6L8 2'
      stroke={colors.bleu}
      strokeWidth='2'
      strokeLinecap='square'
    />
  </svg>
);

export default IconCheckmark;
