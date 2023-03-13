import React from 'react';
import PropTypes from 'prop-types';

// styles
import colors from '../../styles/colors';
import { TimeWrapper } from './TimeStamp.styles';
import Box from '../LayoutSections/Box';

const TimeStamp = ({ beginsAt, endsAt, ...rest }) => (
  <Box
    padding='12px'
    lightColor={colors.white}
    darkColor={colors.gris90}
    borderWidth='2px'
    css={`
      min-width: 69px;

      border-radius: 8px;
      border-color: ${colors.gris30};
    `}
    {...rest}
  >
    <TimeWrapper>
      {beginsAt}
      <br />
      <span>{`à ${endsAt}`}</span>
    </TimeWrapper>
  </Box>
);

TimeStamp.propTypes = {
  beginsAt: PropTypes.string.isRequired,
  endsAt: PropTypes.string.isRequired,
};

export default TimeStamp;
