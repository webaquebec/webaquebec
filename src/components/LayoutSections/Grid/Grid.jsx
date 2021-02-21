import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * @module Grid
 * @description
 * The **Grid** layout offers a true responsive grid formation
 * making items grow, shrink, and wrap together without breaching the column boundaries.
 *
 * @see [https://every-layout.dev/](https://every-layout.dev/)
 *
 * @example
 * <Grid minWidth='350px' space='2rem'>
 *   <div><!-- child element --></div>
 *   <div><!-- another child element --></div>
 *   <div><!-- etc --></div>
 * </Grid>
 */
const Grid = styled.div`
  /* Modern browsers */
  @supports (grid-gap: 0) {
    display: grid;
    grid-gap: ${({ space }) => space};
    grid-template-columns: repeat(
      auto-fit,
      minmax(min(${({ minWidth }) => minWidth}, 100%), 1fr)
    );
  }

  /* IE11 fallback */
  @media screen and (-ms-high-contrast: active),
    screen and (-ms-high-contrast: none) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    margin: calc(${({ space }) => space} / 2 * -1);

    > * {
      width: calc(100% / ${({ limit, space }) => limit - space});
      min-width: ${({ minWidth }) => minWidth};
      margin: calc(${({ space }) => space} / 2);
    }
  }
`;

Grid.propTypes = {
  space: PropTypes.string,
  minWidth: PropTypes.string,
};

Grid.defaultProps = {
  /**
   * The minimum value for the CSS min() function
   */
  minWidth: '250px',
  /**
   * The space (grid-gap) between the grid children / cells
   */
  space: '1rem',
  /**
   * The maximum number of elements allowed to appear in the horizontal configuration
   * (used only as a fallback for IE11)
   */
  limit: '3',
};

export default Grid;
