// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';

// utils
import breakpointsRange from '../../utils/breakpointsRange';

// Components
import Grid from '../LayoutSections/Grid';
import Card from './Card';

// styles
import breakpoints from '../../styles/breakpoints';

const listStyle = css`
  ${breakpointsRange(
    [{ prop: '--space', sizes: [40, 64], bases: [16, 20] }],
    breakpoints.spacings
  )};

  margin: 0;
  padding: 0;

  list-style: none;
`;

const CardGrid = ({ children }) => {
  const nodes = React.Children.toArray(children);

  return (
    <Grid
      as='ul'
      minWidth='328px'
      space='var(--space)'
      limit='3'
      css={listStyle}
    >
      {nodes.map(({ key, props }) => (
        <li key={key}>
          <Card {...props} />
        </li>
      ))}
    </Grid>
  );
};

CardGrid.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      props: PropTypes.shape({
        title: PropTypes.string.isRequired,
        titleAs: PropTypes.string,
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        contentAs: PropTypes.string,
        picture: PropTypes.shape({}).isRequired,
        to: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};

export default CardGrid;
