// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { hideVisually } from 'polished';

// components
import Center from '../LayoutSections/Center';

// images
import vectorYear2021 from '../../images/vectorYear2021.svg';
import vectorHeroGrid from '../../images/vectorHeroGrid.svg';

// styles
import {
  GridWrapper,
  GridVector,
  GridContent,
  GridTitle,
  GridTitleWrapper,
  YearSticker,
} from './HeroGrid.styles';

const HeroGrid = ({ title, displayYear }) => {
  return (
    <Center maxWidth='1080px' css={GridWrapper}>
      <GridVector src={vectorHeroGrid} alt='' role='presentation' />
      <GridContent>
        <GridTitleWrapper>
          <GridTitle>
            {title}
            {displayYear && <span css={hideVisually}>2021</span>}
          </GridTitle>
          {displayYear && (
            <YearSticker src={vectorYear2021} alt='' role='presentation' />
          )}
        </GridTitleWrapper>
      </GridContent>
    </Center>
  );
};

HeroGrid.propTypes = {
  /**
   * Specifies the page title to display in the grid
   */
  title: PropTypes.string,
  /**
   * Specifies whether the year is displayed or not
   */
  displayYear: PropTypes.bool,
};

HeroGrid.defaultProps = {
  title: '',
  displayYear: false,
};

export default HeroGrid;
