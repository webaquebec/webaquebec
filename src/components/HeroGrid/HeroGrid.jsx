// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import Center from '../LayoutSections/Center';
import Hero from '../Hero';

// images
import vectorHeroGrid from '../../images/vectorHeroGrid.svg';

// styles
import { GridWrapper, GridVector, GridContent } from './HeroGrid.styles';

const HeroGrid = React.forwardRef(({ title, displayYear }, ref) => (
  <Center ref={ref} maxWidth='1080px'>
    <GridWrapper>
      <GridVector src={vectorHeroGrid} alt='' role='presentation' />
      <GridContent>
        <Hero title={title} displayYear={displayYear} />
      </GridContent>
    </GridWrapper>
  </Center>
));

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
