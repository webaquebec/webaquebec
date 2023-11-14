import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyle } from '../../styles/global';

import '@csstools/normalize.css';
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import 'mapbox-gl/dist/mapbox-gl.css';

// import '../../fonts/Redaction/redaction.css';

import Footer from '../Footer';
import Header from '../Header';
import BackgroundGradient from '../BackgroundGradient/BackgroundGradient';
import LavaLamp from '../LavaLamp';

/**
 * The common Layout shared across all pages
 *
 * @see [Layout Components](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/)
 *
 */
const Layout = ({ children, location }) => {
  const pathname =
    !!location.pathname && location.pathname === '/'
      ? location.pathname
      : location.pathname.split('/').filter((current) => current)[0];

  return (
    <>
      <GlobalStyle />

      <BackgroundGradient pathname={pathname} />

      <LavaLamp pathname={pathname} />

      <Header pathname={pathname} />

      <main>{children}</main>

      <Footer />
    </>
  );
};

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  /**
   * Child node elements
   */
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  location: {
    pathname: undefined,
  },
};

export default Layout;
