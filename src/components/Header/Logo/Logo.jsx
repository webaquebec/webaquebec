// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { hideVisually } from 'polished';

import LazyAnimation from '../../LazyAnimation';

// images
import LogoSVG from '../../../images/logo-waq-21-sticker.svg';

// styles
import { Img, LogoWrapperStyle } from './Logo.styles';
import { easing } from '../../../styles/animation';

const Logo = ({ isHomePage }) => {
  if (isHomePage) {
    return (
      <h1 css={LogoWrapperStyle}>
        <span css={hideVisually}>Web à Québec</span>

        <LazyAnimation
          transition={{
            duration: '250ms',
            easing: easing.outCustom,
            scale: { initial: '0', final: '1' },
            rotate: {
              initial: '-5deg',
              final: '0deg',
            },
          }}
        >
          <Img src={LogoSVG} alt='' role='presentation' />
        </LazyAnimation>
      </h1>
    );
  }

  return (
    <Link
      css={LogoWrapperStyle}
      to='/'
      activeClassName='active'
      partiallyActive
    >
      <span css={hideVisually}>Accueil</span>

      <Img src={LogoSVG} alt='' role='presentation' />
    </Link>
  );
};

Logo.propTypes = {
  isHomePage: PropTypes.bool,
};

Logo.defaultProps = {
  isHomePage: false,
};

export default Logo;
