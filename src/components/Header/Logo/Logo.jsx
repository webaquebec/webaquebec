// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { hideVisually } from 'polished';

// images
import logoSVG from '../../../images/logo-waq-22.svg';

// styles
import { Img, LogoWrapperStyle } from './Logo.styles';

const Logo = ({ isHomePage, onClick }) => {
  if (isHomePage) {
    return (
      <h1 css={LogoWrapperStyle}>
        <span css={hideVisually}>Web à Québec</span>
        <Img src={logoSVG} alt='' role='presentation' />
      </h1>
    );
  }

  return (
    <Link
      css={LogoWrapperStyle}
      to='/'
      activeClassName='active'
      partiallyActive
      onClick={onClick}
    >
      <span css={hideVisually}>Accueil</span>

      <Img src={logoSVG} alt='' role='presentation' />
    </Link>
  );
};

Logo.propTypes = {
  isHomePage: PropTypes.bool,
  onClick: PropTypes.func,
};

Logo.defaultProps = {
  isHomePage: false,
  onClick: () => {},
};

export default Logo;
