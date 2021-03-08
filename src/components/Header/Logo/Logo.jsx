// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { hideVisually } from 'polished';

// images
import LogoSVG from '../../../images/logo-waq-2021.svg';

// styles
import { Img, LogoWrapperStyle } from './Logo.styles';

const Logo = ({ isHomePage }) => {
  if (isHomePage) {
    return (
      <h1 css={LogoWrapperStyle}>
        <span css={hideVisually}>Web à Québec</span>

        <Img src={LogoSVG} alt='' role='presentation' />
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
