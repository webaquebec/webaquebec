import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../styles/colors';

const StyledSvg = styled.svg`
  position: absolute;
  top: -4px;
  left: 0;

  width: 100%;
  height: 180px;
`;

const HeaderGradient = ({ fillColor, ...rest }) => (
  <StyledSvg preserveAspectRatio='none' viewBox='0 0 100 20' {...rest}>
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
  </StyledSvg>
);

HeaderGradient.propTypes = {
  fillColor: PropTypes.string,
  visible: PropTypes.bool,
};

HeaderGradient.defaultProps = {
  fillColor: colors.peach,
  visible: false,
};

export default HeaderGradient;
