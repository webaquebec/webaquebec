// vendors
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Background } from './PageBackground.styles';

// styles
import colors from '../../styles/colors';

const optionsByLocation = {
  home: 'kiwi',
  programmation: 'pineapple',
  blogue: 'watermelon',
  faq: 'plum',
  'vivre-le-waq': 'pineapple',
  billetterie: 'kiwi',
  partenaires: 'pineapple',
  'a-propos': 'plum',
  waqademie: 'watermelon',
  404: 'watermelon',
};

const PageBackground = ({ pathname }) => {
  const getOptionsByLocation = () => {
    if (pathname === undefined || pathname === '/')
      return optionsByLocation.home;

    return optionsByLocation[pathname];
  };

  const current = getOptionsByLocation() || optionsByLocation.home;

  return (
    <Background
      css={`
        background-color: ${colors[current]};
      `}
    />
  );
};

PageBackground.propTypes = {
  pathname: PropTypes.string,
};

PageBackground.defaultProps = {
  pathname: undefined,
};

export default PageBackground;
