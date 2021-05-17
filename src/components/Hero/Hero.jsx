// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { hideVisually } from 'polished';

// styles
import { GridTitle, GridTitleWrapper, YearSticker } from './Hero.styles';

// images
import vectorYear2021 from '../../images/vectorYear2021.svg';

const Hero = ({ title, displayYear }) => {
  return (
    <GridTitleWrapper>
      <GridTitle>
        {title}
        {displayYear && <span css={hideVisually}>2021</span>}
      </GridTitle>
      {displayYear && (
        <YearSticker src={vectorYear2021} alt='' role='presentation' />
      )}
    </GridTitleWrapper>
  );
};

Hero.propTypes = {
  /**
   * Specifies the page title to display in the grid
   */
  title: PropTypes.string,
  /**
   * Specifies whether the year is displayed or not
   */
  displayYear: PropTypes.bool,
};

Hero.defaultProps = {
  title: '',
  displayYear: false,
};

export default Hero;
