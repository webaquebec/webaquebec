// vendors
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Noise, Gradient, Background } from './BackgroundGradient.styles';

// styles
import colors from '../../styles/colors';

const optionsByLocation = {
  home: ['cherry', 'apricot'],
  programmation: ['apricot', 'earlyDawn'],
  blogue: ['apricot', 'earlyDawn'],
  faq: ['bleu40', 'blush'],
  billetterie: ['cherry', 'apricot'],
  partenaires: ['bleu40', 'blush'],
  'a-propos': ['apricot', 'earlyDawn'],
  waqademie: ['cherry', 'apricot'],
};

const BackgroundGradient = ({ pathname }) => {
  const getOptionsByLocation = () => {
    if (pathname === undefined || pathname === '/')
      return optionsByLocation.home;

    return optionsByLocation[pathname];
  };

  const current = getOptionsByLocation() || optionsByLocation.home;

  return (
    <>
      <Background
        css={`
          background-color: ${colors[current[1]]};
        `}
      />

      <Gradient
        css={`
          box-shadow: inset -24px -62px 250px ${colors[current[0]]},
            inset 51px 33px 250px ${colors[current[0]]};
        `}
      />

      <Noise />
    </>
  );
};

BackgroundGradient.propTypes = {
  pathname: PropTypes.string,
};

BackgroundGradient.defaultProps = {
  pathname: undefined,
};

export default BackgroundGradient;
