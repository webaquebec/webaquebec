import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyle } from '../../styles/global';

import '@csstools/normalize.css';
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import Footer from '../Footer';
import Header from '../Header';
import PageBackground from '../PageBackground/PageBackground';

// styles
import colors from '../../styles/colors';

const optionsByLocation = {
  home: 'kiwi',
  programmation: 'pineapple',
  blogue: 'watermelon',
  faq: 'plum',
  billetterie: 'kiwi',
  partenaires: 'pineapple',
  'a-propos': 'plum',
  waqademie: 'watermelon',
  404: 'watermelon',
};

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

  const getOptionsByLocation = () => {
    if (pathname === undefined || pathname === '/')
      return optionsByLocation.home;

    return optionsByLocation[pathname];
  };

  const current = getOptionsByLocation() || optionsByLocation.home;

  return (
    <>
      <GlobalStyle />

      <PageBackground pathname={pathname} />

      <Header pathname={pathname} />

      <main
        css={`
          --page-bg-color: ${colors[current]};
        `}
      >
        {children}
      </main>

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
