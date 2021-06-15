import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyle } from '../../styles/global';

import '@csstools/normalize.css';
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

import Footer from '../Footer';
import Header from '../Header';
import StaticGradientBackground from '../GradientBackground';

/**
 * The common Layout shared across all pages
 *
 * @see [Layout Components](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/)
 *
 */
const Layout = ({ children, location }) => {
  return (
    <>
      <GlobalStyle />

      {/** Only temporary until having a full dynamic gradient background */}
      <StaticGradientBackground pathName={location.pathname} position='top' />

      <Header location={location} />

      <main>{children}</main>

      <Footer />

      {/** Only temporary until having a full dynamic gradient background */}
      <StaticGradientBackground position='bottom' />
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
