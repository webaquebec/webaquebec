import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';

import colors from '../../styles/colors';

/**
 * position: absolute;
top: 0;
left: 0;
z-index: 1000;
width: 100%;
height: 220px;

        style='display: block; visibility: inherit; opacity: 1;'
 */

const svgStyle = css`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 200px;
`;

const HeaderGradient = ({ fillColor, ...rest }) => {
  return (
    <svg
      preserveAspectRatio='none'
      viewBox='0 0 100 20'
      css={svgStyle}
      {...rest}
    >
      <defs>
        <linearGradient
          id='verticalAlphaGradient'
          x1='0'
          y1='0%'
          x2='0%'
          y2='100%'
        >
          <stop offset='60%' stopColor='#fff' />

          <stop stopColor='#111' offset='90%' />
          <stop stopColor='#000' offset='100%' />
        </linearGradient>

        <mask
          id='masking'
          maskUnits='objectBoundingBox'
          maskContentUnits='objectBoundingBox'
        >
          <rect y='0' width='1' height='1' fill='url(#verticalAlphaGradient)' />
        </mask>
      </defs>

      <rect
        className='bg-gradient-kid-2 bg-gradient'
        y='0'
        width='100'
        mask='url(#masking)'
        height='20'
        fill={fillColor}
      />
    </svg>
  );
};

HeaderGradient.propTypes = {
  fillColor: PropTypes.string,
};

HeaderGradient.defaultProps = {
  fillColor: colors.gris30,
};

export default HeaderGradient;
