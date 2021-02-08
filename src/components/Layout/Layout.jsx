import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyle } from '../../styles/global';

import '@csstools/normalize.css';
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />

      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
