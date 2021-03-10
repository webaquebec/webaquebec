import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyle } from '../../styles/global';

import '@csstools/normalize.css';
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

import Footer from '../Footer';

/**
 * The common Layout shared across all pages
 *
 * @see [Layout Components](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/)
 *
 */
const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />

      <main>{children}</main>

      <Footer />
    </>
  );
};

Layout.propTypes = {
  /**
   * Child node elements
   */
  children: PropTypes.node.isRequired,
};

export default Layout;
