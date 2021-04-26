// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';

// Components
import Grid from '../LayoutSections/Grid';
import Card from './Card';

const listStyle = css`
  margin: 0;
  padding: 0;

  list-style: none;
`;

const CardGrid = ({ children }) => {
  const nodes = React.Children.toArray(children);

  return (
    <Grid as='ul' minWidth='280px' space='4rem' limit='3' css={listStyle}>
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
